"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {

    const {scrollYProgress}=useScroll();

    return(

        <motion.div

            style={{
                scaleX:scrollYProgress
            }}

            className="fixed top-0 left-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"

        />

    );

}