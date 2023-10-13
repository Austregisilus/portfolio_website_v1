import footerLogo from "../assets/footerLogo.svg";
import { BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiCopyright } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="bg-[#211F1F] border-double border-t-4 border-gray-500/50 h-auto mt-5 -z-10">
      <div className="container h-auto w-full mx-auto py-5 md:py-30">
        <img
          src={footerLogo}
          alt="the logo"
          loading="lazy"
          className="h-20 w-20"
        />
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-end p-5">
            Contact Information
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-4 gap-5">
          <div className="flex flex-row justify-between items-center bg-[#2C2C2C] py-4 border-b-2 border-b-emerald-400 px-6 hover:px-4 duration-300">
            <BsLinkedin className="h-10 w-10" />
            <h6 className="text-lg md:text-xl">Arsenio Kimani</h6>
          </div>
          <div className="flex flex-row justify-between items-center bg-[#2C2C2C] py-4 border-b-2 border-b-emerald-400 px-6 hover:px-4 duration-300">
            <BsFillTelephoneFill className="h-10 w-10" />
            <h6 className="text-lg md:text-xl">0727 077525</h6>
          </div>
          <div className="flex flex-row justify-between items-center bg-[#2C2C2C] py-4 border-b-2 border-b-emerald-400 px-6 hover:px-4 duration-300">
            <MdEmail className="h-10 w-10" />
            <h6 className="text-lg md:text-xl">enquirearsenio@gmail.com</h6>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-4 my-4 border-t-2 border-t-gray-400/50">
          <BiCopyright className="h-10 w-10" />
          <h6 className="pl-4 text-lg md:text-xl">Copyright 2023</h6>
        </div>
      </div>
    </footer>
  );
};
