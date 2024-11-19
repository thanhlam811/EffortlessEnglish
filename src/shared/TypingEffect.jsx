import { useState, useEffect } from "react";

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Tốc độ gõ chữ
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default TypingEffect;