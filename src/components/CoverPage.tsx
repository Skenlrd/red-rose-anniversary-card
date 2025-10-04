import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import kawaiBears from "@/assets/kawaii-bears.png";
import pinkFlower from "@/assets/pink-flower.png";

const CoverPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-kawaii-pink p-4 overflow-hidden relative">
      {/* Flower pattern background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 5) * 20 + 10}%`,
              top: `${Math.floor(i / 5) * 25 + 10}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: i * 0.05, duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img src={pinkFlower} alt="" className="w-8 h-8" />
          </motion.div>
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
          {/* Heart borders on sides */}
          <div className="absolute left-2 top-1/4 bottom-1/4 flex flex-col justify-around">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`left-${i}`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-kawaii-pink-medium fill-kawaii-pink-medium" />
              </motion.div>
            ))}
          </div>
          <div className="absolute right-2 top-1/4 bottom-1/4 flex flex-col justify-around">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`right-${i}`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-kawaii-pink-medium fill-kawaii-pink-medium" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Title bubble */}
            <motion.div
              className="bg-kawaii-beige rounded-full px-8 py-6 inline-block shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="font-kawaii text-3xl md:text-5xl text-foreground">
                Happy 5th Anniversary!
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="font-script text-3xl md:text-4xl text-kawaii-pink-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              My Love
            </motion.p>

            {/* Sparkles */}
            <div className="flex justify-center gap-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: [0, 180, 360], scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-kawaii-yellow fill-kawaii-yellow" />
                </motion.div>
              ))}
            </div>

            {/* Bears illustration */}
            <motion.div
              className="flex justify-start items-end gap-4 px-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <img
                src={kawaiBears}
                alt="Two cute bears hugging"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
              
              {/* Floating hearts */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${30 + i * 15}%`,
                    top: `${50 + (i % 2) * 10}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                >
                  <Heart className="w-4 h-4 text-kawaii-pink-medium fill-kawaii-pink-medium" />
                </motion.div>
              ))}
            </motion.div>

            {/* Flowers at bottom */}
            <motion.div
              className="flex justify-center gap-6 pt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.img
                  key={i}
                  src={pinkFlower}
                  alt="Pink flower"
                  className="w-8 h-8"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverPage;
