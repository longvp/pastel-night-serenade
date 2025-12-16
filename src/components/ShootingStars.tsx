import { useEffect, useState } from "react";

interface ShootingStar {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  size: number;
  angle: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Tạo sao băng liên tục - MƯA SAO BĂNG
    const createStar = () => {
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100, // Vị trí ngang ngẫu nhiên
        top: Math.random() * 30 - 10, // Bắt đầu từ phía trên
        duration: Math.random() * 1 + 0.5, // 0.5-1.5 giây (nhanh hơn)
        delay: 0,
        size: Math.random() * 80 + 80, // Độ dài đuôi sao
        angle: Math.random() * 20 + 35, // Góc rơi 35-55 độ
      };

      setStars((prev) => {
        const updated = [...prev, newStar];
        // Giữ tối đa 15 sao băng cùng lúc
        if (updated.length > 15) {
          return updated.slice(-15);
        }
        return updated;
      });

      // Xóa sao băng sau khi animation kết thúc
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, (newStar.duration + 0.3) * 1000);
    };

    // Tạo nhiều sao băng ban đầu
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createStar(), i * 200);
    }

    // Tạo sao băng mới mỗi 200-500ms - MƯA DÀY ĐẶC
    const interval = setInterval(() => {
      // 90% cơ hội tạo sao băng
      if (Math.random() > 0.1) {
        createStar();
      }
      // Đôi khi tạo 2-3 sao băng cùng lúc
      if (Math.random() > 0.6) {
        setTimeout(() => createStar(), 50);
      }
      if (Math.random() > 0.8) {
        setTimeout(() => createStar(), 100);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            transform: `rotate(${star.angle}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
