import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  brightness: number;
}

const NightSky = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Tạo nhiều ngôi sao cho bầu trời đêm
    const generatedStars: Star[] = [];
    for (let i = 0; i < 100; i++) {
      generatedStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 4,
        brightness: Math.random() * 0.7 + 0.3,
      });
    }
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: `hsl(45 100% 90% / ${star.brightness})`,
            borderRadius: '50%',
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px hsl(45 100% 90% / ${star.brightness * 0.5})`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Thêm một số sao sáng hơn */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`bright-${i}`}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            width: '4px',
            height: '4px',
            backgroundColor: 'hsl(45 100% 95%)',
            borderRadius: '50%',
            boxShadow: '0 0 10px 3px hsl(45 100% 90% / 0.6), 0 0 20px 6px hsl(280 60% 70% / 0.3)',
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default NightSky;
