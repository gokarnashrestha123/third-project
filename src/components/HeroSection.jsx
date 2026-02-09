import React from "react";
import SectionContainer from "./SectionContainer";

import image1 from "../assets/image/member/member1.png";
import image2 from "../assets/image/member/member2.png";
import image3 from "../assets/image/member/member3.png";
import image4 from "../assets/image/member/member4.png";
import image5 from "../assets/image/member/member5.png";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <SectionContainer>
      <div className="w-full pb-10 md:pb-0 laptop:h-screen">
        <Navbar />

        {/* TEXT */}
        <div
          className="
            mx-auto flex flex-col items-center text-center
            px-4 tablet:px-6 laptop:px-12 desktop:px-20
            py-10 tablet:py-15 max-w-280
             
          "
        >
          <h1
            className="
              font-light leading-tight 
              text-3xl
              tablet:text-5xl
              laptop:text-6xl
              desktop:text-7xl
            "
          >
            The{" "}
            <span className="responsive-z-line">
              thinkers
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
              <div className="line line4"></div>
            </span>
            {/* <div className="absolute h-1 z-[-1] w-65 left-135 top-38 bg-amber-300"></div>
              <div className="absolute h-1 z-[-1] w-65 left-135 top-38 rotate-[-3deg] origin-right bg-amber-300"></div>
              <div className="absolute h-1 z-[-1] w-65 left-135 top-42 rotate-[1deg] origin-left bg-amber-300"></div>
              <div className="absolute h-1 z-[-1] w-30 left-170 top-43 rotate-[-3deg] origin-right bg-amber-300"></div> */}
            and doers were 
            <span className="bg-pink-200 px-4 rounded-full inline-block">
              changing
            </span>{" "}
            the
            <span className="bg-green-200 px-4 rounded-full inline-block ml-2">
              status
            </span>
            Quo with
          </h1>

          <h4
            className="
              mt-5
              text-sm
              tablet:text-lg
              laptop:text-xl
              desktop:text-3xl
            "
          >
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </h4>
        </div>

        {/* AVATARS */}
        <div className="relative flex justify-center mt-8 laptop:mt-0">
          {/* mobile + tablet only */}
          <img
            src={image1}
            className="avatar-responsive absolute"
            style={{ left: "3%", top: "2%" }}
            alt=""
          />

          <img
            src={image2}
            className="avatar-responsive absolute"
            style={{ left: "13%", top: "4%" }}
            alt=""
          />

          <img
            src={image3}
            className="avatar-responsive absolute"
            style={{ left: "30%", top: "6%" }}
            alt=""
          />

          {/* hide extra avatars on small screens */}
          <img
            src={image4}
            className="avatar-responsive hidden md:block absolute"
            style={{ left: "40%", top: "10%" }}
            alt=""
          />

          <img
            src={image5}
            className="avatar-responsive hidden md:block absolute"
            style={{ left: "60%", top: "10%" }}
            alt=""
          />

          <img
            src={image2}
            className="avatar-responsive hidden md:block absolute"
            style={{ right: "10%", top: "12%" }}
            alt=""
          />

          <img
            src={image3}
            className="avatar-responsive hidden md:block absolute"
            style={{ right: "0%", top: "14%" }}
            alt=""
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
