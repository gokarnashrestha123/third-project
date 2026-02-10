import React from "react";
import SectionContainer from "./SectionContainer";

import image1 from "../assets/image/member/member1.png";
import image2 from "../assets/image/member/member2.png";
import image3 from "../assets/image/member/member3.png";
import image4 from "../assets/image/member/member9.png";
import image5 from "../assets/image/member/member10.png";
import image6 from "../assets/image/member/member4.png";
import image7 from "../assets/image/member/member6.png";
import image8 from "../assets/image/member/member5.png";

const HeroSection = () => {
  return (
    <>
      <SectionContainer className="max-w-7xl laptop:h-screen">
        <div>
          <SectionContainer className="max-w-6xl">
            {/* TEXT */}
            <div
              className="
            mx-auto flex flex-col items-center text-center
            px-4 tablet:px-12 laptop:px-12 desktop:px-20
            pt-15  tablet:py-15
             
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
              mt-5 font-[satoshi]
              text-sm
              tablet:text-xl
              laptop:text-2xl
              desktop:text-3xl
            "
              >
                We are a team of strategists, designers, communicators,
                researchers. Together, we believe that progress only happens
                when you refuse to play things safe.
              </h4>
            </div>
          </SectionContainer>

          {/* AVATARS */}
          <div className=" relative w-full min-h-25 tablet:min-h-50 laptop:max-h-80 desktop:min-h-95 mt-8">
            <img
              src={image1}
              className="avatar-responsive absolute
              tablet:left-[0%]  left-[5%] top-[0%] tablet:top-[15%] "
              alt=""
            />

            <img
              src={image2}
              className="avatar-responsive absolute  left-[17%]  tablet:left-[10%] desktop:left-[8%] top-[0%] tablet:top-[4%]"
              alt=""
            />

            <img
              src={image3}
              className="avatar-responsive absolute left-[31%] tablet:left-[26%] top-[0%]  tablet:top-[-40%]"
              alt=""
            />

            <img
              src={image4}
              className="avatar-responsive absolute left-[45%] top-[0%] tablet:left-[38%]  tablet:top-[20%]"
              alt=""
            />

            <img
              src={image5}
              className="avatar-responsive  absolute left-[57%] top-[0%]  tablet:top-[-20%] tablet:left-[55%]"
              alt=""
            />
            <img
              src={image6}
              className="avatar-responsive  absolute left-[70%] tablet:left-[63%] top-[0%]  tablet:top-[15%]"
              alt=""
            />

            <img
              src={image7}
              className="avatar-responsive hidden tablet:block absolute  tablet:right-[5%] top-[0%]  
              tablet:top-[25%]"
              alt=""
            />

            <img
              src={image8}
              className="avatar-responsive hidden tablet:block absolute tablet:right-[0%] top-[15%]  
              tablet:top-[-20%]"
             
              alt=""
            />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default HeroSection;
