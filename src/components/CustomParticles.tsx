"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function CustomParticles() {
  const [init, setInit] = useState(false);

  // Инициализация движка частиц
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      particles: {
        number: {
          value: 100, // Количество частиц
          density: {
            enable: true,
            value_area: 100,
          },
        },
        shape: {
          type: "star",
          options: {
            star: {
              sides: 5,
            },
          },
        },
        size: {
          value: { min: 2, max: 4 },
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.5,
            sync: false,
          },
        },
        color: {
          value: "#7e57c2", // Цвет частиц
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1.0,
            opacity_min: 0.1,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.1,
            opacity: 1,
          },
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce", // Изменение на 'bounce'
          bounce: false,
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="absolute w-full h-full top-0 left-0">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="w-full h-full"
        />
      )}
    </div>
  );
}
