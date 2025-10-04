import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const PhotoPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-background p-4">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <motion.h2
            className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Journey Together
          </motion.h2>
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <p className="font-garamond text-xl text-foreground/70">
              Five beautiful years
            </p>
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </motion.div>
        </div>

        {/* Photo frame */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* Decorative corners */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-3xl" />
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-gold rounded-tr-3xl" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-gold rounded-bl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-3xl" />

          {/* Photo placeholder with upload instruction */}
          <div className="bg-background border-8 border-primary rounded-2xl p-4 shadow-2xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-romantic-red-light to-cream rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Placeholder content - user can replace this with their photo */}
              <div className="text-center p-8">
                <Heart className="w-20 h-20 md:w-32 md:h-32 text-primary/30 fill-primary/30 mx-auto mb-4" />
                <p className="font-garamond text-lg md:text-xl text-foreground/60 italic">
                  Your beautiful photo here
                </p>
                <p className="font-garamond text-sm text-foreground/40 mt-2">
                  (Replace this placeholder with your photo)
                </p>
              </div>

              {/* Decorative floating hearts */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Heart className="w-6 h-6 text-primary/20 fill-primary/20" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Caption */}
          <motion.div
            className="mt-6 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="font-script text-2xl md:text-3xl text-primary">
              Forever & Always
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-gold" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhotoPage;
