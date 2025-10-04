import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-red-light to-cream p-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-script text-6xl md:text-8xl text-primary mb-4">
            For You
          </h1>
          <p className="font-garamond text-xl md:text-2xl text-foreground/80">
            A special message awaits...
          </p>
        </motion.div>

        <motion.div
          className="relative cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
        >
          {/* Envelope */}
          <motion.div
            className="relative w-64 h-40 md:w-80 md:h-48 mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Envelope body */}
            <div className="absolute inset-0 bg-background border-4 border-primary rounded-lg shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary" />
            </div>

            {/* Envelope flap */}
            <motion.div
              className="absolute -top-1 left-0 right-0 h-24 md:h-28 origin-top"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              }}
              animate={{ rotateX: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full bg-primary border-4 border-primary" />
            </motion.div>

            {/* Decorative hearts */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary" />
            </motion.div>
          </motion.div>

          <motion.p
            className="mt-8 font-garamond text-lg md:text-xl text-foreground/70"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to open
          </motion.p>
        </motion.div>

        {/* Floating hearts decoration */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
            }}
            animate={{
              y: -50,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            <Heart className="w-6 h-6 text-primary/30 fill-primary/30" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Envelope;
