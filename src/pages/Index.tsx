import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import NightSky from "@/components/NightSky";
import ShootingStars from "@/components/ShootingStars";
import TypewriterText from "@/components/TypewriterText";
import MusicControl from "@/components/MusicControl";
import ChibiGirl from "@/components/ChibiGirl";

const Index = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="night-sky min-h-screen overflow-hidden relative">
      {/* Background effects - Night sky with stars */}
      <NightSky />
      <NightSky />

      {/* Shooting stars - Sao băng */}
      <ShootingStars />
      <ShootingStars />

      {/* Floating hearts */}
      <FloatingHearts />
      {/* Main content */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Moon decoration - Mặt trăng sáng */}
        <div className="absolute top-8 right-8 md:top-12 md:right-16">
          <div className="relative">
            <span className="text-6xl md:text-8xl moon-glow block">🌙</span>
            {/* Moon glow effect */}
            <div className="absolute inset-0 bg-yellow-200/20 rounded-full blur-3xl scale-150" />
          </div>
        </div>

        {/* Main message card */}
        <div className="max-w-2xl w-full text-center">
          {/* Decorative top - Sao sáng */}
          <div className="flex justify-center gap-4 mb-6 text-3xl md:text-4xl">
            <span className="sparkle">✨</span>
            <span className="sparkle" style={{ animationDelay: "0.3s" }}>
              ⭐
            </span>
            <span className="sparkle" style={{ animationDelay: "0.6s" }}>
              ✨
            </span>
          </div>

          {/* Main greeting - Card trong suốt */}
          <div className="bg-card/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-soft/20">
            <h1 className="font-romantic text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-relaxed drop-shadow-lg">
              <TypewriterText
                text="Chúc em ngủ ngon 🌙"
                speed={100}
                delay={500}
                onComplete={() => setShowSecondLine(true)}
              />
            </h1>
            {/* Music control */}
            <MusicControl />
          </div>

          {/* Decorative bottom - Stars and hearts */}
          <div className="flex justify-center gap-4 mt-6 text-2xl">
            {["⭐", "💖", "✨", "💖", "⭐"].map((emoji, i) => (
              <span
                key={i}
                className="animate-fade-in-up drop-shadow-lg"
                style={{ animationDelay: `${2 + i * 0.15}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Chibi girl decoration */}
        <div className="mt-8">
          <ChibiGirl />
        </div>

        {/* Footer decoration */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="font-body text-sm text-muted-foreground opacity-70">
            ✨ 💕 ✨
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
