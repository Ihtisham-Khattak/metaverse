"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExploreCard, TitleText, TypingText } from "../components/";
import { exploreWorlds } from "../constants";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Title */}
      <TypingText title="| The World" textAlign="text-center" />
      {/* Sub Title */}
      <TitleText
        title={
          <>
            Choose the World you want to <br className="md:block hidden" /> explore with us 😌.
          </>
        }
        textAlign="text-center"
      />
    </motion.div>
    Explore section
  </section>
);

export default Explore;
