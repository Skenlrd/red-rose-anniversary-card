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
            My letter to you
          </motion.h2>

          {/* Letter content */}
          <motion.div
            className="space-y-6 font-cute text-base md:text-lg text-foreground/90 leading-relaxed px-4 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>
              To my little princess,
            </p>

            <p>
              You have a heart too good for this world but that's okay because I promise to forever protect your little heart. I just wish you could see how beautiful and inspiring you are to everyone who sees you! I think you are an amazing, beautiful, smart soul. As I look ahead to the future, I want to spend the rest of my life with you. We are so proud to speak up for those who are afraid to.
            </p>

            <p>
              My precious girl, watching you write has never once failed to make the same excuse you make about moving - we aren't going anywhere until my music. As a little boy I always imagined I would marry a small, delicate girl with a family with our silly day-to-day nonsense! I can't express how proud I am of you and how you have grown in everything we shared. Together though the thought of you my sweet baby. I am so proud of you and how you have done. As we continue to build our life together as we live the rest of our lives together.
            </p>

            <p className="text-right font-script text-2xl text-kawaii-pink-dark mt-8">
              I heart you Always & Forever
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LetterPage;
