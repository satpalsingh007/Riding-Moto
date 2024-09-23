// FloatingImages.js
import React, { useEffect, useRef, useState } from 'react';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';

const FloatingImages = () => {
  const canvasRef = useRef(null);
  const arc = 30;
  const speed = 20;
  const rate = 60;
  const imgSources = [img1, img2, img3, img4];
  const [images, setImages] = useState([]);

  // Load images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(imgSources.map(src => {
        return new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
        });
      }));
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return; // Ensure images are loaded

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const parts = new Array(arc).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      img: images[Math.floor(Math.random() * images.length)],
      size: Math.random() * 30 + 10,
    }));

    let time = 0;

    const particles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts.forEach(li => {
        ctx.drawImage(li.img, li.x, li.y, li.size, li.size);
        
        li.x += li.toX * (time * 0.05);
        li.y += li.toY * (time * 0.05);

        // Wrap around canvas
        if (li.x > canvas.width) li.x = 0;
        if (li.y > canvas.height) li.y = 0;
        if (li.x < 0) li.x = canvas.width;
        if (li.y < 0) li.y = canvas.height;
      });

      if (time < speed) {
        time++;
      }
      setTimeout(particles, 1000 / rate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  return (
    <canvas ref={canvasRef} style={{ overflow: 'hidden', backgroundColor: 'white' }} />
  );
};

export default FloatingImages;
