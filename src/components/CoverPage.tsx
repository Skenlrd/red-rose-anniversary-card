import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import bearsHugging from "@/assets/bears-hugging.png";

const CoverPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 overflow-hidden relative">
      {/* Decorative heart border */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 10) * 10}%`,
              top: i < 10 ? "0%" : "auto",
              bottom: i >= 10 ? "0%" : "auto",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </motion.div>
        ))}
      </div>

      {/* Decorative border frame */}
      <motion.div
        className="max-w-4xl w-full relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="border-8 border-primary rounded-3xl p-8 md:p-16 bg-background shadow-2xl relative">
          {/* Corner decorations */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-12 h-12 border-4 border-gold ${
                i === 0
                  ? "top-0 left-0 border-r-0 border-b-0 rounded-tl-2xl"
                  : i === 1
                  ? "top-0 right-0 border-l-0 border-b-0 rounded-tr-2xl"
                  : i === 2
                  ? "bottom-0 left-0 border-r-0 border-t-0 rounded-bl-2xl"
                  : "bottom-0 right-0 border-l-0 border-t-0 rounded-br-2xl"
              }`}
            />
          ))}

          {/* Content */}
          <div className="text-center space-y-8">
            {/* Main heading */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4">
                Happy 5th Anniversary!
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <Heart className="w-6 h-6 text-gold fill-gold animate-heart-beat" />
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
              </div>
            </motion.div>

            {/* Bears illustration */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center py-8"
            >
              <div className="relative">
                <motion.img
                  src={bearsHugging}
                  alt="Two bears hugging"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Floating hearts around the image */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + (i % 3) * 30}%`,
                      top: `${20 + Math.floor(i / 3) * 50}%`,
                    }}
                    animate={{
                      y: [-5, -15, -5],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  >
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="font-script text-3xl md:text-4xl text-foreground/80">
                Five years of love & laughter
              </p>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex justify-center items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-gold" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-gold" />
            </motion.div>
          </div>
        </div>

        {/* Shadow decoration */}
        <div className="absolute -inset-4 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl -z-10 blur-xl" />
      </motion.div>
    </div>
  );
};

export default CoverPage;
