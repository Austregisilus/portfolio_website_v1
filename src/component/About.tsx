import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="z-0 overflow-hidden">
      <div className="container h-auto w-full mx-auto py-10 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-md md:text-lg lg:text-xl font-bold mx-auto text-center"
        >
          A little bit
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mb-4 text-3xl md:text-4xl lg:text-5xl text-center border-b-2 w-1/2 md:w-1/5"
        >
          About me:
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-lg h-[200px] w-[200px] mx-auto my-auto"
          >
            <div className="absolute inset-0 rounded-lg h-[200px] w-[200px] rotate-6 bg-gray-500"></div>
            {/* image */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <p className="text-md md:text-lg lg:text-xl leading-relaxed px-4 md:pl-2 py-2 text-white/80 font-medium text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tincidunt nunc vel aliquam ullamcorper. Donec sed mollis risus.
              Curabitur aliquam, erat facilisis pellentesque suscipit, erat
              dolor consequat enim, in dignissim turpis tortor ac dolor. Fusce
              mattis ullamcorper ante sed ornare. Nulla interdum enim quis
              scelerisque luctus. Donec semper nibh ut vestibulum porttitor.
              Nunc nisl felis, porttitor sit amet velit id, congue imperdiet
              lectus. Sed luctus neque sed justo semper, non tristique lacus
              gravida. Etiam pretium elementum ornare. Donec id odio et dolor
              viverra posuere sed eu libero. Morbi id nunc magna. Etiam at
              blandit tellus, ac suscipit metus. Vestibulum semper vehicula
              lacinia. Ut condimentum ipsum id leo eleifend, ut auctor orci
              finibus.
            </p>
            <p className="text-md md:text-lg lg:text-xl leading-relaxed px-4 md:pl-2 py-2 text-white/80 font-medium text-justify">
              Aenean sagittis neque eget diam condimentum, eu pulvinar magna
              rhoncus. Nulla facilisi. Etiam faucibus tellus quis justo posuere,
              vitae elementum urna viverra. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Pellentesque posuere consequat
              imperdiet. Nullam fringilla auctor nunc eget elementum. Aliquam
              volutpat, ex id laoreet auctor, ipsum dui tincidunt sem, in
              maximus odio ipsum non erat. Aliquam dignissim lorem sapien, ut
              elementum sem sagittis at. Nullam venenatis consectetur felis, et
              luctus metus imperdiet eget. Nam et ex consequat, imperdiet odio
              at, cursus nisi.
            </p>
            <div className="pt-10 px-4 md:px-0">
              <motion.button
                whileTap={{ scale: 0.9 }}
                aria-hidden="true"
                className="w-full lg:w-1/3 hover:bg-sky-500 text-center rounded-full font-bold border border-gray-500/80 px-10 py-6 uppercase text-sm md:text-[13px]"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
