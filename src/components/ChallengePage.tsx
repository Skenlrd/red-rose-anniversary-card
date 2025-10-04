import { motion } from "framer-motion";
import { Heart, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChallengePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-red-light via-background to-cream p-4">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-gold fill-gold animate-pulse" />
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary">
              One More Surprise!
            </h2>
            <Sparkles className="w-8 h-8 text-gold fill-gold animate-pulse" />
          </div>
          <p className="font-garamond text-xl md:text-2xl text-foreground/80 italic">
            Your adventure continues...
          </p>
        </motion.div>

        {/* Challenge card */}
        <motion.div
          className="bg-background border-8 border-primary rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Heart className="w-8 h-8 text-primary/20 fill-primary/20" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Gift className="w-20 h-20 md:w-24 md:h-24 text-primary mx-auto mb-6 animate-float" />
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">
                Ready for Your Challenge?
              </h3>
              <p className="font-garamond text-lg md:text-xl text-foreground/80 max-w-xl mx-auto">
                Scan the QR code below to unlock a special surprise waiting just for you!
              </p>
            </motion.div>

            {/* QR Code placeholder */}
            <motion.div
              className="bg-background border-4 border-gold rounded-2xl p-8 max-w-md mx-auto"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            >
              <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-xl flex items-center justify-center relative">
                {/* QR Code placeholder - user can replace with actual QR */}
                <div className="text-center p-6">
                  <div className="w-48 h-48 mx-auto bg-foreground/5 rounded-lg border-4 border-dashed border-foreground/20 flex items-center justify-center mb-4">
                    <p className="font-garamond text-sm text-foreground/60">
                      QR Code Here
                    </p>
                  </div>
                  <p className="font-garamond text-sm text-foreground/60 italic">
                    Replace with your QR code
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action button */}
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-romantic-red-dark text-primary-foreground font-garamond text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Scan & Discover
              </Button>
            </motion.div>

            {/* Hint text */}
            <motion.p
              className="text-center font-script text-2xl text-primary/70 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              Your next adventure awaits...
            </motion.p>
          </div>
        </motion.div>

        {/* Decorative bottom elements */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Heart className="w-5 h-5 text-primary fill-primary opacity-60" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChallengePage;
