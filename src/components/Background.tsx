'use client';

import { useEffect, useState } from 'react';
import styles from './Background.module.css';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.background}>
      <div 
        className={styles.gradient}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(56, 189, 248, 0.15) 0%,
            rgba(56, 189, 248, 0.1) 25%,
            rgba(56, 189, 248, 0.05) 50%,
            rgba(56, 189, 248, 0) 100%)`,
        }}
      />
      <div className={styles.grid} />
    </div>
  );
};

export default Background; 