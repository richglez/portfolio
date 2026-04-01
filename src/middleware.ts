// src/middleware.ts
import { NextResponse, NextRequest } from "next/server";

const ALLOWED_ORIGINS = [
  "https://richglez.vercel.app",
  "http://localhost:3000",
];

export function middleware(req: NextRequest) {
  // Eliminamos 'pathname' ya que el 'matcher' de abajo ya filtra las rutas
  const origin = req.headers.get("origin");
  const userAgent = (req.headers.get("user-agent") || "").toLowerCase();

  // 1. Bloqueo de Bots
  const isBot = /bot|crawler|spider|googlebot|bingbot|yandexbot/i.test(
    userAgent,
  );

  if (isBot) {
    return new NextResponse(JSON.stringify({ error: "No bots allowed" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 2. Validación de Origen (CORS)
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new NextResponse(
      JSON.stringify({ error: "Acceso no autorizado desde este dominio" }),
      { status: 403, headers: { "Content-Type": "application/json" } },
    );
  }

  // 3. Si todo está bien, permitimos el paso
  const response = NextResponse.next();

  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  }

  return response;
}

// El matcher asegura que el middleware SOLO se ejecute en /api/*
export const config = {
  matcher: "/api/:path*",
};
