import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

export async function GET(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "unknown";

  // 🚫 Rate limit antes del fetch
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const res = await fetch(
      "https://api.github.com/users/richglez/repos?sort=updated&per_page=6",
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "richglez-portfolio",
          Authorization: `token ${process.env.GITHUB_TOKEN}`, // Token protegido (process.env)
        },
        next: { revalidate: 3600 }, // Cache (revalidate)
      },
    );

    // Manejo de errores del fetch de GitHub
    if (!res.ok) {
      return NextResponse.json(
        { error: "GitHub API error" },
        { status: res.status },
      );
    }

    const data = await res.json();

    // 🔐 Headers de seguridad (PRO)
    const response = NextResponse.json(data);
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "no-referrer");
    response.headers.set("Cache-Control", "s-maxage=3600"); // Mejora caching en Vercel/CDN

    return response;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return NextResponse.json(
      { error: "Error fetching repos" },
      { status: 500 },
    );
  }
}
