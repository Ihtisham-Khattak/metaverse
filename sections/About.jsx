"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components/";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaverse" textAlign="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-secondary-white mt-[20px] sm:text-[24px] text-[20px] font-normal text-center "
      >
        <span className="font-extrabold uppercase"> Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the
        <span className="font-extrabold uppercase">
          madness of the metaverse
        </span>{" "}
        of today, using only <span className="font-extrabold">VR</span> 
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's{" "}
        <span className="font-extrabold uppercase">explore</span> the madness of
        the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[18px] mt-[10px] object-contain"
      />
    </motion.div>
  </section>
);

export default About;
