import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import TwinklingStars from "@/components/TwinklingStars";
import TypewriterText from "@/components/TypewriterText";
import MusicControl from "@/components/MusicControl";
import ConfessionButton from "@/components/ConfessionButton";

const Index = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="gradient-bg min-h-screen overflow-hidden relative">
      {/* Background effects */}
      <TwinklingStars />
      <FloatingHearts />

      {/* Music control */}
      <MusicControl />

      {/* Main content */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Moon decoration */}
        <div className="absolute top-8 left-8 md:top-16 md:left-16 text-6xl md:text-8xl moon-glow">
          🌙
        </div>

        {/* Main message card */}
        <div className="max-w-2xl w-full text-center">
          {/* Decorative top */}
          <div className="flex justify-center gap-4 mb-6 text-3xl md:text-4xl">
            <span className="sparkle">💫</span>
            <span className="sparkle" style={{ animationDelay: "0.3s" }}>⭐</span>
            <span className="sparkle" style={{ animationDelay: "0.6s" }}>💫</span>
          </div>

          {/* Main greeting */}
          <div className="bg-card/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50">
            <h1 className="font-romantic text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-relaxed">
              <TypewriterText
                text="Chúc em ngủ ngon 🌙"
                speed={100}
                delay={500}
                onComplete={() => setShowSecondLine(true)}
              />
            </h1>

            {showSecondLine && (
              <p className="font-romantic text-2xl md:text-3xl lg:text-4xl text-accent leading-relaxed animate-fade-in-up">
                <TypewriterText
                  text="Mong rằng giấc mơ tối nay sẽ có anh trong đó 💕"
                  speed={80}
                  delay={300}
                  onComplete={() => setShowButton(true)}
                />
              </p>
            )}
          </div>

          {/* Decorative bottom */}
          <div className="flex justify-center gap-4 mt-6 text-2xl">
            {["🌸", "💖", "🌸", "💖", "🌸"].map((emoji, i) => (
              <span
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${2 + i * 0.15}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>

          {/* Confession button */}
          {showButton && <ConfessionButton />}
        </div>

        {/* Footer decoration */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="font-body text-sm text-muted-foreground opacity-60">
            Với tất cả yêu thương 💕
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
