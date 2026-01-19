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
  const [isDeleting, setIsDeleting] = useState(false); // Condicional, para saber cuando esta escribiendo o no
  const [index, setIndex] = useState(0); // Posicion actual dentro del texto i

  useEffect(() => {
    let timeout: NodeJS.Timeout; // para limpiar

    if (!isDeleting && index < text.length) { // si no estamos borrando y tampoco no llegamos al final del texto : escribimos
      // TYPING
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
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
      // PAUSE BEFORE RESTART (🔥 FIX)
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseBeforeRestart);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <main className="relative text-white px-75">
      <div className="inline-block">
        <h1 className="font-bold text-7xl mt-40 mb-5">My Portfolio!.</h1>
        <p className="text-2xl">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </main>
  );
}

export default HomePage;
