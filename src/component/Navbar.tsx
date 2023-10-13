import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Skills",
    href: "#skill",
  },
  {
    id: 4,
    name: "technologies",
    href: "#technology",
  },
  {
    id: 5,
    name: "Projects",
    href: "#",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBorder = isTopOfPage ? "" : "border-b border-gray-600/60";

  return (
    <header
      className={`${navBorder} sticky bg-transparent/50 top-0 min-h-[8vh] z-50 my-4`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className="container flex flex-row justify-between items-center mx-auto px-2">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="the logo"
              loading="lazy"
              className="h-20 w-20"
            />
          </div>
          {/* Menu on large screen */}
          <nav>
            <ul className="hidden md:flex flex-row gap-10">
              <li>
                <a href="#" className="font-bold text-[12px] hover:border-b">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  className="font-bold text-[12px] hover:border-b"
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-bold text-[12px] hover:border-b"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="font-bold text-[12px] hover:border-b"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-[12px] hover:border-b">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-bold text-[12px] hover:border-b"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex md:hidden">
            <button
              type="button"
              className="rounded-full hover:bg-white hover:text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-10 w-10" />
            </button>
          </div>

          {/* Menu for small device */}
          <Dialog
            as="nav"
            className="md:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
            <Dialog.Panel className="fixed top-0 right-0 z-50 w-3/4 bg-black h-screen overflow-hidden border-[0.5px] border-gray-500/30 rounded-lg">
              <div className="flex flex-row justify-between mx-auto px-2 py-4 items-center border-b-2 w-3/4 border-white">
                <div>
                  <img src={logo} alt="company" className="h-10 w-10" />
                </div>
                <div>
                  <button
                    type="button"
                    className="rounded-full hover:bg-white hover:text-black p-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XMarkIcon className="h-10 w-10" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 w-full my-10 space-y-10">
                {navItems.map((items) => (
                  <a
                    key={items.id}
                    href={items.href}
                    className="text-white font-poppins font-bold text-md text-center uppercase border-b-[1px] border-gray-500 mx-auto w-3/4 pb-5"
                  >
                    {items.name}
                  </a>
                ))}
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
