import ClipLoader from "react-spinners/ClipLoader";
import { AnimatePresence, motion } from "framer-motion";

const Preloader = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -500 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="loader-container flex flex-col items-center justify-center w-full h-screen"
      >
        <ClipLoader color={"#fff"} size={120} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
