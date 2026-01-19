"use client";

import { useEffect, useState } from "react";

function HomePage() {
  const text =
    "Personal portfolio to showcase my projects, skills, and experience as a developer.";
  const typingSpeed = 90;
  const deletingSpeed = 60;
  const pauseAfterTyping = 1200;
  const pauseBeforeRestart = 500;
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
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
