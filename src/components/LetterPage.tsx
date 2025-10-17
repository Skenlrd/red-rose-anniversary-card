import { motion } from "framer-motion";
import pinkFlower from "@/assets/pink-flower.png";

const LetterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-kawaii-pink p-4 py-16 overflow-hidden relative">
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

      {/* Main content - letter paper */}
      <motion.div
        className="max-w-2xl w-full relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-kawaii-pink-medium/20 relative">
          {/* Decorative flowers in corners */}
          <motion.img
            src={pinkFlower}
            alt=""
            className="absolute top-4 left-4 w-12 h-12"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.img
            src={pinkFlower}
            alt=""
            className="absolute top-4 right-4 w-12 h-12"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.img
            src={pinkFlower}
            alt=""
            className="absolute bottom-4 left-4 w-12 h-12"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.img
            src={pinkFlower}
            alt=""
            className="absolute bottom-4 right-4 w-12 h-12"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />

          {/* Title */}
          <motion.h2
            className="font-hand text-3xl md:text-4xl text-center text-foreground mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Letter to my LOVE
          </motion.h2>

          {/* Letter content */}
          <motion.div
            className="space-y-6 font-cute text-base md:text-lg text-foreground/90 leading-relaxed px-4 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>
              To my future wifey,
            </p>

            <p>
              You have always been my greatest strength, my biggest support, and, of course, my biggest headache! 😂 Experiencing life and growing together is everything I could ever want. From our lockdown dates to the immense pride I felt seeing you in your doctor's coat, it has been an amazing journey.
            </p>

            <p>
              I always say my predictions come true, and I know you'll be one of the best doctors in Sikkim. My other prediction? Us getting married next year. 💍
            </p>

            <p>
              You are the most beautiful, hot, seeeeeeeexyyyyyy ❤️, and most importantly, the most caring and kind human being I have ever met.
            </p>

            <p className="text-right font-script text-2xl text-kawaii-pink-dark mt-8">
              Forever love you
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LetterPage;