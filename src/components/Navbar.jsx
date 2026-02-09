import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Elementum</h1>

        {/* Desktop Links */}
        <div className="hidden laptop:flex gap-10 font-[satoshi]">
          <Link className="hover:text-amber-500" to="/">
            Home
          </Link>
          <Link className="hover:text-amber-500" to="/services">
            Services
          </Link>
          <Link className="hover:text-amber-500" to="/studio">
            Studio
          </Link>
          <Link className="hover:text-amber-500" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-amber-500" to="/faqs">
            FAQs
          </Link>
        </div>

        {/* Menu Icon (visible on ALL screens) */}
        <button onClick={() => setOpen(!open)} className="text-3xl">
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Slide-down Menu */}
      {open && (
        <div className="bg-white shadow-lg">
          <div className="flex flex-col items-center gap-6 py-8 font-[satoshi]">
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} to="/services">
              Services
            </Link>
            <Link onClick={() => setOpen(false)} to="/studio">
              Studio
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
            <Link onClick={() => setOpen(false)} to="/faqs">
              FAQs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
