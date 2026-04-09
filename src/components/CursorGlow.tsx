import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * A soft branded orb that smoothly follows the mouse cursor.
 * Mount once at the root level (in App.tsx).
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Spring smoothing for a natural lag effect
  const x = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setEnabled(supportsFinePointer && !prefersReducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [enabled, rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-0 top-0 left-0"
      style={{ x, y }}
    >
      {/* Outer diffuse halo */}
      <div
        className="rounded-full"
        style={{
          width: 500,
          height: 500,
          marginTop: -250,
          marginLeft: -250,
          background: 'radial-gradient(circle, rgba(18,146,232,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Inner crisp glow */}
      <div
        className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 120,
          height: 120,
          background: 'radial-gradient(circle, rgba(18,146,232,0.14) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}
