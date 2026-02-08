"use client";

import { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import "./loaderStyles.css";

const ERROR = "#d32f2f";

interface CircularProgressBarProps {
  resendOtpHandler: () => void;
  maxSeconds?: number;
}

const CircularProgressBar = ({
  resendOtpHandler,
  maxSeconds = 60,
}: CircularProgressBarProps) => {
  const [progress, setProgress] = useState(maxSeconds);
  const size = 44;
  const percent = (progress / maxSeconds) * 100;

  /* Countdown timer – decrements every second, calls handler at 0 */
  useEffect(() => {
    if (progress > 0) {
      const t = setTimeout(() => setProgress((p: number) => p - 1), 1000);
      return () => clearTimeout(t);
    }
    resendOtpHandler();
  }, [progress, maxSeconds, resendOtpHandler]);

  return (
    <div className="mkd-circular-progress">
      {/* Background track circle */}
      <span className="mkd-circular-progress-track">
        <FaRegCircle size={size} />
      </span>
      {/* Progress ring – shrinks as countdown decreases */}
      <div
        className="mkd-circular-progress-ring"
        style={{
          background: `conic-gradient(${ERROR} 0deg, ${ERROR} ${percent * 3.6}deg, transparent ${percent * 3.6}deg)`,
        }}
      />
      {/* Countdown value in center */}
      <div className="mkd-circular-progress-center">
        <span className="mkd-circular-progress-value">
          {Math.round(progress)}
        </span>
      </div>
    </div>
  );
};

export { CircularProgressBar };
