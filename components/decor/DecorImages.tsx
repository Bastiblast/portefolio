"use client";

import Image from "next/image";
import React from "react";

// This component places three decorative images (reeds, firefly, lotus)
// behind the content with subtle motion using Tailwind animations.

type Variant = "left" | "center" | "right";

function classForVariant(v: Variant) {
  switch (v) {
    case "left":
      return "left-2 sm:left-6 -bottom-2 sm:-bottom-4 w-[160px] sm:w-[220px] rotate-[-2deg] animate-sway-slower";
    case "center":
      return "left-1 -translate-x-1 top-0 sm:top-16 w-[140px] sm:w-[180px] animate-bob-slow";
    case "right":
      return "right-2 sm:right-6 bottom-6 sm:bottom-12 w-[180px] sm:w-[240px] rotate-[2deg] animate-sway-slower";
  }
}

export default function DecorImages() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 select-none">
      {/* Left reeds */}
      <div className={`absolute ${classForVariant("left")}`}>
        <Image
          src="/decor/reeds.png"
          alt="Reeds"
          width={480}
          height={480}
          className="opacity-80"
          priority
        />
      </div>

      {/* Center firefly (glow + float) */}
      <div className={`absolute ${classForVariant("center")}`}>
        <Image
          src="/decor/firefly.png"
          alt="Firefly"
          width={480}
          height={480}
          className="opacity-90 animate-float-slow animate-glow"
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
