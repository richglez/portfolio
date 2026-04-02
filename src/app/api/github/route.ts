// src/app/api/github/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/richglez/repos?sort=updated&per_page=6", // URL de la API de GitHub para obtener los repositorios
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "richglez-portfolio",
          // PASE DE ACCESO A LA API DE GITHUB
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 }, // API responde instantáneamente porque guarda los datos en caché durante una hora.
      },
    );

    // Es buena práctica verificar si GitHub respondió bien antes de seguir
    if (!res.ok) {
      return NextResponse.json(
        { error: "GitHub API error" },
        { status: res.status },
      );
    }

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
