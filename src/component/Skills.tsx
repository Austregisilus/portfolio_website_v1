import data from "../assets/data_analysis.svg";
import ui from "../assets/ui_ux.svg";
import web from "../assets/web_development.svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skill" className="z-0">
      <div className="container h-auto w-full mx-auto pb-10 md:pb-32">
        <div className="py-5 md:py-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-400 text-md md:text-lg lg:text-xl font-bold mx-auto text-center"
          >
            What is it that I do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-1/2 md:w-1/5 mx-auto text-3xl md:text-4xl lg:text-5xl text-center border-b-2"
          >
            I specialize in:
          </motion.h2>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-10 px-4 md:px-0 mx-auto place-content-center place-items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#211F1F] p-4 hover:bg-white group text-center rounded-lg border-2 border-gray-500/60 transition-all duration-300"
          >
            <img
              src={data}
              alt="data analysis"
              className="group-hover:invert h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[175px] md:w-[175px] mx-auto"
            />
            <div className="py-10">
              <h3 className="group-hover:text-black text-2xl md:text-3xl lg:text-4xl">
                Data analysis
              </h3>
              <p className="group-hover:text-black text-white/80 font-medium italic text-md md:text-lg lg:text-xl mt-4">
                Analyzes data to uncover insights and trends, providing valuable
                information for decision making and business strategies.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#211F1F] p-4 text-center hover:bg-white group rounded-lg border-2 border-gray-500/60 transition-all duration-300"
          >
            <img
              src={ui}
              alt="UI design"
              className="group-hover:invert h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[175px] md:w-[175px] mx-auto"
            />
            <div className="py-10">
              <h3 className="group-hover:text-black text-2xl md:text-3xl lg:text-4xl">
                UI/UX Design
              </h3>
              <p className="group-hover:text-black text-white/80 font-medium italic text-md md:text-lg lg:text-xl mt-4">
                Focuses on creating user-friendly interfaces and enhancing user
                experiences through research, wireframing and visual design.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#211F1F] w-full p-4 text-center hover:bg-white group rounded-lg border-2 border-gray-500/60 transition-all duration-300"
          >
            <img
              src={web}
              alt="front-end"
              className="group-hover:invert h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[175px] md:w-[175px] mx-auto"
            />
            <div className="py-10">
              <h3 className="group-hover:text-black text-2xl md:text-3xl lg:text-4xl">
                Front-end Developer
              </h3>
              <p className="group-hover:text-black/80 text-white/80 font-medium italic text-md md:text-lg lg:text-xl mt-4">
                Builds the visual and interactive elements of a website or
                application using HTML, CSS and Javascript
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
