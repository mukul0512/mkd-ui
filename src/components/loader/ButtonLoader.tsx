"use client";

import { FaSpinner } from "react-icons/fa";
import "./loaderStyles.css";

const ButtonLoader = () => {
  /* Inline spinner for buttons */
  return (
    <span className="mkd-button-loader">
      <FaSpinner size={20} aria-hidden />
    </span>
  );
};

export { ButtonLoader };
