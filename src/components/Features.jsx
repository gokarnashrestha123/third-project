import React from "react";
import services1 from "../assets/image/services/services1.png";
import SectionContainer from "./SectionContainer";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Features = () => {
  return (
    <SectionContainer>
      <div
        className="
          relative
          mx-auto 
          top-30
          tablet:top-48
          laptop:top-56
          px-4

          max-w-150
          tablet:max-w-200
          laptop:max-w-260
          desktop:max-w-400

          flex flex-col
          gap-16
          laptop:gap-20
          desktop:gap-43
        "
      >
        {/* Feature 1 */}
        <div
          className="
            flex flex-col-reverse
            tablet:flex-row
            items-center
            gap-8
            tablet:gap-16
             laptop:gap-35
            dektop:gap-45
          "
        >
          <div className="text-center tablet:text-left flex flex-col gap-3">
            <h1
              className="
                font-normal
                leading-15
                text-2xl
                tablet:text-4xl
                desktop:text-6xl
              "
            >
              <span className="responsive-z-line">
                Tomorrow
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
                <div className="line line4"></div>
              </span>
              should be better than{" "}
              <span className="bg-[#d0dad4] rounded-full px-2">today</span>
            </h1>

            <p className=" font-[satoshi] text-sm tablet:text-base laptop:text-2xl">
              We are a team of strategists, designers, communicators,
              researchers. Together, we believe that progress only happens when
              you refuse to play things safe.
            </p>
            <Link className="text-[satoshi] flex gap-2">
              {" "}
              read more <IoIosArrowRoundForward size={25} />
            </Link>
          </div>

          <img
            src={services1}
            alt="member"
            className="
              w-40 h-40
              tablet:w-60 tablet:h-60
              laptop:w-100 laptop:h-100
              desktop:w-150 desktop:h-150
              rounded-full
              object-cover
            "
          />
        </div>

        {/* Feature 2 */}
        <div
          className="
            flex flex-col
            tablet:flex-row
            items-center
            gap-8
            tablet:gap-16
            laptop:gap-35
            dektop:gap-45
          "
        >
          <img
            src={services1}
            alt="member"
            className="
              w-40 h-40
              tablet:w-60 tablet:h-60
              laptop:w-100 laptop:h-100
              desktop:w-150 desktop:h-150
              rounded-full
              object-cover
            "
          />

          <div className="text-center tablet:text-left flex flex-col gap-3">
            <h1
              className="
                font-normal
                  leading-15
                text-2xl
                tablet:text-4xl
                desktop:text-6xl
              "
            >
              <span className="bg-[#d0dad4] rounded-full px-2">See</span> how we
              can help you{" "}
              <span className="responsive-z-line">
                progress
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
                <div className="line line4"></div>
              </span>
            </h1>

            <p className=" font-[satoshi] text-sm tablet:text-base laptop:text-2xl">
              We are a team of strategists, designers, communicators,
              researchers. Together, we believe that progress only happens when
              you refuse to play things safe.
            </p>
            <Link className="text-[satoshi] flex gap-2">
              {" "}
              read more <IoIosArrowRoundForward size={25} />
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Features;
