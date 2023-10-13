import { motion } from "framer-motion";
import tailwind from "../assets/tailwindcss.svg";
import material from "../assets/tableau.svg";
import python from "../assets/python.svg";
import rlogo from "../assets/react.svg";
import excel from "../assets/excel.svg";
import figma from "../assets/figma.svg";
import java from "../assets/javascript.svg";
import html from "../assets/html-5.svg";

const logos = [
  {
    id: 1,
    logo: tailwind,
  },
  {
    id: 2,
    logo: material,
  },
  {
    id: 3,
    logo: python,
  },
  {
    id: 4,
    logo: rlogo,
  },
  {
    id: 5,
    logo: excel,
  },
  {
    id: 6,
    logo: figma,
  },
  {
    id: 7,
    logo: java,
  },
  {
    id: 8,
    logo: html,
  },
];

const Technologies = () => {
  return (
    <section id="technology" className="z-0">
      <div className="container h-auto w-full mx-auto py-10 md:py-32 ">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-400 text-md md:text-lg lg:text-xl font-bold mx-auto w-3/4 text-center"
          >
            Various tools at my disposal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-1/2 md:w-1/5 mx-auto text-3xl md:text-4xl lg:text-5xl text-center border-b-2"
          >
            Technologies:
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 place-content-center place-items-center gap-4 lg:px-52"
        >
          {logos.map((items) => (
            <div key={items.id}>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: items.id * 0.2 }}
                viewport={{ once: true }}
                src={items.logo}
                loading="lazy"
                alt="logo"
                className="object-cover h-[100px] w-[150px] saturate-0 hover:saturate-100 text-center px-2"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
