import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const rateLimit = new Map<string, { count: number; reset: number }>();

function getClientIP(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);
  if (!limit || now > limit.reset) {
    rateLimit.set(ip, { count: 1, reset: now + 60000 });
    return false;
  }
  if (limit.count >= 5) return true;
  limit.count++;
  return false;
}

function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIP(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
    }
    if (body.website) return NextResponse.json({ success: true });
    const { service } = body;
    const name = typeof body.name === "string" ? body.name.trim() : body.name;
    const email = typeof body.email === "string" ? body.email.trim() : body.email;
    const message = typeof body.message === "string" ? body.message.trim() : body.message;
    if (service != null && (typeof service !== "string" || service.length > 200)) {
      return NextResponse.json({ error: "Servicio inválido" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json({ error: "Tipos inválidos" }, { status: 400 });
    }

    if (name.length < 2 || name.length > 200) {
      return NextResponse.json({ error: "El nombre debe tener entre 2 y 200 caracteres." }, { status: 400 });
    }

    if (email.length > 254 || !validateEmail(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json({ error: "El mensaje debe tener entre 10 y 2000 caracteres." }, { status: 400 });
    }

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("contact_messages").insert({
      name: sanitize(name),
      email: sanitize(email),
      service: sanitize(service || ""),
      message: sanitize(message),
    });

    if (error) {
      console.error("Supabase error:", error.message);
      return NextResponse.json({ error: "Error al guardar" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
