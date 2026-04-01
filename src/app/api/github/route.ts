// src\app\api\github\route.ts
// Endpoint para obtener los repositorios de GitHub
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/richglez/repos?sort=updated&per_page=6",
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "richglez-portfolio",
        },
        next: { revalidate: 3600 }, // 3600 segundos
      },
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching repos:", error);
    return NextResponse.json(
      { error: "Error fetching repos" },
      { status: 500 },
    );
  }
}
