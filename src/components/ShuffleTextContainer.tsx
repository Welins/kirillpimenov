"use client";

import { useEffect, useState } from "react";

// Интерфейс для пропсов ShuffleText
interface ShuffleTextProps {
  startText: string; // Начальный текст
  endText: string; // Конечный текст
  shuffleIterations?: number; // Количество итераций шаффла
  inline?: boolean;
}

// Функция для генерации случайных символов
const getRandomChar = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

// Компонент ShuffleText для анимации текста
const ShuffleText: React.FC<ShuffleTextProps> = ({
  startText,
  endText,
  shuffleIterations = 20, // По умолчанию 20 итераций
  inline = true,
}) => {
  const [text, setText] = useState<string>(startText); // Начальный текст
  const maxLength = Math.max(startText.length, endText.length); // Определяем максимальную длину текста

  useEffect(() => {
    let currentIteration = 0; // Текущая итерация

    const interval = setInterval(() => {
      if (currentIteration < shuffleIterations) {
        const newTextArray = Array.from(startText).map((char, index) => {
          if (index < currentIteration * (maxLength / shuffleIterations)) {
            return endText.charAt(index); // Устанавливаем символ из конечного текста
          } else if (Math.random() < 0.3) {
            return getRandomChar(); // Заменяем на случайный символ
          }
          return char; // Возвращаем оригинальный символ
        });

        setText(newTextArray.join(""));
        currentIteration++;
      } else {
        clearInterval(interval);
        // После всех итераций устанавливаем конечный текст
        setText(endText);
      }
    }, 100); // Интервал между итерациями

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [endText, shuffleIterations, startText]); // Зависимости эффекта

  return (
    <span
      style={{
        display: `${inline ? "inline-block " : "inline "}`,
        width: `${maxLength}ch`, // Фиксируем ширину контейнера на основе самой длинной строки
        whiteSpace: "nowrap", // Предотвращаем перенос текста на новую строку
        transition: "color 0.5s ease",
      }}
    >
      {text}
    </span>
  );
};

// Основной компонент для управления двумя ShuffleText
interface ShuffleTextContainerProps {
  firstText: string; // Первый текст
  secondText: string; // Второй текст
  shuffleIterations?: number; // Количество итераций шаффла
  displayDuration?: number; // Время отображения текста (в миллисекундах)
  inline?: boolean;
}

const ShuffleTextContainer: React.FC<ShuffleTextContainerProps> = ({
  firstText,
  secondText,
  shuffleIterations = 20, // По умолчанию 20 итераций
  displayDuration = 2000, // По умолчанию 2000 мс
  inline = true,
}) => {
  const [showFirstText, setShowFirstText] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText((prev) => !prev); // Переключение между текстами
    }, displayDuration + 1000); // Время между переключениями

    return () => clearInterval(interval);
  }, [displayDuration]);

  return (
    <div>
      {showFirstText ? (
        <ShuffleText
          startText={firstText}
          endText={secondText}
          shuffleIterations={shuffleIterations} // Настройка количества итераций
          inline={inline}
        />
      ) : (
        <ShuffleText
          startText={secondText}
          endText={firstText}
          shuffleIterations={shuffleIterations} // Настройка количества итераций
          inline={inline}
        />
      )}
    </div>
  );
};

export default ShuffleTextContainer;
export { ShuffleText };
