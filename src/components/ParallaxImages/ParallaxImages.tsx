"use client";

import styles from "./ParallaxImages.module.css";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// List of image filenames
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

// Main component
export default function ParallaxImages() {
  const gallery = useRef<HTMLDivElement | null>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  // Get height from state
  const { height } = dimension;

  // Transform values based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={styles.gallery} ref={gallery}>
      <div className={styles.galleryWrapper}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </div>
  );
}

// Define the props type for the Column component
interface ColumnProps {
  images: string[]; // Array of image file names
  y: any; // Pass the y motion value
}

// Column component
const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div className={`${styles.column}`} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image
              src={`/images/${src}`}
              alt="Portfolio Image"
              className="opacity-80"
              fill
              style={{ objectFit: "cover" }} // Ensure images cover the container
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
