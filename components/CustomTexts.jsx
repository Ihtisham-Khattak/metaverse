"use client";

import { motion } from "framer-motion";
import { textVariant2, textContainer } from "../utils/motion";

export const TypingText = ({ title, textAlign }) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    className={`${textAlign} font-normal text-[20px] text-secondary-white`}
  >
    {/* The from() method creates a new array from any array-like or iterable object.*/}
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textAlign }) => <h2>Title Text</h2>;
