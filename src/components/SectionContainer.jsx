import React from "react";

const SectionContainer = ({ children, className = "" }) => {
  return (
    <section
      className={`mx-auto px-10 tablet:px-15 laptop:px-24  ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
