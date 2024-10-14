"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Импортируем AnimatePresence
import ScrollTo from "./ScrollTo";

interface NavigationMenuProps {
  locales: {
    info: string;
    work: string;
    contacts: string;
  };
}

const NavigationMenu = ({ locales }: NavigationMenuProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null); // Состояние для отслеживания элемента под курсором

  // Функция для отслеживания активной секции
  const handleScroll = () => {
    const sections = document.querySelectorAll("div[id]"); // выбираем все div с id
    let currentSection = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Проверяем, находится ли верхняя часть секции в видимой области окна
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentSection = section.id; // Сохраняем текущий id секции
      }
    });
    setActiveSection(currentSection); // Устанавливаем активную секцию один раз
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="hidden md:block fixed top-[90px] right-[0vw] z-50">
      <ul className="relative w-full h-full uppercase text-right font-medium">
        {[
          { id: "about", label: locales.info },
          { id: "projects", label: locales.work },
          { id: "contact", label: locales.contacts },
        ].map(({ id, label }) => (
          <li
            key={id}
            className="relative "
            onMouseEnter={() => setHoveredSection(id)} // Устанавливаем состояние при наведении
            onMouseLeave={() => setHoveredSection(null)} // Сбрасываем состояние при уходе курсора
          >
            <ScrollTo targetId={id}>
              <motion.div
                className={`inline-block py-1 relative z-10 w-full  px-[1.5vw] hover:text-white transition-all ${
                  activeSection === id ? "text-white" : "text-neutral-500"
                }`}
              >
                {label}
              </motion.div>
            </ScrollTo>
            <AnimatePresence>
              {(activeSection === id || hoveredSection === id) && (
                <motion.div
                  className="absolute top-0 right-0 bg-neutral-600/50 h-full border-l-[1px] border-purple-400/40 border-collapse"
                  initial={{ x: "100%", width: "100%" }} // Начальная ширина и позиция (100% ширины контейнера)
                  animate={{ x: "0%" }} // Смещение фона, чтобы он заполнил контейнер полностью
                  exit={{ x: "100%" }} // Анимация при уходе курсора (фон уходит вправо)
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
