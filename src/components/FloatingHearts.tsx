import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Tạo trái tim ban đầu
    const initialHearts: Heart[] = [];
    for (let i = 0; i < 15; i++) {
      initialHearts.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 15,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 10,
      });
    }
    setHearts(initialHearts);

    // Thêm trái tim mới theo thời gian
    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHeart: Heart = {
          id: Date.now(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 15,
          duration: Math.random() * 8 + 8,
          delay: 0,
        };
        // Giữ tối đa 25 trái tim
        const updated = [...prev, newHeart];
        if (updated.length > 25) {
          return updated.slice(-25);
        }
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            filter: 'drop-shadow(0 0 8px hsl(330 70% 60% / 0.6))',
          }}
        >
          💗
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
