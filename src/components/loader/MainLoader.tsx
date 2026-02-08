"use client";

import { GradientLoader } from "./GradientLoader";
import "./loaderStyles.css";

const MainLoader = () => {
  /* Full-page overlay with centered loader */
  return (
    <div className="mkd-main-loader">
      <GradientLoader size={40} thickness={3} />
    </div>
  );
};

export { MainLoader };
