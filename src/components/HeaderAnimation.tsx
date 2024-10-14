"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeaderAnimation() {
  // Получаем положение прокрутки
  const { scrollY } = useScroll();

  // Определяем ширину фона на основе положения прокрутки
  const backgroundWidth = useTransform(scrollY, [0, 50], ["0%", "100%"]);

  return (
    <motion.div
      style={{ width: backgroundWidth }}
      className="absolute top-0 left-0 h-full bg-black/50 border-b-[1px] border-neutral-400/10 transition-all duration-300"
    />
  );
}
