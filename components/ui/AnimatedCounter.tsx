"use client";

import CountUp from "react-countup";

type Props = {
  end: number;
  suffix?: string;
};

export default function AnimatedCounter({
  end,
  suffix = "+",
}: Props) {
  return (
    <CountUp
      end={end}
      duration={2}
      suffix={suffix}
    />
  );
}