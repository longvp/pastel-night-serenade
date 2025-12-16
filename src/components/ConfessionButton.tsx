import { useState } from "react";
import { Heart } from "lucide-react";

const ConfessionButton = () => {
  const [showConfession, setShowConfession] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    // Hiệu ứng rung
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);

    // Hiện câu tỏ tình
    setShowConfession(true);
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-12">
      {!showConfession && (
        <button
          onClick={handleClick}
          className={`
            group relative px-8 py-4 rounded-full gradient-button
            text-primary-foreground font-semibold text-lg
            shadow-lg hover:shadow-xl
            transform hover:scale-105 transition-all duration-300
            pulse-glow
            ${isShaking ? "shake" : ""}
          `}
        >
          <span className="flex items-center gap-3">
            <Heart className="w-6 h-6 fill-current group-hover:scale-125 transition-transform" />
            <span>Nhấn vào đây</span>
            <Heart className="w-6 h-6 fill-current group-hover:scale-125 transition-transform" />
          </span>
        </button>
      )}

      {showConfession && (
        <div className="animate-fade-in-up text-center px-6">
          <div className="relative inline-block">
            {/* Sparkle decorations */}
            <span className="absolute -top-4 -left-4 text-2xl sparkle">✨</span>
            <span className="absolute -top-4 -right-4 text-2xl sparkle" style={{ animationDelay: "0.5s" }}>✨</span>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-2xl sparkle" style={{ animationDelay: "1s" }}>💫</span>
            
            <p className="font-romantic text-3xl md:text-4xl lg:text-5xl text-primary leading-relaxed">
              Em biết không...
            </p>
            <p className="font-romantic text-2xl md:text-3xl lg:text-4xl text-accent mt-4 leading-relaxed">
              Anh thích em rất nhiều 💕
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground mt-6 max-w-md mx-auto">
              Mỗi đêm trước khi ngủ, anh đều nghĩ về em...
              <br />
              Mong rằng em sẽ luôn hạnh phúc và mỉm cười 🌸
            </p>
          </div>

          {/* Extra hearts explosion */}
          <div className="flex justify-center gap-4 mt-8 text-3xl">
            {["💖", "💗", "💓", "💕", "💞"].map((heart, i) => (
              <span
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {heart}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfessionButton;
