'use client';

import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/use-cursor';

export default function Cursor() {
  const { mousePosition, cursorVariant } = useCursor();

  const variants: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'tween',
        ease: 'linear',
        duration: 0.03,
      },
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      transition: {
        type: 'tween',
        ease: 'linear',
        duration: 0.1,
      },
    },
    link: {
        height: 100,
        width: 100,
        x: mousePosition.x - 50,
        y: mousePosition.y - 50,
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
        transition: {
          type: 'tween',
          ease: 'linear',
          duration: 0.1,
        },
      },
  };


  return (
      <motion.div
        className={`${cursorVariant}-cursor cursor`}
        variants={variants}
        animate={cursorVariant}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          backgroundColor: '#fff',
          zIndex: 9999,
          borderRadius: '50%',
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          backdropFilter: 'blur(1px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
              {cursorVariant === 'link' && (
        <motion.img
          src="/assets/icons/arrow-top-right-long.svg"
          alt="Link Icon"
          width={50}
          height={50}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.1 }}
        />
      )}
      </motion.div>
  );
}