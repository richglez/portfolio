"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import TypingText from "./TypingText";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frameworks",
      items: [
        {
          name: "React",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z"
                fill="#61DAFB"
              />
            </svg>
          ),
          level: 40,
          color: "from-cyan-400 to-blue-500",
        },
        {
          name: "Next.js",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
              <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
            </svg>
          ),
          level: 35,
          color: "from-gray-100 to-gray-300",
        },
        {
          name: "Tailwind CSS",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
                fill="#06B6D4"
              />
            </svg>
          ),
          level: 60,
          color: "from-cyan-400 to-teal-500",
        },
        {
          name: "Angular",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 6.5l1.34 11.63L12 22l7.66-3.87L21 6.5L12 2zm0 1.78l6.75 2.97-1.06 9.19L12 19.28l-5.69-3.34-1.06-9.19L12 3.78zM12 5.5L8.26 14h1.88l.74-2h4.24l.74 2h1.88L12 5.5zm0 2.8l1.43 3.7h-2.86L12 8.3z"
                fill="#DD0031"
              />
              <path
                d="M12 5.5L8.26 14h1.88l.74-2h4.24l.74 2h1.88L12 5.5zm0 2.8l1.43 3.7h-2.86L12 8.3z"
                fill="#C3002F"
              />
            </svg>
          ),
          level: 50,
          color: "from-red-600 to-red-800",
        },
        {
          name: "Node.js",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.17-.11.21l-7.44 4.29c-.06.04-.16.04-.22 0L9.82 19.9c-.07-.04-.14-.04-.2 0-.53.3-.63.36-1.12.51-.13.04-.32.09.07.26l2.45 1.45c.24.14.5.21.78.21.27 0 .54-.07.77-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.77-.2zm1.85 6.57c-2.46 0-3.07.56-3.07 1.67 0 .13.1.22.23.22h.93c.11 0 .21-.08.22-.19.16-.96.61-1.45 2.69-1.45 1.65 0 2.36.38 2.36 1.26 0 .51-.2.89-2.77 1.14-2.14.21-3.47.69-3.47 2.39 0 1.57 1.33 2.51 3.55 2.51 2.5 0 3.72-.87 3.88-2.75 0-.07-.02-.13-.06-.18-.04-.05-.1-.08-.16-.08h-.94c-.1 0-.2.07-.22.17-.25 1.09-.85 1.44-2.5 1.44-1.84 0-2.06-.66-2.06-1.15 0-.58.25-.74 2.68-1.07 2.41-.32 3.56-.78 3.56-2.44 0-1.7-1.42-2.71-3.9-2.71z"
                fill="#339933"
              />
            </svg>
          ),
          level: 59,
          color: "from-green-500 to-green-700",
        },
        {
          name: "Express",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
              <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
            </svg>
          ),
          level: 55,
          color: "from-gray-400 to-gray-600",
        },
        {
          name: ".NET",
          icon: (
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>.NET</title>
              <path
                d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"
                fill="#9611F9"
              />
            </svg>
          ),
          level: 70,
          color: "from-purple-600 to-indigo-700",
        },
        {
          name: "Vite",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.388-.355l.69-3.339a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316z"
                fill="url(#a)"
              />
              <path
                d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.388-.355l.69-3.339a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316z"
                fill="url(#b)"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="6"
                  y1="33"
                  x2="235"
                  y2="344"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#41D1FF" />
                  <stop offset="1" stopColor="#BD34FE" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="194.651"
                  y1="8.818"
                  x2="236.076"
                  y2="292.989"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFEA83" />
                  <stop offset=".083" stopColor="#FFDD35" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
              </defs>
            </svg>
          ),
          level: 20,
          color: "from-purple-500 via-blue-500 to-yellow-400",
        },
      ],
    },
    {
      category: "Languages",
      items: [
        {
          name: "TypeScript",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="5" fill="#3178C6" />
              <path
                d="M13.3 16.5v3.4c.4.2.9.4 1.4.5.5.1 1 .2 1.6.2.5 0 1-.1 1.5-.2s.9-.3 1.3-.6c.4-.3.7-.6.9-1.1.2-.4.3-.9.3-1.4 0-.4-.1-.8-.2-1.1-.1-.3-.3-.6-.6-.8-.2-.3-.5-.5-.9-.7-.3-.2-.7-.4-1.2-.6-.3-.1-.6-.3-.8-.4-.2-.1-.4-.3-.5-.4-.1-.1-.2-.3-.3-.4 0-.1-.1-.3-.1-.5 0-.4.1-.7.4-.9.3-.2.6-.3 1.1-.3.2 0 .5 0 .7.1.2 0 .5.1.7.2.2.1.4.2.6.3.2.1.3.2.5.4l1.5-1.7c-.3-.3-.7-.6-1.1-.8-.4-.2-.8-.4-1.2-.5-.4-.1-.9-.2-1.3-.2-.6 0-1.1.1-1.6.3-.5.2-.9.4-1.3.7-.4.3-.6.7-.8 1.1-.2.4-.3.9-.3 1.4 0 .5.1.9.3 1.3.2.4.4.7.7.9.3.3.6.5 1 .7.4.2.8.4 1.2.5.3.1.6.3.9.4.2.1.4.3.6.4.2.1.3.3.4.5.1.2.1.4.1.6 0 .2 0 .4-.1.5-.1.2-.2.3-.4.4-.2.1-.4.2-.6.3-.2.1-.5.1-.8.1-.3 0-.6 0-.9-.1-.3-.1-.5-.2-.8-.3-.3-.1-.5-.3-.7-.5-.2-.2-.4-.4-.6-.6L13.3 16.5zM6 9.5h3.5V20H12V9.5h3.5V7H6v2.5z"
                fill="white"
              />
            </svg>
          ),
          level: 70,
          color: "from-[#2F74C0] to-blue-900",
        },
        {
          name: "JavaScript",
          icon: (
            <svg
              className="w-8 h-8 rounded"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#F7DF1E"
            >
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
            </svg>
          ),
          level: 75,
          color: "from-yellow-300 to-yellow-600",
        },
        {
          name: "C++",
          icon: (
            <svg
              className="w-8 h-8"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <rect width="24" height="24" rx="5" fill="#00599C" />
              <path
                d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"
                fill="white"
              />
            </svg>
          ),
          level: 80,
          color: "from-[#00599C] to-[#3d96d9]",
        },
        {
          name: "C#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9"
              viewBox="0 0 128 128"
            >
              <path
                fill="#9B4F96"
                d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
              />
              <path
                fill="#68217A"
                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
              />
              <path
                fill="#fff"
                d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
              />
            </svg>
          ),
          level: 70,
          color: "from-[#d669cf] to-[#8d4388]",
        },
        {
          name: "Visual Basic",
          icon: (
            <Image
              src={"/VB.NET_Logo.png"}
              alt="VB"
              height={32}
              width={32}
            ></Image>
          ),
          level: 80,
          color: "from-sky-700 to-cyan-600",
        },
        {
          name: "Python",
          icon: (
            <Image
              src="/python-svgrepo-com.svg"
              alt="Python logo"
              width={32}
              height={32}
            ></Image>
          ),
          level: 82,
          color: "from-[#FDD331] via-teal-600 to-[#2472B2]",
        },
        {
          name: "Java",
          icon: (
            <Image
              src={"/java-svgrepo-com.svg"}
              alt="Java logo"
              width={32}
              height={32}
            ></Image>
          ),
          level: 80,
          color: "from-red-600 to-sky-600",
        },
        {
          name: "Prolog",
          icon: (
            <Image
              src={"/prolog-original.svg"}
              alt="Java logo"
              width={32}
              height={32}
            ></Image>
          ),
          level: 67,
          color: "from-red-600 to-[#AEB0B3]",
        },
        {
          name: "Assembly",
          icon: (
            <Image
              alt="AssemblyLogo"
              src={"/icons8-assembly-96.png"}
              width={32}
              height={32}
            ></Image>
          ),
          level: 50,
          color: "from-[#5B6DC2] to-[#11439D]",
        },
        {
          name: "PHP",
          icon: (
            <Image
              src={"/new-php-logo.svg"}
              alt="PHP"
              width={32}
              height={32}
              className="w-8 h-8" // 32px = 8 en Tailwind
            ></Image>
          ),
          level: 45,
          color: "from-[#777BB3] to-blue-950",
        },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        {
          name: "Git & GitHub",
          icon: (
            <Image
              src={"/git-logo-2-Photoroom.png"}
              alt="git-github"
              width={32}
              height={32}
            ></Image>
          ),
          level: 65,
          color: "from-orange-600 to-rose-900",
        },
        {
          name: "VS Code",
          icon: (
            <Image
              src={"/code-stable.png"}
              alt="vs-code"
              width={27}
              height={27}
            ></Image>
          ),
          level: 90,
          color: "from-blue-400 to-blue-700",
        },
        {
          name: "Visual Studio",
          icon: (
            <Image
              src={"/Visual_Studio_Icon_2019.svg"}
              alt="vs-code"
              width={27}
              height={27}
            ></Image>
          ),
          level: 78,
          color: "from-purple-500 to-violet-600",
        },
        {
          name: "Atom",
          icon: (
            <Image
              src={"/Atom_1.0_icon.png"}
              alt="atom"
              width={32}
              height={32}
            ></Image>
          ),
          level: 60,
          color: "from-emerald-400 to-green-700",
        },
        {
          name: "Figma",
          icon: (
            <Image
              src={"/Figma-logo.svg"}
              alt="figma-logo"
              width={18}
              height={18}
              className="w-8 h-8" // 32px = 8 en Tailwind
            />
          ),
          level: 10,
          color: "from-rose-500  via-green-400 to-sky-500",
        },
        {
          name: "MySQL",
          icon: (
            <Image
              src={"/mysql-logo-svgrepo-com.svg"}
              alt="mysql-logo"
              width={32}
              height={32}
            />
          ),
          level: 75,
          color: "from-blue-600 to-amber-400",
        },
        {
          name: "Prisma",
          icon: (
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#4AB0A7"
              width={32}
              height={32}
            >
              <title>Prisma</title>
              <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
            </svg>
          ),
          level: 20,
          color: "from-teal-500 to-green-800",
        },
        {
          //
          name: "MongoDB",
          icon: (
            <Image
              src={"/Mongodb-svgrepo-com.png"}
              alt="mongodb-logo"
              width={32}
              height={32}
            ></Image>
          ),
          level: 10,
          color: "from-green-600 to-green-900",
        },
        {
          //seal-color.png
          name: "SCSS",
          icon: (
            <Image
              src={"/seal-color.png"}
              alt="scss-logo"
              width={32}
              height={32}
              className="w-8 h-8" // 32px = 8 en Tailwind
            ></Image>
          ),
          level: 65,
          color: "from-pink-400 to-pink-800",
        },
        {
          //
          name: "CSS",
          icon: (
            <Image
              src={"/CSS3_logo_and_wordmark-pp.png"}
              alt="css-logo"
              width={30}
              height={30}
              className="w-8 h-8" // 32px = 8 en Tailwind
            ></Image>
          ),
          level: 65,
          color: "from-blue-600 to-indigo-800",
        },

        {
          //
          name: "HTML",
          icon: (
            <Image
              src={"/HTML5_logo_and_wordmar.png"}
              alt="html-logo"
              width={30}
              height={30}
              className="w-8 h-8" // 32px = 8 en Tailwind
            ></Image>
          ),
          level: 95,
          color: "from-orange-600 to-amber-800",
        },
      ],
    },
  ];

  // Variantes de animación para contenedores
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variantes para las tarjetas de categorías
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Variantes para los items dentro de las tarjetas
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Variantes para las tarjetas de estadísticas
  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen scroll-mt-24 pt-20 mb-140"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // CAMBIO: once: false para que repita al hacer scroll
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold mb-4 text-white">Skills</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
            <TypingText text="Technologies and tools that I know and still learing.!" />
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // CAMBIO: once: false y ajustamos el margin para que se oculte apenas salga
          viewport={{ once: false, amount: 0.2 }} //Significa que la animación comienza cuando el 20% del componente asoma en pantalla.
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 to-pink-500"></span>
                {category.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }} // CAMBIO
                className="space-y-5"
              >
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-linear-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          duration: 1.5,
                          delay: skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Cards con animación */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <motion.div
            variants={statsVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 text-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-2"
            >
              5+
            </motion.div>
            <div className="text-zinc-400">
              <TypingText text="Years Experience" />
            </div>
          </motion.div>

          <motion.div
            variants={statsVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 text-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold text-white mb-2"
            >
              15+
            </motion.div>
            <div className="text-zinc-400">
              <TypingText text="Technologies" />
            </div>
          </motion.div>

          <motion.div
            variants={statsVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-linear-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 text-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl font-bold text-white mb-2"
            >
              20+
            </motion.div>
            <div className="text-zinc-400">
              <TypingText text="Projects Built" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
