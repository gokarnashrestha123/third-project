import React from "react";

const SectionContainer = ({ children, className = "" }) => {
  return (
    <section
      className={`max-w-[1920px] w-full mx-auto px-10 tablet:px-15 laptop:px-24 py-10 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
