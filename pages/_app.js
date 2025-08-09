import '../styles/globals.css';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    const saved = localStorage.getItem('brightness');
    if (saved) setBrightness(parseFloat(saved));
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--brightness', brightness);
    localStorage.setItem('brightness', brightness);
  }, [brightness]);

  return <Component {...pageProps} brightness={brightness} setBrightness={setBrightness} />;
}
