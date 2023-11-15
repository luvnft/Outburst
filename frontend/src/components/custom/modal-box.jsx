import { Card } from "../ui/card";
import { motion } from "framer-motion";

export const ModalBox = ({ isVisible, onExit, children }) => {
  const handleSectionClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isVisible ? (
        <section
          className="fixed top-0 left-0 z-20 bg-[#00000060] w-screen h-screen flex items-center justify-center backdrop-blur-sm"
          onClick={onExit}
        >
          <motion.div 
            initial={{y: -10}}
            animate={{y:0}}
            className="absolute top-32 p-4 sm:p-0 h-full w-full max-w-[28rem]">
            <Card onClick={handleSectionClick}>{children}</Card>
          </motion.div>
        </section>
      ) : null}
    </>
  );
};
