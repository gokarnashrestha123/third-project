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
      <div className="w-full relative">
        <Navbar />

        {/* TEXT */}
        <div
          className="
            mx-auto flex flex-col items-center text-center
            px-4 tablet:px-6 laptop:px-12 desktop:px-20
            py-10 tablet:py-14 laptop:py-24
            w-full tablet:w-[85%] laptop:w-[70%] desktop:w-[60%]
          "
        >
          <h1
            className="
              font-light leading-tight 
              text-3xl
              tablet:text-4xl
              laptop:text-5xl
              desktop:text-8xl
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
               and doers were ch
            <span className="bg-pink-200 pr-4 rounded-full inline-block">
              anging
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
            className="avatar-responsive absolute left-6 -top-2 laptop:left-9"
            alt=""
          />

          <img
            src={image2}
            className="avatar-responsive absolute left-20 -top-6 laptop:left-35"
            alt=""
          />

          <img
            src={image3}
            className="avatar-responsive absolute left-36 -top-10 laptop:left-90"
            alt=""
          />

          {/* hide extra avatars on small screens */}
          <img
            src={image4}
            className="avatar-responsive hidden laptop:block absolute laptop:left-110 desltop:left-140"
            alt=""
          />

          <img
            src={image5}
            className="avatar-responsive hidden laptop:block absolute left-190 -top-14"
            alt=""
          />

          <img
            src={image2}
            className="avatar-responsive hidden laptop:block absolute right-40 -top-16"
            alt=""
          />

          <img
            src={image3}
            className="avatar-responsive hidden laptop:block absolute right-0"
            alt=""
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
