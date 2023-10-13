import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section className="z-10" ref={heroRef}>
      <motion.div
        style={{ scale }}
        className="container min-h-[88vh] flex items-center justify-center w-full mx-auto"
      >
        <div className="h-full text-center pt-5 flex justify-center items-center flex-col">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-md md:text-lg lg:text-xl font-bold mx-auto text-center"
            >
              Introduction
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
              className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl -indent-1 px-2"
            >
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500">
                Arsenio Kimani,
              </span>
            </motion.h1>
          </div>
          <div className="mx-auto mt-10 px-3 sm:px-10">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
              className="text-md md:text-lg lg:text-xl mx-auto w-full md:w-3/4 py-5 md:py-10 text-white/80 leading-loose font-medium"
            >
              I love data analysis, frontend development and UI/UX design.
              Looking for a job to fully utilize my skills. Attention to detail
              and passion for creating user-friendly designs. I produce visually
              stunning and easy-to-use interfaces for clients and users. I'm
              self-motivated and committed. I'd be an asset to any team that
              values innovation and creativity.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
            className="flex items-center justify-center flex-col lg:flex-row  gap-10 mt-10 px-4 w-full"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-full lg:w-1/6 text-center hover:bg-sky-400 rounded-full font-bold border border-gray-500/80 px-10 py-6 uppercase text-sm md:text-[13px]"
            >
              Contact
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="group w-full lg:w-1/6 flex flex-row items-center justify-center rounded-full font-bold bg-white text-black px-10 py-6 uppercase text-sm md:text-[13px]"
            >
              Read more{" "}
              <ArrowDownRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-2 duration-300" />
            </motion.button>
          </motion.div>
          <div className="relative hidden sm:flex flex-row divide-x divide-gray-700/40 mt-10 border-2 border-gray-700/60 rounded-full bg-[#211F1F]/40">
            <div className="my-2 px-4 sm:px-6 md:px-8 lg:px-10">
              <CountUp
                start={0}
                end={2}
                duration={5}
                suffix="+"
                className="text-md md:text-lg lg:text-xl font-bold"
              />
              <p>Years of experience</p>
            </div>
            <div className="my-2 px-4 sm:px-6 md:px-8 lg:px-10">
              <CountUp
                start={0}
                end={10}
                duration={5}
                suffix="+"
                className="text-md md:text-lg lg:text-xl font-bold"
              />
              <p>Projects</p>
            </div>
            <div className="my-2 px-4 sm:px-6 md:px-8 lg:px-10">
              <CountUp
                start={50}
                end={100}
                duration={5}
                suffix="%"
                className="text-md md:text-lg lg:text-xl font-bold"
              />
              <p>Committement</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Home;
