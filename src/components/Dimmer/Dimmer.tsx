"use client";
import { useEffect, useState } from "react";
import styles from "./Dimmer.module.css"; // Импортируем стили

const Dimmer = () => {
  const [isDimmed, setIsDimmed] = useState(false); // Состояние для контроля затемнения
  const [resizeTimeout, setResizeTimeout] = useState<NodeJS.Timeout | null>(
    null
  ); // Хранение таймера

  useEffect(() => {
    const handleResizeStart = () => {
      setIsDimmed(true); // Включаем затемнение
      if (resizeTimeout) {
        clearTimeout(resizeTimeout); // Очищаем предыдущий таймер
      }
    };

    const handleResizeEnd = () => {
      // Устанавливаем новый таймер, чтобы отключить затемнение через 300 мс
      const newTimeout = setTimeout(() => {
        setIsDimmed(false); // Выключаем затемнение после окончания изменения размера
      }, 300);

      setResizeTimeout(newTimeout); // Сохраняем новый таймер
    };

    window.addEventListener("resize", handleResizeStart);
    window.addEventListener("resize", handleResizeEnd);

    // Убираем обработчики событий после завершения изменения размера
    return () => {
      window.removeEventListener("resize", handleResizeStart);
      window.removeEventListener("resize", handleResizeEnd);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout); // Очищаем таймер при размонтировании компонента
      }
    };
  }, [resizeTimeout]); // Добавляем зависимость от таймера

  return (
    <div className={`${styles.dimmer} ${isDimmed ? styles.visible : ""}`} />
  );
};

export default Dimmer;
