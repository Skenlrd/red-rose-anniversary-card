import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import roses from "@/assets/roses.png";

const LetterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 py-16">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header with roses */}
        <motion.div
          className="text-center mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={roses}
            alt="Red roses"
            className="w-48 md:w-64 h-auto mx-auto mb-4 opacity-90"
          />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary">
            My Dearest Love
          </h2>
        </motion.div>

        {/* Letter content */}
        <motion.div
          className="bg-cream border-4 border-primary rounded-2xl p-8 md:p-12 shadow-2xl relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-8 h-8">
            <Heart className="w-full h-full text-gold fill-gold opacity-30" />
          </div>
          <div className="absolute top-4 right-4 w-8 h-8">
            <Heart className="w-full h-full text-gold fill-gold opacity-30" />
          </div>
          <div className="absolute bottom-4 left-4 w-8 h-8">
            <Heart className="w-full h-full text-gold fill-gold opacity-30" />
          </div>
          <div className="absolute bottom-4 right-4 w-8 h-8">
            <Heart className="w-full h-full text-gold fill-gold opacity-30" />
          </div>

          {/* Letter text */}
          <div className="space-y-6 font-garamond text-lg md:text-xl text-foreground/90 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Five years ago, our beautiful journey began. Every moment with you has been a
              treasure, every day an adventure, and every year a blessing beyond measure.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              Through laughter and tears, sunshine and storms, you've been my constant, my rock,
              my home. Your love has made me a better person, and your smile brightens even my
              darkest days.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              Thank you for five incredible years of memories, love, and happiness. I look forward
              to countless more adventures together, building our dreams side by side.
            </motion.p>

            <motion.div
              className="text-center pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <p className="font-script text-3xl md:text-4xl text-primary mb-2">
                Forever Yours
              </p>
              <div className="flex items-center justify-center gap-3 mt-4">
                <Heart className="w-6 h-6 text-primary fill-primary animate-heart-beat" />
                <Heart className="w-8 h-8 text-primary fill-primary animate-heart-beat" style={{ animationDelay: '0.2s' }} />
                <Heart className="w-6 h-6 text-primary fill-primary animate-heart-beat" style={{ animationDelay: '0.4s' }} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-gold"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LetterPage;
