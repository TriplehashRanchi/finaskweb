"use client";

import Preloader from "@/components/Preloader";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <>
      <Preloader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
