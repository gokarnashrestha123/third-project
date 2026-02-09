import React from "react";
import SectionContainer from "./SectionContainer";

const Footer = () => {
  return (
    <SectionContainer
      className="bg-[#D7EEDD] "
    >
      <footer
        className="relative
          mx-auto 
          px-4 flex flex-col justify-center "
      >
        {/* Newsletter Section */}
        <div className="flex flex-col justify-center items-center">
          <div className=" py-12 px-4 flex flex-col items-center gap-4 text-center max-w-227">
            <h2
              className=" font-normal leading-tight
              text-3xl
              tablet:text-5xl
              laptop:text-6xl
              desktop:text-8xl"
            >
              Subscribe to our newsletter
            </h2>
            <p className="text-base tablet:text-xl desktop:text-2xl max-w-md font-[satoshi] font-normal">
              To make your stay special and even more memorable
            </p>
            <button className="bg-black font-[satoshi] text-white px-6 py-2 rounded-full">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="border-b mb-8 laptop:mb-15"></div>

        {/* Footer Links Section */}
        <div className="flex flex-col laptop:flex-row justify-between gap-8 py- px-4 tablet:px-12 laptop:px-24">
          {/* Column 1: Services */}
          <div className=" text-base tablet:text-xl desktop:text-2xl max-w-md font-[satoshi]">
            <h3 className="font-semibold laptop:text-3xl  mb-4">Services</h3>
            <ul className="flex flex-col gap-2 font-normal ">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Column 2: Team */}
          <div className=" text-base tablet:text-xl desktop:text-2xl max-w-md font-[satoshi]">
            <h3 className="font-semibold laptop:text-3xl  mb-4">Team</h3>
            <ul className="flex flex-col gap-2 font-normal">
              <li>About Us</li>
              <li>Our Experts</li>
              <li>Careers</li>
             
            </ul>
          </div>

          {/* Column 3: Policy */}
          <div className=" text-base tablet:text-xl desktop:text-2xl max-w-md font-[satoshi]">
            <h3 className="font-semibold laptop:text-3xl  mb-4">Policy</h3>
            <ul className="flex flex-col gap-2 font-normal">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className=" text-base tablet:text-xl desktop:text-2xl max-w-md font-[satoshi]">
            <h3 className="font-semibold laptop:text-3xl  mb-4">Follow Us</h3>
            <ul className="flex flex-col gap-2 font-normal">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className=" font-[satoshi] text-center  py-4 text-sm">
          © 2026 Your Company. All rights reserved.
        </div>
      </footer>
    </SectionContainer>
  );
};

export default Footer;
