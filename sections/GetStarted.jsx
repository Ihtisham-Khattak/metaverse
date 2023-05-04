"use client";

import { motion } from "framer-motion";
import { StartSteps, TitleText, TypingText } from "../components/";

import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { startingFeatures } from "../constants";
import styles from "../styles";

const GetStarted = () => (
  <motion.section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-5`}
    >
      {/* Orbit Style */}
      <motion.div
        variants={planetVariants("left")}
        initial="hidden"
        whileInView="show"
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get started"
          className="w-[75%] h-[75%] object-contain"
        />
      </motion.div>

      {/* Text Styles */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="flex-[.75] flex flex-col justify-center"
      >
        <TypingText title="| How metawerse work" textAlign="text-center" />
        <TitleText title={<>Get Started with just a few clicks</>} />

        {/* Counter Text */}
        <div className="mt-[20px] flex flex-col gap-5 max-w-[370px]">
          {startingFeatures?.map((feature, index) => (
            <StartSteps key={feature} text={feature} number={index + 1} />
          ))}
        </div>
      </motion.div>
    </motion.div>
    Get Started Section
  </motion.section>
);

export default GetStarted;
