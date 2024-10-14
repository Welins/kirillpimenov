"use client";
import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode; // Указываем, что children должны быть React-элементами
}

export default function MagneticButton({ children }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null); // Указываем тип для рефа
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      // Проверяем, что ref.current не равен null
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      className="group"
      ref={ref}
      onMouseLeave={reset}
      onMouseMove={handleMouse}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
