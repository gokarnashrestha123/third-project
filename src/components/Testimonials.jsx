import React from "react";
import SectionContainer from "./SectionContainer";
import memeber1 from "../assets/image/member/member1.png";
import memeber2 from "../assets/image/member/member2.png";
import memeber3 from "../assets/image/member/member3.png";
import memeber4 from "../assets/image/member/member4.png";
import memeber5 from "../assets/image/member/member5.png";
import memeber6 from "../assets/image/member/member6.png";
import memeber7 from "../assets/image/member/member7.png";
import memeber8 from "../assets/image/member/member8.png";

const Testimonials = () => {
  return (
    <SectionContainer className=" laptop:max-w-7xl max-w-5xl ">
      <div className=" relative max-h-screen py-8 tablet:py-15">
        {/* Text */}
        <div className="flex flex-col items-center laptop:gap-16 desktop:gap-24 gap-6 tablet:gap-10">
          <h1
            className="
              font-normal text-center
              text-xl
              tablet:text-4xl
              laptop:text-5xl
              desktop:text-6xl
                max-w-70 tablet:max-w-130 laptop:max-w-150 desktop:max-w-150
            "
          >
            <span className="bg-[#d0dad4] rounded-full px-2">What</span> our
            customer says About Us
          </h1>

          <p
            className="
              text-center font-normal font-[satoshi] bg-[#f1f6f3]
              text-base
              tablet:text-2xl
              laptop:text-inherit
              desktop:text-inherit
              p-6 tablet:p-10
              rounded-4xl
             
               tablet: max-w-100 laptop:max-w-160 desktop:max-w-220
            "
          >
            <span className=" text-xl tablet:text-2xl">"</span>
            Elementum delivered the site with inthe timeline as they requested.
            Inthe end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn`t used, which have also proved to
            be easy to use and reliable<span>"</span>
          </p>
        </div>

        {/* Floating images */}

        <img
          src={memeber1}
          className="
            hidden tablet:block
            desktop:w-30 desktop:h-30
            laptop:w-25 laptop:h-25
            tablet:w-16 tablet:h-16
            rounded-full absolute
            left-[0%]
            top-[70%]
          "
          alt=""
        />

        <img
          src={memeber2}
          className="
            hidden tablet:block
            desktop:w-50 desktop:h-50
            laptop:w-32 laptop:h-32
            tablet:w-20 tablet:h-20
            rounded-full absolute
            top-[46%] left-[5%] 
          "
          alt=""
        />

        <img
          src={memeber3}
          className="
            hidden tablet:block
            desktop:w-18 desktop:h-18
            w-15 h-15
            rounded-full absolute
            top-[35%] left-[0%]
          
          "
          alt=""
        />

        <img
          src={memeber4}
          className="
            hidden tablet:block
              desktop:w-30 desktop:h-30
            laptop:w-25 laptop:h-25
            tablet:w-16 tablet:h-16
            rounded-full absolute
            top-[20%] left-[5%]
         
          "
          alt=""
        />

        <img
          src={memeber5}
          className="
            hidden tablet:block
            w-27 h-27
            laptop:w-35 laptop:h-35
            desktop:w-54 desktop:h-54
            
            rounded-full absolute
            right-[0%] top-[70%]
            
          "
          alt=""
        />

        <img
          src={memeber6}
          className="
            hidden tablet:block
            desktop:w-24 desktop:h-24
            w-20 h-20
            rounded-full absolute
            top-[50%] right-[15%] tablet:right-[5%]
            
          "
          alt=""
        />

        <img
          src={memeber7}
          className="
            hidden tablet:block
            desktop:w-18 desktop:h-18
            w-15 h-15
            rounded-full absolute
           top-[40%] right-[12%] tablet:right-[5%]
          "
          alt=""
        />

        <img
          src={memeber8}
          className="
            hidden tablet:block
            desktop:w-18 desktop:h-18
            w-15 h-15
            rounded-full absolute
         top-[30%] right-[0%]
          "
          alt=""
        />
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
