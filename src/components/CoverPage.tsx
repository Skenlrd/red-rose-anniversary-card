import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import kawaiBears from "@/assets/kawaii-bears.png";

interface CoverPageProps {
  onButtonClick?: () => void;
}

const CoverPage = ({ onButtonClick }: CoverPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-kawaii-pink p-4 overflow-hidden">
      {/* Main content card */}
      <motion.div
        className="w-full max-w-2xl aspect-[4/3] relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-8 border-white/50 h-full flex flex-col items-center relative overflow-hidden">
          {/* Pink striped background pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-kawaii-pink-light opacity-50"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'10\' viewBox=\'0 0 10 10\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M5 0 L10 5 L5 10 L0 5 Z\' fill=\'%23FFD1DC\' opacity=\'0.3\'/%3E%3C/svg%3E")',
              backgroundSize: '20px 20px',
              opacity: 0.6,
            }}></div>
             <div className="absolute inset-x-0 top-0 h-1/2" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'2\' fill=\'%23FFB6C1\'/%3E%3C/svg%3E")',
              backgroundSize: '40px 40px',
              opacity: 0.4,
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}></div>
          </div>


          {/* Floating Hearts */}
          {[
            { top: '15%', left: '85%', size: 6 },
            { top: '25%', left: '15%', size: 5 },
            { top: '40%', left: '90%', size: 5 },
            { top: '55%', left: '10%', size: 6 },
            { top: '60%', left: '60%', size: 4 },
            { top: '75%', left: '20%', size: 5 },
            { top: '80%', left: '80%', size: 6 },
            { top: '50%', left: '45%', size: 4 },
          ].map((heart, i) => (
            <motion.div
              key={i}
              className="absolute z-10"
              style={{ top: heart.top, left: heart.left }}
              animate={{ y: [-4, 4, -4], scale: [1, 1.1, 1] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className={`w-${heart.size} h-${heart.size} text-kawaii-pink-medium/70 fill-kawaii-pink-medium/70`} />
            </motion.div>
          ))}
          {/* Top-right floating hearts */}
          <motion.div
            className="absolute top-8 right-8 flex gap-2 z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Heart className="w-6 h-6 text-kawaii-pink-dark fill-kawaii-pink-dark" />
            <Heart className="w-5 h-5 text-kawaii-pink-medium fill-kawaii-pink-medium" />
          </motion.div>

          {/* Content */}
          <div className="text-center space-y-4 pt-4 z-10">
            {/* Main Title Bubble - Split into two lines */}
            <motion.div
              className="bg-kawaii-beige rounded-full px-8 py-4 inline-block shadow-lg border-2 border-kawaii-coral"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <h1 className="font-kawaii text-3xl md:text-5xl text-kawaii-coral">
                Happy 5th
                <br />
                Anniversary!
              </h1>
            </motion.div>

            {/* My Love Subtitle */}
            <motion.p
              className="font-script text-2xl md:text-3xl text-kawaii-coral"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              My Love
            </motion.p>

            {/* Image Section */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-kawaii-pink-light/30 flex items-center justify-center">
                <p className="font-cute text-kawaii-pink-dark text-sm text-center px-4">
                  Your photo here 💕
                </p>
              </div>
            </motion.div>

            {/* Left Sparkle */}
            <motion.div
              className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Star className="w-10 h-10 text-kawaii-blue fill-kawaii-blue-light" />
            </motion.div>
          </div>
          
          {/* Bottom Left Bear Image with improved styling */}
          <motion.div
            className="absolute bottom-8 left-8 md:left-16 z-10"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
          >
            <div className="relative p-2 bg-white rounded-2xl shadow-md border border-gray-200">
              <img
                src={kawaiBears}
                alt="Two cute bears"
                className="w-28 h-28 md:w-36 md:h-36 object-contain"
              />
              {/* This div could act as a placeholder for the pink border or a transparent overlay if you update the image */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Bottom Right Click Button - Functional */}
          <motion.button
            onClick={onButtonClick}
            className="absolute bottom-12 right-12 md:right-16 z-10"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative bg-kawaii-coral rounded-full px-6 py-2 flex items-center justify-center space-x-2 shadow-lg cursor-pointer transition-transform">
              <span className="font-cute text-white text-lg">Click</span>
              <span role="img" aria-label="cat" className="text-xl">🐱</span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverPage;