import React from "react";
import SectionContainer from "./SectionContainer";
import { IoIosArrowRoundForward } from "react-icons/io";
import image from "../assets/image/services/services3.png";

const Services = () => {
  const data = [
    {
      text: "Office of multiple interest content",
      title: "Collaborative & partnership",
    },
    {
      text: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
    },
    {
      text: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
    },
  ];

  return (
    <SectionContainer className="laptop:max-w-6xl max-w-3xl max-h-screen py-10">
      <div className="relative">
        {/* Heading */}
        <h1
          className="
            font-normal leading-tight
            text-3xl
            tablet:text-5xl
            laptop:text-6xl
            desktop:text-8xl
          
          "
        >
          What we <span className="bg-[#d0dad4] rounded-full px-2">can</span>
          offer you!
        </h1>

        {/* Services list */}
        <div className="mt-12 flex flex-col gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="
                flex justify-between
                border-b border-black/20
                pb-4
                group cursor-pointer
              "
            >
              <p className="text-sm tablet:text-base laptop:text-2xl font-satoshi  max-w-65">
                {item.text}
              </p>
              <h3 className="text-xl tablet:text-2xl laptop:text-4xl desktop:text-5xl  font-medium w-130 ">
                {item.title}
              </h3>

              <span
                className="
                  text-3xl
                  transform transition-all duration-300
                  group-hover:translate-x-2
                "
              >
                <IoIosArrowRoundForward />
              </span>
            </div>
          ))}
        </div>
        <img
          src={image}
          alt=""
          className="avatar-responsive absolute right-[20%] tablet:right-[25%] top-[80%] tablet:top-[75%] laptop:top-[80%] opacity-90 w-20 h-20 -z-20"
        />
      </div>
    </SectionContainer>
  );
};

export default Services;
