import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  brightness: number;
  type: 'normal' | 'bright' | 'colorful';
}

const NightSky = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Tạo RẤT NHIỀU ngôi sao cho bầu trời đêm
    const generatedStars: Star[] = [];
    
    // 200 sao nhỏ bình thường
    for (let i = 0; i < 200; i++) {
      generatedStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 1.5,
        delay: Math.random() * 3,
        brightness: Math.random() * 0.6 + 0.4,
        type: 'normal',
      });
    }
    
    // 50 sao sáng hơn
    for (let i = 200; i < 250; i++) {
      generatedStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 2,
        brightness: Math.random() * 0.3 + 0.7,
        type: 'bright',
      });
    }
    
    // 30 sao màu (hồng, tím, vàng)
    for (let i = 250; i < 280; i++) {
      generatedStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 2.5 + 1.5,
        delay: Math.random() * 2,
        brightness: Math.random() * 0.3 + 0.7,
        type: 'colorful',
      });
    }
    
    setStars(generatedStars);
  }, []);

  const getStarStyle = (star: Star) => {
    const colors = {
      normal: `hsl(45 100% 95% / ${star.brightness})`,
      bright: `hsl(45 100% 100%)`,
      colorful: [
        `hsl(330 70% 80%)`, // hồng
        `hsl(280 60% 80%)`, // tím
        `hsl(45 100% 80%)`, // vàng
        `hsl(200 70% 80%)`, // xanh nhạt
      ][star.id % 4],
    };

    const glows = {
      normal: `0 0 ${star.size * 2}px ${star.size}px hsl(45 100% 90% / ${star.brightness * 0.4})`,
      bright: `0 0 ${star.size * 4}px ${star.size * 2}px hsl(45 100% 95% / 0.6), 0 0 ${star.size * 8}px ${star.size * 3}px hsl(45 100% 90% / 0.3)`,
      colorful: `0 0 ${star.size * 3}px ${star.size * 1.5}px ${colors.colorful}40`,
    };

    return {
      left: `${star.left}%`,
      top: `${star.top}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      backgroundColor: colors[star.type],
      borderRadius: '50%',
      boxShadow: glows[star.type],
      animationDuration: `${star.duration}s`,
      animationDelay: `${star.delay}s`,
    };
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Tất cả các sao */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={getStarStyle(star)}
        />
      ))}
      
      {/* Thêm một số cụm sao sáng đặc biệt */}
      {[...Array(20)].map((_, i) => {
        const baseX = Math.random() * 90 + 5;
        const baseY = Math.random() * 70 + 5;
        return (
          <div key={`cluster-${i}`}>
            {[...Array(3)].map((_, j) => (
              <div
                key={`cluster-${i}-${j}`}
                className="star"
                style={{
                  left: `${baseX + (Math.random() - 0.5) * 3}%`,
                  top: `${baseY + (Math.random() - 0.5) * 3}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  backgroundColor: 'hsl(45 100% 95%)',
                  borderRadius: '50%',
                  boxShadow: '0 0 6px 2px hsl(45 100% 90% / 0.5)',
                  animationDuration: `${Math.random() * 2 + 1}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        );
      })}
      
      {/* Dải ngân hà mờ */}
      <div 
        className="absolute w-full h-full opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 120% 40% at 30% 20%, hsl(280 40% 60% / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 80% 30% at 70% 60%, hsl(45 60% 70% / 0.2) 0%, transparent 40%)
          `,
        }}
      />
    </div>
  );
};

export default NightSky;
