"use client";
import { useEffect, useState } from "react";

function HomePage() {
  // Variables
  const text =
    "Personal portfolio to showcase my projects, skills, and experience as a developer."; //Este es el texto que se va a escribir letra por letra
  const typingSpeed = 90; // Velocidad de escritura en pantalla
  const deletingSpeed = 60; // Velocidad en la cual se borrara todo el texto en pantalla
  const pauseAfterTyping = 1200; // Tiempo que se deja en pantalla antes de borrar
  const pauseBeforeRestart = 500; // Tiempo para volver a escribir desde 0

  // States
  const [displayedText, setDisplayedText] = useState(""); // Mostrar el texto en pantalla
  const [isDeleting, setIsDeleting] = useState(false); // Condicional, para saber cuando esta borrando o no
  const [index, setIndex] = useState(0); // Posicion actual dentro del texto i

  useEffect(() => {
    let timeout: NodeJS.Timeout; // para limpiar

    if (!isDeleting && index < text.length) {
      // si no estamos borrando y tampoco no llegamos al final del texto : escribimos
      // TYPING
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]); // escritura en pantalla
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      // si estamos borrando y aun hay letras por borrar
      // DELETING
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index === text.length) {
      // PAUSE AFTER TYPING
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && index === 0) {
      // aqui ya se borraron todas las letras
      // PAUSE BEFORE RESTART (🔥 FIX)
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseBeforeRestart);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <main className="relative text-white px-75">
      <section id="home" className="min-h-screen">
        <h1 className="font-bold text-7xl mt-70 mb-8">My Portfolio!.</h1>
        <p className="text-2xl text-zinc-300">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <div className="buttons flex gap-5 mt-7">
          <button
            type="button"
            className=" bg-white dark:text-black no-underline space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-gray-200 p-px font-semibold text-white px-4 py-2 h-14 w-full items-center justify-center rounded-2xl text-center text-sl sm:w-52"
          >
            Get Started
          </button>
          <button
            type="button"
            className="border border-purple-500  bg-black dark:text-white no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-purple-900 p-px font-semibold text-white px-4 py-2 h-14 w-full items-center justify-center rounded-2xl text-center text-sl sm:w-52"
          >
            GitHub
          </button>
        </div>
      </section>

      <section id="about" className="min-h-screen pt-40 scroll-mt-24">
        <h2 className="text-6xl font-bold">About</h2>
      </section>

      <section id="skills" className="min-h-screen pt-40 scroll-mt-24">
        <h2 className="text-6xl font-bold">Skills</h2>
      </section>

      <section id="projects" className="min-h-screen pt-40 scroll-mt-24">
        <h2 className="text-6xl font-bold">Projects</h2>
      </section>
    </main>
  );
}

export default HomePage;
