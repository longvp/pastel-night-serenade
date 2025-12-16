import { useEffect, useState } from "react";

interface ShootingStar {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  size: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Tạo sao băng liên tục
    const createStar = () => {
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        left: Math.random() * 80, // Bắt đầu từ bên trái
        top: Math.random() * 40, // Bắt đầu từ phía trên
        duration: Math.random() * 1.5 + 1, // 1-2.5 giây
        delay: 0,
        size: Math.random() * 100 + 100, // Độ dài đuôi sao
      };

      setStars((prev) => {
        // Giữ tối đa 5 sao băng cùng lúc
        const updated = [...prev, newStar];
        if (updated.length > 5) {
          return updated.slice(-5);
        }
        return updated;
      });

      // Xóa sao băng sau khi animation kết thúc
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, (newStar.duration + 0.5) * 1000);
    };

    // Tạo sao băng đầu tiên
    createStar();

    // Tạo sao băng mới mỗi 0.8-2 giây
    const interval = setInterval(() => {
      if (Math.random() > 0.3) { // 70% cơ hội tạo sao băng
        createStar();
      }
    }, 800 + Math.random() * 1200);

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
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
