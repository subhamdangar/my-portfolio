/* ===================================================================
   TYPEWRITER COMPONENT
   =====================================================================
   PURPOSE:
   Displays a name (or any text) with a letter-by-letter typing animation.
   Used in the Hero section to animate "Subham Dangar" on page load.

   WHERE IS THIS USED?
   → components/Hero.tsx (imported and used for the name heading)

   HOW TO CHANGE THE NAME:
   → The name comes from data/personal.ts → personalInfo.name
   → This component receives it as a "text" prop — you don't edit this file.

   HOW TO CHANGE TYPING SPEED:
   → Modify the "speed" prop when used in Hero.tsx (default: 80ms per letter)
   → Modify the "startDelay" prop to delay when typing begins (default: 800ms)
   ===================================================================== */

"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  /** The full text to type out (e.g., "Subham Dangar") */
  text: string;
  /** Milliseconds between each letter (default: 80) */
  speed?: number;
  /** Milliseconds to wait before typing starts (default: 800) */
  startDelay?: number;
  /** CSS class for the text */
  className?: string;
}

export default function TypeWriter({
  text,
  speed = 80,
  startDelay = 800,
  className = "",
}: TypeWriterProps) {
  // ---- STATE ----
  // displayedCount: how many characters are currently visible
  // started: whether the typing animation has begun
  // finished: whether all characters have been typed
  const [displayedCount, setDisplayedCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  // ---- STEP 1: Wait for startDelay, then begin typing ----
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    return () => clearTimeout(delayTimer);
  }, [startDelay]);

  // ---- STEP 2: Once started, add one letter at a time ----
  useEffect(() => {
    if (!started) return;
    if (displayedCount >= text.length) {
      // All letters typed → mark as finished (cursor will fade out)
      const doneTimer = setTimeout(() => setFinished(true), 1500);
      return () => clearTimeout(doneTimer);
    }
    const timer = setTimeout(() => {
      setDisplayedCount((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayedCount, text.length, speed]);

  return (
    <span className={className}>
      {/*
        IMPORTANT — Hydration-safe approach:
        We always render the full text in the DOM (for SEO and to prevent layout shift),
        but we use CSS to hide/show characters based on the typing progress.
      */}
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            // Characters not yet "typed" are invisible but still take up space
            opacity: index < displayedCount ? 1 : 0,
            transition: "opacity 0.08s ease-in",
          }}
          // aria-hidden on invisible chars so screen readers read the full text
          aria-hidden={index >= displayedCount ? "true" : undefined}
        >
          {char}
        </span>
      ))}

      {/* ---- BLINKING CURSOR ---- */}
      {/* Shows while typing, then fades out after completion */}
      <span
        className={`typing-cursor ${finished ? "typing-cursor-done" : ""}`}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
