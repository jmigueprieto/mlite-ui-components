import React from "react";

const ContactIcon = ({ width, height, className, style }) => {
  return (
    <svg
      version="1.1"
      className={className}
      width={width}
      height={height}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 16 16"
    >
      <path
        fill="#ccc"
        d="M8,10c-0.266,0-0.5-0.094-1-0.336L0,6v7c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V6L9,9.664C8.5,9.906,8.266,10,8,10z M15,2  H1C0.45,2,0,2.45,0,3v0.758l8,4.205l8-4.205V3C16,2.45,15.55,2,15,2z"
      />
    </svg>
  );
};

export default ContactIcon;
