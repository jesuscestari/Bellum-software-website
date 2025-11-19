"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollContext } from "providers/scroll/scroll-context";
import styles from "styles/modules/landing.module.css";

const Landing = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  const { scroll } = useScrollContext();

  let progress = 0;

  if (refContainer.current) {
    progress = Math.min(1, scroll / refContainer.current.clientHeight);
  }

  return (
    <div
      className={`${styles.landing__background} min-h-screen flex flex-col justify-center items-center sticky top-0 -z-10`}
      ref={refContainer}
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <div className="flex-grow-0 transition-opacity duration-1000 pt-10 opacity-100">
        <Image
          src="/logo.png"
          width={128 / 3}
          height={114 / 3}
          alt="margelo logo"
        />
      </div>
      <div className="text-white font-bold flex flex-1 flex-col justify-center items-center text-center transition-all duration-1000 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] opacity-100">
        <h1 className="text-4xl mb-6 lg:text-5xl">Bellum.</h1>
        <h2 className="text-2xl tracking-tight mb-2 lg:text-3xl">
          Desarrollo web definitivo.
        </h2>
      </div>
      <div className="flex-grow-0 transition-all duration-1000 pb-10 opacity-100 relative z-10">
        <button
          onClick={() => {
            const nextSection = document.getElementById("about-team");
            if (nextSection) {
              nextSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className="text-white hover:opacity-80 transition-opacity cursor-pointer relative z-10 pointer-events-auto"
          style={{ pointerEvents: "auto" }}
          aria-label="Scroll down"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Landing;
