import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Envelope from "@/components/Envelope";
import CoverPage from "@/components/CoverPage";
import PhotoPage from "@/components/PhotoPage";
import LetterPage from "@/components/LetterPage";
import VideoPage from "@/components/VideoPage";
import ChallengePage from "@/components/ChallengePage";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
  };

  const pages = [
    <CoverPage key="cover" onButtonClick={nextPage} />,
    <PhotoPage key="photo" />,
    <LetterPage key="letter" />,
    <VideoPage key="video" />,
    <ChallengePage key="challenge" />,
  ];

  if (!envelopeOpened) {
    return <Envelope onOpen={handleEnvelopeOpen} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        <Button
          onClick={prevPage}
          disabled={currentPage === 0}
          variant="default"
          size="lg"
          className="bg-kawaii-pink-medium hover:bg-kawaii-pink-dark disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="flex items-center gap-2 bg-background/90 backdrop-blur px-6 py-3 rounded-full shadow-lg">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPage
                  ? "bg-kawaii-pink-medium w-8"
                  : "bg-kawaii-pink-medium/30 hover:bg-kawaii-pink-medium/50"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          variant="default"
          size="lg"
          className="bg-kawaii-pink-medium hover:bg-kawaii-pink-dark disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Page indicator text */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/90 backdrop-blur px-6 py-2 rounded-full shadow-lg">
          <p className="font-garamond text-sm text-foreground/70">
            {currentPage + 1} of {pages.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
