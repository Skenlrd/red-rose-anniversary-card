import { motion } from "framer-motion";
import kawaiWhale from "@/assets/kawaii-whale.png";
import kawaiCloud from "@/assets/kawaii-cloud.png";
import pinkFlower from "@/assets/pink-flower.png";
import qrCodeImage from "@/assets/Q.png";

const ChallengePage = () => {
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
        <div className="bg-white rounded-3xl shadow-2xl border-8 border-kawaii-pink-medium/30 overflow-hidden relative">
          {/* Top white section */}
          <div className="bg-white p-8 md:p-12 relative">
            <motion.h2
              className="font-kawaii text-2xl md:text-3xl text-foreground text-center mb-6 flex items-center justify-center gap-2 flex-wrap"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span>Guess the song</span>
              <span>🎵</span>
              <span>challenge</span>
            </motion.h2>

            <motion.div
              className="relative inline-block mx-auto mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <img
                src={kawaiCloud}
                alt="Cloud"
                className="w-48 md:w-64 h-auto mx-auto"
              />
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="relative">
                <svg className="absolute -inset-4" viewBox="0 0 200 200">
                  <path
                    d="M 20 100 Q 30 80, 50 90 T 90 100 T 130 100 T 170 100"
                    stroke="hsl(var(--kawaii-pink-dark))"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M 100 20 Q 80 30, 90 50 T 100 90 T 100 130 T 100 170"
                    stroke="hsl(var(--kawaii-pink-dark))"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                </svg>

                <div className="w-48 h-48 bg-white border-4 border-kawaii-pink-medium rounded-2xl flex items-center justify-center shadow-lg p-4">
                  {/* CORRECTED QR CODE SECTION */}
                  <img
                    src={qrCodeImage}
                    alt="QR Code for song challenge"
                    className="w-full h-full rounded-lg object-contain"
                  />
                </div>
              </div>

              <motion.div
                className="relative"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg width="100" height="60" className="transform -rotate-12">
                  <path
                    d="M 10 30 Q 50 10, 90 30"
                    stroke="hsl(var(--kawaii-coral))"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="10"
                      refX="5"
                      refY="5"
                      orient="auto"
                    >
                      <polygon
                        points="0 0, 10 5, 0 10"
                        fill="hsl(var(--kawaii-coral))"
                      />
                    </marker>
                  </defs>
                </svg>
                <p className="font-hand text-lg text-kawaii-coral ml-4">
                  Scan this QR code
                </p>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-center font-script text-xl text-kawaii-pink-dark mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              "WILL YOU MARRY ME ????"
            </motion.p>
          </div>

          {/* Bottom wave section */}
          <div className="relative h-48 bg-gradient-to-b from-kawaii-blue to-kawaii-blue-light">
            <svg
              className="absolute top-0 w-full"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
            >
              <path
                d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z"
                fill="white"
              />
            </svg>

            <motion.img
              src={kawaiWhale}
              alt="Cute whale"
              className="absolute bottom-4 right-8 w-24 h-24 md:w-32 md:h-32"
              animate={{
                y: [0, -10, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

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

export default ChallengePage;