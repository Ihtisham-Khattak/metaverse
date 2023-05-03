"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants/index";

const Footer = () => (
  <motion.footer
    initial="hidden"
    whileInView="show"
    variants={footerVariants}
    className={`${styles.paddings} relative p-8 `}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} flex flex-col gap-8 mx-auto`}>
      <div className="flex items-center justify-between flex-wrap gap-8">
        <h3 className="font-bold text-white md:text-[44px] text-[26px]">
          What is Metaverse
        </h3>
        <button className="flex items-center rounded-[32px] text-white h-fit gap-[12px] bg-[#25618b] px-4 py-[12px]">
          <img
            src="/headset.svg"
            alt="Headset"
            className="w-[20px] h-[20px] object-contain"
          />{" "}
          <span> Enter the Metaverse</span>{" "}
        </button>
      </div>
      {/* Social Section */}
      <div className="flex flex-col">
        <div className="h-[2px] mb-[20px] bg-white opacity-10" />

        {/* Icons and paragraph */}
        <div className="flex items-center justify-between flex-wrap gap-4 text-white">
          <h3>Metaverse</h3>
          <p>Copyright @ 2021-2023 Metaverse All rights reversed</p>
          <div className="flex gap-5">
            {socials?.map((socials) => (
              <img
                src={socials.url}
                key={socials.name}
                alt={socials.name}
                className="w-[24px] h-[24px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
