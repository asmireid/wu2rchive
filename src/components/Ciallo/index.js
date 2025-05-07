import React, { useState, useEffect, useCallback } from 'react';
import './styles.module.css';

const Ciallo = ({ children, duration = 2000, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [aIdx, setAIdx] = useState(0);
  const ac = new (window.AudioContext || window.webkitAudioContext)();

  const color16 = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  const loadSound = useCallback((urlData) => {
    const req = new XMLHttpRequest();
    req.open('GET', urlData, true);
    req.responseType = 'arraybuffer';
    req.onload = () => {
      ac.decodeAudioData(req.response, (buffer) => {
        const source = ac.createBufferSource();
        source.buffer = buffer;
        source.connect(ac.destination);
        source.start(0);
      }, (e) => {
        console.info('Error loading sound');
      });
    };
    req.send();
  }, [ac]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    const handleClick = (e) => {
      const phrases = ["Ciallo～(∠・ω< )⌒★", "Ciallo～(∠・ω< )⌒☆"];
      const span = document.createElement('span');
      span.textContent = phrases[aIdx];
      setAIdx((aIdx + 1) % phrases.length);

      span.style.zIndex = '999999999999999999999999999999999999999999999999999999999999999999999';
      span.style.top = `${e.pageY - 20}px`;
      span.style.left = `${e.pageX}px`;
      span.style.position = 'absolute';
      span.style.fontWeight = 'bold';
      span.style.color = color16();

      document.body.appendChild(span);
      loadSound('https://ciallo.trance-0.com/ciallo.aac');

      span.animate([
        { top: `${e.pageY - 20}px`, opacity: 1 },
        { top: `${e.pageY - 180}px`, opacity: 0 }
      ], {
        duration: 1500,
        easing: 'ease-out',
        fill: 'forwards'
      }).onfinish = () => {
        span.remove();
      };
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      clearTimeout(timer);
      document.body.removeEventListener('click', handleClick);
    };
  }, [delay, aIdx, loadSound]);

  return (
    <div className={`ciallo-text ${isVisible ? 'visible' : ''}`} style={{ animationDuration: `${duration}ms` }}>
      {children}
    </div>
  );
};

export default Ciallo;