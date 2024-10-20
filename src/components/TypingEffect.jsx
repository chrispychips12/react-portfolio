import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
  const name = "Christopher Concepcion";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % name.length);
        }
      } else {
        setDisplayedText((prev) => name.slice(0, index + 1));
        if (displayedText.length === name.length) {
          setIsDeleting(true);
        } else {
          setIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 100 : 200); // Adjust typing speed

    return () => clearInterval(timer);
  }, [displayedText, isDeleting, index]);

  return <h1>{displayedText}</h1>;
};

export default TypingEffect;
