"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`relative py-8 ${styles.xPaddings}`}
  >
    <div className="absolute inset-0 w-[50%] gradient-04" />
    <div className={`mx-auto flex justify-between gap-8 ${styles.innerWidth}`}>
      <img className="w-[25px] h-[25px] object-contain" src="/search.svg" />
      <h2 className="text-white text-[20px] font-extrabold leading-4">
        Metaverse
      </h2>
      <img className="w-[25px] h-[25px] object-contain" src="/menu.svg" />
    </div>
  </motion.nav>
);

export default Navbar;
