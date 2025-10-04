import { motion } from "framer-motion";
import pinkFlower from "@/assets/pink-flower.png";

const PhotoPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-kawaii-pink p-4 overflow-hidden relative">
      {/* Flower pattern background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 5) * 20 + 10}%`,
              top: `${Math.floor(i / 5) * 25 + 10}%`,
            }}
          >
            <img src={pinkFlower} alt="" className="w-8 h-8" />
          </div>
        ))}
      </div>

      {/* Main content card */}
      <motion.div
        className="max-w-2xl w-full relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-t from-kawaii-blue to-white rounded-3xl p-8 md:p-12 shadow-2xl border-8 border-kawaii-pink-medium/30 relative">
          {/* Title */}
          <motion.h2
            className="font-hand text-2xl md:text-3xl text-center text-foreground mb-8 tracking-wider"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            FOREVER TOGETHER
          </motion.h2>

          {/* Photo frame */}
          <motion.div
            className="relative mx-auto w-64 h-64 md:w-80 md:h-80"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Circular photo frame */}
            <div className="w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-kawaii-blue-light to-white flex items-center justify-center">
              <p className="font-cute text-kawaii-pink-dark text-center px-8">
                Your beautiful photo here 💕
              </p>
            </div>

            {/* Confetti and streamers */}
            {[...Array(15)].map((_, i) => {
              const angle = (i * 360) / 15;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                >
                  {i % 3 === 0 ? (
                    <span className="text-2xl">🎊</span>
                  ) : i % 3 === 1 ? (
                    <span className="text-2xl">✨</span>
                  ) : (
                    <span className="text-2xl">💝</span>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Pinned note at bottom */}
          <motion.div
            className="mt-8 relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="absolute -top-2 left-8 w-4 h-4 rounded-full bg-kawaii-coral border-2 border-white shadow-lg z-10" />
            <div className="bg-kawaii-beige rounded-2xl p-6 shadow-lg transform rotate-1 border-4 border-kawaii-pink-medium/20">
              <p className="font-script text-lg md:text-xl text-foreground/80 text-center">
                I am so grateful to be able to call you mine. You must be the luckiest man alive 🐻
              </p>
              <div className="flex justify-end mt-2">
                <img src={pinkFlower} alt="" className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          <motion.img
            src={pinkFlower}
            alt=""
            className="absolute top-4 left-4 w-10 h-10"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.img
            src={pinkFlower}
            alt=""
            className="absolute top-4 right-4 w-10 h-10"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PhotoPage;
