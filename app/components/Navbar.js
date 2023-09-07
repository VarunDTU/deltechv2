"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { Link as Rlink } from "react-scroll";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const navLinks = [
    {
      id: "hero",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "members",
      title: "Members",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { user, error, isLoading } = useUser();
  
  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        menuOpen ? "bg-sky-900" : "bg-transparent"
      }`}
    >
      <div
        className={`w-full text-sectionHeadText flex flex-wrap md:flex-nowrap items-center justify-around mx-auto ${
          scrolled ? "bg-sky-900" : ""
        }`}
      >
        <Rlink
          to="hero"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer whitespace-nowrap uppercase text-white"
        >
          {/* <FaTerminal className="inline-block text-white" /> */}
          <span className="inline-block font-medium font-merriweather ml-3">
            DelTech MUN
          </span>
        </Rlink>
        <div className="flex md:order-2">
          
            {!user ? (
              <Link href="/api/auth/login" className="bg-sky-700 my-2 mr-4 md:mr-0 font-merriweather hover:bg-sky-500 text-white py-3 px-6 rounded-xl">
                SignIn <FaArrowRight className="ml-1 inline" />
              </Link>
            ) : (
              <div>{user?.name}</div>
            )}
          
          <button
            className="m-2 cursor-pointer text-white active:rotate-180 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={
            "md:order-1 md:flex flex-col md:flex-row w-full md:w-fit md:m-2 justify-center items-center p-5 md:space-x-8" +
            (menuOpen ? " flex" : " hidden")
          }
        >
          {navLinks.map((nav) => (
            <div
              key={nav.id}
              className=" font-merriweather text-white p-1.5 md:p-0 hover:underline hover:text-sky-500  translate-y-1 underline-offset-4 cursor-pointer"
            >
              <Rlink
                to={nav.id}
                smooth={true}
                duration={500}
                offset={-50}
                className=" font-serif"
              >
                {nav.title}
              </Rlink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
