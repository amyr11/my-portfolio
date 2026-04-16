"use client";

import { useEffect, useState } from "react";

const WORDS = ["software developer", "music producer", "data enthusiast"];

const TYPING_SPEED = 85;
const DELETING_SPEED = 45;
const HOLD_DURATION = 1400;

export default function HeroTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    if (!isDeleting && displayedText === currentWord) {
      const timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, HOLD_DURATION);

      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % WORDS.length);
      }, DELETING_SPEED);

      return () => window.clearTimeout(timeout);
    }

    if (!currentWord) {
      return;
    }

    const nextText = isDeleting
      ? currentWord.slice(0, displayedText.length - 1)
      : currentWord.slice(0, displayedText.length + 1);

    const timeout = window.setTimeout(
      () => setDisplayedText(nextText),
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <span className="typewriter-wrap">
      <span className="sr-only">{WORDS.join(", ")}</span>
      <span aria-hidden="true" className="typewriter-text">
        {displayedText || "\u00A0"}
      </span>
      <span aria-hidden="true" className="typewriter-caret" />
    </span>
  );
}
