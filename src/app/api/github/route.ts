import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const res = await fetch(
      "https://api.github.com/users/richglez/repos?sort=updated&per_page=6",
      {
        headers: {
          "User-Agent": "richglez-portfolio",
        },
        next: { revalidate: 3600 }, // ✅ cache global segura
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "GitHub API error" },
        { status: res.status },
      );
    }

    const data = await res.json();

    const response = NextResponse.json(data);

    // 🔐 Seguridad
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "no-referrer");

    // 🌐 Cache CDN (Vercel)
    response.headers.set(
      "Cache-Control",
      "s-maxage=3600, stale-while-revalidate",
    );

    return response;
  } catch (error) {
    console.error("GitHub fetch failed");
    return NextResponse.json(
      { error: "Error fetching repos" },
      { status: 500 },
    );
  }
}
