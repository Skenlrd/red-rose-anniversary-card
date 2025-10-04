import { motion } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1500); // Delay to allow animation to complete
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-kawaii-pink via-kawaii-blue-light to-kawaii-pink p-4 overflow-hidden">
      <motion.div
        className="relative w-[500px] h-[350px] md:w-[600px] md:h-[420px] cursor-pointer"
        onClick={handleClick}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-2xl"></div>

        {/* Inner Card (initially hidden) */}
        <motion.div
          className="absolute inset-x-2 top-2 h-1/2 bg-kawaii-pink rounded-t-md"
          initial={{ y: "0%" }}
          animate={isOpening ? { y: "-110%" } : { y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Envelope Front */}
        <div
          className="absolute inset-0 bg-white"
          style={{
            clipPath:
              "polygon(0% 100%, 0% 45%, 50% 65%, 100% 45%, 100% 100%)",
          }}
        ></div>

        {/* Top Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 origin-top"
          style={{
            transformStyle: "preserve-3d",
            clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
          }}
          initial={{ rotateX: 0 }}
          animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-kawaii-pink-medium to-kawaii-pink z-10"></div>
        </motion.div>

        {/* String and Seal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] flex flex-col items-center">
          {/* Pull String */}
          <motion.div
            className="w-0.5 h-12 bg-kawaii-coral"
            initial={{ height: "3rem" }}
            animate={isOpening ? { height: "10rem", y: -60, opacity: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeIn" }}
          ></motion.div>
          
          {/* Button Seal */}
          <motion.div
            className="w-12 h-12 rounded-full bg-kawaii-pink-medium shadow-lg flex items-center justify-center border-2 border-white relative -mt-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="grid grid-cols-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-kawaii-pink-dark/50"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Click instruction */}
        {!isOpening && (
          <motion.p
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-cute text-lg text-kawaii-pink-dark whitespace-nowrap"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Click to open
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Envelope;