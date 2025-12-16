import { useEffect, useState } from "react";

interface ShootingStar {
  id: number;
  left: number;
  duration: number;
  height: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Tạo sao băng rơi thẳng đứng
    const createStar = () => {
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100, // Vị trí ngang ngẫu nhiên
        duration: Math.random() * 1 + 0.6, // 0.6-1.6 giây
        height: Math.random() * 80 + 100, // Độ dài đuôi sao 100-180px
      };

      setStars((prev) => {
        const updated = [...prev, newStar];
        if (updated.length > 15) {
          return updated.slice(-15);
        }
        return updated;
      });

      // Xóa sao băng sau khi animation kết thúc
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, (newStar.duration + 0.2) * 1000);
    };

    // Tạo nhiều sao băng ban đầu
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createStar(), i * 150);
    }

    // Tạo sao băng mới liên tục - MƯA DÀY ĐẶC
    const interval = setInterval(() => {
      if (Math.random() > 0.1) {
        createStar();
      }
      // Thỉnh thoảng tạo 2-3 sao cùng lúc
      if (Math.random() > 0.5) {
        setTimeout(() => createStar(), 80);
      }
      if (Math.random() > 0.7) {
        setTimeout(() => createStar(), 150);
      }
    }, 200);

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
            top: '-150px',
            height: `${star.height}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
