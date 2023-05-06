"use client";

import { motion } from "framer-motion";
import styles from "../styles";

import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { NewFeatures, TypingText, TitleText } from "../components";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <motion.section className={`${styles.paddings} relative left-14 z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-5`}
    >
      {/* Text Styles */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="flex-[.75] flex flex-col justify-center"
      >
        <TypingText title="| What's new ?" textAlign="text-center" />
        <TitleText title={<>What's new about the Metaverse</>} />

        {/* Counter Text */}
        <div className="mt-[20px] flex flex-wrap justify-between gap-4">
          {newFeatures?.map((feature, index) => (
            <NewFeatures key={feature.title} {...feature}  />
          ))}
        </div>
      </motion.div>
      {/* Orbit Style */}
      <motion.div
        variants={planetVariants("right")}
        initial="hidden"
        whileInView="show"
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="whats new"
          className="w-[75%] h-[75%] object-contain"
        />
      </motion.div>
    </motion.div>
  </motion.section>
);

export default WhatsNew;
