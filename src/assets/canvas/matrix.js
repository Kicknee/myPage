import React, { useEffect, useRef } from "react";

const RainCanvas = () => {
  const canvasRef = useRef(null);
  const chars = "1234567890ABCDEFGHIJKLMOPRSTUWXYZ".split("");
  const fontSize = 10;
  let columns, drops;

  // funkcja inicjujaca canvas i tablice

  const initialize = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;

    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px Arial`;
  };

  //rysuje litery na canvasie

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFF";

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  };

  useEffect(() => {
    initialize();
    const interval = setInterval(draw, 33);

    // Aktualizuj po zmianie rozmiaru okna
    const resizeHandler = () => {
      initialize();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
  );
};

export default RainCanvas;
