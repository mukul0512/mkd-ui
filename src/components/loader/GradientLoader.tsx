"use client";

import { FaSpinner } from "react-icons/fa";
import "./loaderStyles.css";

interface GradientLoaderProps {
  thickness?: number;
  size?: number;
}

const GradientLoader = ({ size = 25 }: GradientLoaderProps) => {
  /* Centered gradient spinner wrapper */
  return (
    <div className="mkd-gradient-loader-wrapper">
      <span className="mkd-gradient-loader">
        <FaSpinner size={size} aria-hidden />
      </span>
    </div>
  );
};

export { GradientLoader };
