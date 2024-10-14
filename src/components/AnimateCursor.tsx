"use client";
import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";

export default function AnimateCursor() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="w-12 h-12 rounded-full bg-purple-400/10 fixed pointer-events-none"
      style={{
        top: y,
        left: x,
        transform: "translate(-50%, -50%)",
        filter: "blur(8px)", // Добавляем размытие краевб
        boxShadow: "0 0 40px 20px rgba(192, 132, 252, 0.1", // Создание эффекта размытия
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    />
  );
}
