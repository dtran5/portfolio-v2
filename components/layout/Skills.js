import React, { useEffect } from "react";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const skillsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="w-full xs:w-3/4 md:w-8/12 lg:w-10/12 xl:w-6/12 flex flex-col  mx-auto bg-purple-600 xs:bg-red-500 sm:bg-yellow-500 md:bg-green-500 lg:bg-blue-400 xl:bg-pink-300"
      animate={controls}
      ref={ref}
      variants={skillsVariants}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3">
          <h1 className="text-3xl tracking-wider mb-8 text-center">Skills</h1>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-28 sm:w-28 border-2 flex items-center justify-center justify-self-center">
              HTML
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-28 sm:w-28 border-2 flex items-center justify-center justify-self-center">
              HTML
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-28 sm:w-28 border-2 flex items-center justify-center justify-self-center">
              HTML
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-28 sm:w-28 border-2 flex items-center justify-center justify-self-center">
              HTML
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-28 sm:w-28 border-2 flex items-center justify-center justify-self-center">
              HTML
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-28 sm:w-28 border-2 flex items-center justify-center justify-self-center">
              HTML
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-28 sm:w-28 border-2 flex items-center justify-center justify-self-center">
              HTML
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-28 sm:w-28 border-2 flex items-center justify-center justify-self-center">
              HTML
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-28 sm:w-28 border-2 flex items-center justify-center justify-self-center">
              HTML
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 mx-auto">
          <h1 className="text-3xl tracking-wider mb-8 text-center">About Me</h1>
          <p className="text-xs">
            Hello! My name is Dan, web developer and student of code. As a
            former strength and conditioning coach, I recently developed a
            curiosity for technology and code during my time at UCLA. The
            computer science department had developed a simple application for
            athlete fatigue management, providing coaches with valuable
            information that took almost no effort to collect. Athletes could
            easily enter information such as soreness of specific muscles,
            external stressors, hours of sleep, and the program even collected
            countermovement jump heights daily and sent them directly to the
            coaches. The application, while simple, streamlined such a crucial
            part of a coach's job and I found myself curious about how these
            programs were created and what else could be done to improve our
            coaching thought process. My limited understanding of the program's
            inner workings led me to begin learning to code. I fully dove in
            without previous knowledge and while it started out as overwhelming
            I took it one step at a time, stayed consistent, and with help from
            fellow coders I have been able to build a solid foundation. I was
            determined to learn and along the way my curiosity turned to genuine
            enjoyment. The process has been a humbling experience but one that I
            am so excited to continue. At this point, my only regret has been
            not learning to code earlier!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;