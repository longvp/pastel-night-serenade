import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Tạo audio element với nhạc nền nhẹ nhàng
    audioRef.current = new Audio("/Chuc-Be-Ngu-Ngon-Luu-Ha-An.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:scale-110 transition-all duration-300 pulse-glow"
      aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-primary" />
      ) : (
        <VolumeX className="w-6 h-6 text-muted-foreground" />
      )}
    </button>
  );
};

export default MusicControl;
