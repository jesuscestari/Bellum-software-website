"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
};

const Typewriter = ({
  text,
  speed = 100,
  className = "",
  onComplete,
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, onComplete]);

  // Cursor blinking effect - hide cursor after completion
  useEffect(() => {
    if (isComplete) {
      // Hide cursor after a short delay when complete
      const hideTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 1000);
      return () => clearTimeout(hideTimeout);
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [isComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span
          className={`inline-block ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
          style={{
            textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            animation: showCursor ? "pulse 1s ease-in-out infinite" : "none",
          }}
        >
          |
        </span>
      )}
    </span>
  );
};

export default Typewriter;
