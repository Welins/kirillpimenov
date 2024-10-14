"use client";

import { animate } from "framer-motion";
import { useRef, useEffect } from "react";

interface ScrollToProps {
  targetId: string; // ID элемента, до которого нужно прокрутить
  children: React.ReactNode; // Дочерние элементы для отображения текста ссылки
}

const ScrollTo: React.FC<ScrollToProps> = ({ targetId, children }) => {
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    targetRef.current = document.getElementById(targetId); // Сохраняем ссылку на элемент в useRef
  }, [targetId]);

  const handleScrollTo = () => {
    if (!targetRef.current) return;

    const targetPosition =
      targetRef.current.getBoundingClientRect().top + window.scrollY;

    // Анимация прокрутки до нужной позиции с использованием framer-motion
    animate(window.scrollY, targetPosition, {
      duration: 1, // Время анимации в секундах
      onUpdate: (latest) => {
        window.scrollTo(0, latest); // Обновляем позицию окна при каждой итерации
      },
      ease: [0.22, 1, 0.36, 1], // Настраиваем кривая анимации (easing)
    });
  };

  return (
    <span onClick={handleScrollTo} className="cursor-pointer">
      {children}
    </span>
  );
};

export default ScrollTo;
