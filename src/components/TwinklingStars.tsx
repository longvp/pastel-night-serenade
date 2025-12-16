import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

const TwinklingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Tạo các ngôi sao lấp lánh
    const generatedStars: Star[] = [];
    for (let i = 0; i < 30; i++) {
      generatedStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 3,
      });
    }
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star text-gold-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            fontSize: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        >
          ✨
        </span>
      ))}
    </div>
  );
};

export default TwinklingStars;
