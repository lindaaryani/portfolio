"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Information Systems Student",
        1800,
        "Cloud Computing Enthusiast",
        1800,
        "Web Developer",
        1800,
        "Cybersecurity Learner",
        1800,
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
      className="text-2xl font-bold text-blue-600 dark:text-blue-400"
    />
  );
}