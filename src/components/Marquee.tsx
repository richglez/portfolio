"use client";

import Image from "next/image";

const TECHS: { name: string; icon: string }[] = [
  { name: "Npm", icon: "npm/npm-original-wordmark" },
  { name: "Node.js", icon: "nodejs/nodejs-plain" },
  { name: "NestJs", icon: "nestjs/nestjs-original" },
  { name: "TypeScript", icon: "typescript/typescript-plain" },
  { name: "JavaScript", icon: "javascript/javascript-plain" },
  { name: "React", icon: "react/react-original" },
  { name: "Expo", icon: "expo/expo-original" },
  { name: "ReactNative", icon: "reactnative/reactnative-original" },
  { name: "Express", icon: "express/express-original" },
  { name: ".NET", icon: "dotnetcore/dotnetcore-original" },
  { name: "Python", icon: "python/python-plain" },
  { name: "FastAPI", icon: "fastapi/fastapi-plain" },
  { name: "Java", icon: "java/java-plain" },
  { name: "Next.js", icon: "nextjs/nextjs-plain" },
  { name: "Tailwind", icon: "tailwindcss/tailwindcss-original" },
  { name: "Angular", icon: "angularjs/angularjs-plain" },
  { name: "PHP", icon: "php/php-plain" },
  { name: "Docker", icon: "docker/docker-original" },
  { name: "Git", icon: "git/git-plain" },
  { name: "GitHub", icon: "github/github-original" },
  { name: "Figma", icon: "figma/figma-original" },
  { name: "VS Code", icon: "vscode/vscode-plain" },
  { name: "Android Studio", icon: "androidstudio/androidstudio-plain" },
  { name: "Vercel", icon: "vercel/vercel-original" },
  { name: "Redis", icon: "redis/redis-plain" },
  { name: "Prisma", icon: "prisma/prisma-original" },
  { name: "MongoDB", icon: "mongodb/mongodb-plain" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-plain" },
  { name: "MySQL", icon: "mysql/mysql-original" },
];

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export default function MarqueeComponent() {
  const loop = [...TECHS, ...TECHS];

  return (
    <section
      className="relative w-full py-8 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-75 pt-20"
      aria-label="Tecnologías y herramientas"
    >
      <p className="mb-6 text-center text-[10px] font-mono uppercase tracking-[0.35em] text-slate-500">
        Tools & technologies
      </p>

      <div className="relative overflow-hidden marquee-fade-edges">
        <div className="flex w-max items-center gap-12 sm:gap-16 md:gap-16 animate-marquee-scroll">
          {loop.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex shrink-0 flex-col items-center justify-center"
              title={tech.name}
            >
              <Image
                src={`${BASE}/${tech.icon}.svg`}
                alt=""
                width={40}
                height={40}
                sizes="40px"
                unoptimized
                className="h-9 w-9 object-contain opacity-70 transition duration-300 hover:opacity-100 md:h-10 md:w-10"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(14%) sepia(30%) saturate(800%) hue-rotate(240deg) brightness(90%) contrast(95%)",
                }}
              />
              <span className="sr-only">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
