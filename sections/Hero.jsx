"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`sm:pl-16 pl-6 ${styles.xPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* heading div */}
      <div className="relative z-10 flex flex-col justify-center items-center">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>

      {/* Image and Scroll Icon */}
      <motion.div
        variants={slideIn("left", "tween", 0.25, 1)}
        className="relative w-full -mt-[16px] md:-mt-[20px]"
      >
        <div className="absolute z-[0] w-full h-[300px] -top-[30px] hero-gradient rounded-tl-[140px] " />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full h-[350px] sm:h-[500px] rounded-tl-[140px] relative z-10 object-cover"
        />

        <a href="#explore">
          <div className="w-full pr-[40px] sm:-mt-[70px] -mt-[50px] flex justify-end relative z-10">
            <img
              className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-contain"
              src="/stamp.png"
              alt="stamp"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
