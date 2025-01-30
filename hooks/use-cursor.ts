// hooks/use-cursor.ts
import { useState, useEffect } from 'react';

export function useCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = (type: string) => setCursorVariant(type);
    const handleMouseLeave = () => setCursorVariant('default');

    const textElements = document.querySelectorAll('#text');
    const linkElements = document.querySelectorAll('#link')

    textElements.forEach((element) => {
      element.addEventListener('mouseenter', () => handleMouseEnter('text'));
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    linkElements.forEach((element) => {
      element.addEventListener('mouseenter', () => handleMouseEnter('link'));
      element.addEventListener('mouseleave', handleMouseLeave);
    })

    return () => {
      textElements.forEach((element) => {
        element.removeEventListener('mouseenter', () => handleMouseEnter('text'));
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      linkElements.forEach((element) => {
        element.removeEventListener('mouseenter', () => handleMouseEnter('link'));
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return { mousePosition, cursorVariant };
}
