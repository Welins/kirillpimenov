"use client";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { FaQuoteRight } from "react-icons/fa";

export default function TextOpacityAnimation({ text }: { text: string }) {
  let refs = useRef<HTMLSpanElement[]>([]);
  let phrase = text;

  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    const containerHeight = container.current?.offsetHeight || 0; // Get the container height
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `bottom bottom`, // Start the animation when the top of the container reaches the center of the viewport
        end: `+=${containerHeight}`, // End when the container height scrolls past
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string): JSX.Element[] => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="inline-block mr-[1vw]">
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word: string): JSX.Element[] => {
    let letters: JSX.Element[] = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-20"
          key={letter + "_" + i}
          ref={(el) => {
            if (el) {
              refs.current.push(el);
            }
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div
      ref={container}
      className="my-5 sm:my-10 py-5 sm:py-10 md:py-16 w-full flex items-end justify-center font-bold text-left text-xl sm:text-3xl uppercase pl-[5.5vw]"
    >
      <FaQuoteRight className="self-start mr-4 w-12 h-12 fill-purple-400" />
      <div>{splitWords(phrase)}</div>
    </div>
  );
}
