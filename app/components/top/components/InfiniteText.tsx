'use client'

import { motion } from "framer-motion";
import styles from "../top.module.css";
import { useEffect, useState } from "react";
const { infiniteArea, safari } = styles;

type Props = {
  text: string;
  count: number
};
export const InfiniteText = ({ text, count }: Props) => {
  const loopedText = `${text} \u00A0 \u00A0`.repeat(count);
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent.toLowerCase();
      const safari = /^((?!chrome|android).)*safari/.test(ua);
      setIsSafari(safari);
    }
  }, []);
  return (
    <div className={`${infiniteArea} ${isSafari ? safari : ""}`}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <span>{loopedText}</span>
      </motion.div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <span>{loopedText}</span>
      </motion.div>
    </div>
  );
};
