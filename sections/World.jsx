"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

import { TypingText, TitleText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Heading and Subheading */}
      <TypingText title="| People on the World" textAlign="text-center" />
      <TitleText
        textAlign="text-center"
        title={
          <>
            Track friend you and
            <span className="font-semibold uppercase">invite</span> to play
            together in the same{" "}
            <span className="font-semibold uppercase">world</span>
          </>
        }
      />
    </motion.div>

    {/* Map */}
    <motion.div className="relative mt-[20px] flex">
      <img src="/map.png" alt="map" className="w-full h-full object-cover" />

      {/* Demo  */}
      <div className="absolute bottom-1/4 rounded-b-full right-20 p-[6px] w-[50px] h-[50px] bg-[#2d4158]">
        <img src="/people-01.png" alt="People" />
      </div>

      <div className="absolute top-[15px] rounded-b-full left-32 p-[6px] w-[50px] h-[50px] bg-[#2d4158]">
        <img src="/people-02.png" alt="People" />
      </div>

      <div className="absolute top-1/2 rounded-b-full left-[20%] p-[6px] w-[50px] h-[50px] bg-[#2d4158]">
        <img src="/people-03.png" alt="People" />
      </div>

      <div className="absolute top-1/4 left-[60%] p-[6px] w-[10%] h-[18%] rounded-[10px] bg-[#2d4158]">
        <img src="/people-04.png" alt="People" />
      </div>

      <div className="absolute top-2/4 left-[45%] p-[6px] w-[10%] h-[18%] bg-[#2d4158] rounded-[10px]">
        <img src="/people-05.png" alt="People" />
      </div>
    </motion.div>
  </section>
);

export default World;
