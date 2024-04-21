import React from "react";

const HighlightText1 = ({ text }) => {
  return (
    <span className="bg-gradient-to-b from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText1;
