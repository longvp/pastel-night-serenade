import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
}

const TypewriterText = ({
  text,
  speed = 80,
  delay = 0,
  onComplete,
  className = "",
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Đợi delay trước khi bắt đầu gõ
    const delayTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Hoàn thành gõ chữ
      if (onComplete) {
        onComplete();
      }
      // Ẩn cursor sau khi hoàn thành
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [displayedText, isTyping, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && isTyping && <span className="typewriter-cursor" />}
    </span>
  );
};

export default TypewriterText;
