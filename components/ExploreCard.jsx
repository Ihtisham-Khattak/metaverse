"use client";

import { motion } from "framer-motion";
import styles from "../styles";

import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    // index * 0.2 without this image will be fadeIn on each other
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex justify-center items-center min-w-[150px] h-[650px] transition-[flex] duration-[.7s] ease-out-flex cursor-pointer`}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full rounded-[20px] object-cover"
    />
    {active !== id ? (
      <h3 className="text-white absolute z-0 text-[16px] lg:text-[20px] font-semibold lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ">
        {title}
      </h3>
    ) : (
      <div className="bottom-0 p-8 justify-start w-full rounded-b-[20px] flex-col  bg-[rgba(245,221,85,0.34)] hover:bg-[rgba(0,0,0,.5)]">
        <div
          className={`${styles.flexCenter} glassmorphism w-[60px] h-[60px] mb-[16px] rounded-[24px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="object-contain w-1/2 h-1/2"
          />
        </div>
        <p className="text-white leading-04 uppercase">Enter the Metaverse</p>
        <h2 className="font-semibold sm:text-[24px] text-[18px] text-white leading-02">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
