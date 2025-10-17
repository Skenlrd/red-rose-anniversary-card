import { motion } from "framer-motion";
import pinkFlower from "@/assets/pink-flower.png";
// This now correctly imports your babe.mp4 file
import ourVideo from "@/assets/babe.mp4"; 

const VideoPage = () => {
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
        className="max-w-3xl w-full relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-8 border-kawaii-pink-medium/30 relative">
          {/* Title */}
          <motion.h2
            className="font-kawaii text-3xl md:text-4xl text-center text-kawaii-coral mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            FOR MY LOVE 🎬
          </motion.h2>

          {/* VHS-style video container */}
          <motion.div
            className="relative mx-auto aspect-[4/3] max-w-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* VHS outer frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-lg shadow-2xl p-4">
              {/* VHS inner screen with vintage effect */}
              <div className="relative w-full h-full rounded border-4 border-gray-600 overflow-hidden bg-black">
                {/* Scanlines overlay */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.5) 2px, rgba(0, 0, 0, 0.5) 4px)',
                  }}
                />
                
                {/* Grain/noise overlay */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none opacity-10"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
                    animation: 'grain 0.5s steps(2) infinite',
                  }}
                />

                {/* This uses your babe.mp4 video */}
                <video 
                  src={ourVideo} 
                  controls 
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>

                {/* VHS timestamp overlay */}
                <div className="absolute top-2 left-2 z-20 font-mono text-red-500 text-sm bg-black/50 px-2 py-1 rounded">
                  ⏺ REC 00:00:00
                </div>

                {/* VHS tracking lines */}
                <motion.div
                  className="absolute inset-x-0 h-1 bg-white/20 z-20"
                  animate={{ 
                    y: [0, 400],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* VHS label */}
              <div className="absolute -bottom-2 right-4 bg-gray-200 px-3 py-1 rounded shadow-md">
                <p className="font-hand text-xs text-gray-800">Anniversary 2025 ♥</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative note */}
          <motion.div
            className="mt-8 relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="absolute -top-2 left-8 w-4 h-4 rounded-full bg-kawaii-coral border-2 border-white shadow-lg z-10" />
            <div className="bg-kawaii-beige rounded-2xl p-6 shadow-lg transform -rotate-1 border-4 border-kawaii-pink-medium/20">
              <p className="font-script text-lg md:text-xl text-foreground/80 text-center">
                 Memories together 🎞️✨
              </p>
              <div className="flex justify-end mt-2">
                <img src={pinkFlower} alt="" className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Corner decorations */}
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

      <style>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0) }
          10% { transform: translate(-5%, -10%) }
          20% { transform: translate(-15%, 5%) }
          30% { transform: translate(7%, -25%) }
          40% { transform: translate(-5%, 25%) }
          50% { transform: translate(-15%, 10%) }
          60% { transform: translate(15%, 0%) }
          70% { transform: translate(0%, 15%) }
          80% { transform: translate(3%, 35%) }
          90% { transform: translate(-10%, 10%) }
        }
      `}</style>
    </div>
  );
};

export default VideoPage;