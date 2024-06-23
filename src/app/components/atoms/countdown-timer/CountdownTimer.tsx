"use client";
import React, { useEffect, useState } from "react";

type CountdownTimerProps = {
  duration: number;
  extraClassName?: string;
  trackColour?: string;
  accentColour?: string;
};

const CountdownTimer = (props: CountdownTimerProps) => {
  const {
    accentColour = "text-gray-400",
    duration,
    extraClassName,
    trackColour = "text-gray-200",
  } = props;

  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (seconds / duration) * circumference;

  return (
    <div
      className={`mx-auto flex h-full w-fit items-center justify-center ${extraClassName ? extraClassName : ""}`}
    >
      <div className="relative">
        <svg width="120" height="120" className="-rotate-90 transform">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            className={accentColour}
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`${trackColour} transition-colors duration-1000`}
          />
        </svg>
        <div
          className={`font-semibol absolute inset-0 flex items-center justify-center text-2xl ${accentColour}`}
        >
          {seconds}s
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
