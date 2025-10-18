"use client";

import Image from "next/image";
import React from "react";

// This component places three decorative images (reeds, firefly, lotus)
// behind the content with subtle motion using Tailwind animations.

type Variant = "left" | "center" | "right";

function classForVariant(v: Variant) {
  switch (v) {
    case "left":
      return "left-0 sm:left-0 -bottom-2 sm:-bottom-4 w-[160px] sm:w-[220px] animate-sway-slower";
    case "center":
      return "animate-bob-slow";
    case "right":
      return "right-2 sm:right-6 bottom-6 sm:bottom-12 w-[180px] sm:w-[240px] rotate-[2deg] animate-sway-slower";
  }
}

export default function DecorImages() {
  return (
    <div className="pointer-events-none relative inset-0 -z-10 select-none hidden md:block">
      {/* Left reeds */}
      <div className={`absolute top-0 bot-0`}>
        <Image
          src="/libellule vers gauche.png"
          alt="Reeds"
          width={480}
          height={480}
          className="opacity-80"
          priority
        />
      </div>


      {/* Right lotus */}
      <div className={`absolute ${classForVariant("right")}`}>
        <Image
          src="/decor/lotus.png"
          alt="Lotus"
          width={640}
          height={640}
          className="opacity-85"
          priority
        />
      </div>
    </div>
  );
}
