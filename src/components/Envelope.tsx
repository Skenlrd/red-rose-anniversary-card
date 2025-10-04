import { motion } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-kawaii-pink via-kawaii-blue-light to-kawaii-pink p-4 overflow-hidden">
      <div className="text-center relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-kawaii text-5xl md:text-7xl text-kawaii-pink-dark mb-4">
            For You
          </h1>
          <p className="font-hand text-xl md:text-2xl text-foreground/80">
            A special surprise awaits...
          </p>
        </motion.div>

        <motion.div
          className="relative cursor-pointer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: isOpening ? 0.8 : 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onClick={handleClick}
        >
          {/* Envelope body */}
          <div className="relative w-80 h-52 md:w-96 md:h-60 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-kawaii-pink rounded-2xl shadow-2xl border-4 border-kawaii-pink-medium/30">
              {/* Decorative lines on envelope */}
              <div className="absolute top-4 left-6 right-6 space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-px bg-kawaii-pink-medium/20" />
                ))}
              </div>
            </div>

            {/* Envelope flap */}
            <motion.div
              className="absolute -top-1 left-0 right-0 h-32 origin-top z-10"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              }}
              animate={
                isOpening
                  ? { rotateX: -120, opacity: 0 }
                  : { rotateX: 0, opacity: 1 }
              }
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="w-full h-full bg-gradient-to-b from-kawaii-pink to-white border-4 border-kawaii-pink-medium/30" />
            </motion.div>

            {/* String decoration */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              animate={
                isOpening
                  ? { scale: 0, rotate: 180, opacity: 0 }
                  : { scale: 1, rotate: 0, opacity: 1 }
              }
              transition={{ duration: 0.5 }}
            >
              {/* String lines */}
              <svg width="200" height="100" className="absolute -top-8 -left-24">
                <line
                  x1="100"
                  y1="50"
                  x2="20"
                  y2="20"
                  stroke="hsl(var(--kawaii-coral))"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="50"
                  x2="180"
                  y2="20"
                  stroke="hsl(var(--kawaii-coral))"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="50"
                  x2="100"
                  y2="0"
                  stroke="hsl(var(--kawaii-coral))"
                  strokeWidth="2"
                />
              </svg>

              {/* Button seal */}
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-kawaii-coral to-kawaii-pink-medium shadow-lg flex items-center justify-center border-4 border-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-white"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Click instruction */}
          {!isOpening && (
            <motion.p
              className="mt-8 font-cute text-lg md:text-xl text-kawaii-pink-dark"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click the button to open! ✨
            </motion.p>
          )}
        </motion.div>

        {/* Floating hearts decoration */}
        {!isOpening &&
          [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              }}
              animate={{
                y: -100,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear",
              }}
            >
              {i % 2 === 0 ? "💖" : "✨"}
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Envelope;
