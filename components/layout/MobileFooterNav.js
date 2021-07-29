import React from "react";
import { Link } from "next/link";
import { motion } from "framer-motion";
import GithubIcon from "../../svgIcons/GithubIcon";
import LinkedInIcon from "../../svgIcons/LinkedInIcon";
import InstagramIcon from "../../svgIcons/InstagramIcon";
import TwitterIcon from "../../svgIcons/TwitterIcon";

function MobileFooterNav() {
  const transitionLine = { duration: 2, ease: "easeInOut" };
  const transitionArrow = {
    duration: 1.5,
    delay: 3,

    ease: "easeInOut",
  };

  const navVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const githubVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };
  const linkedInVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.5,
      },
    },
  };
  const instagramVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2,
      },
    },
  };
  const twitterVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2.5,
      },
    },
  };

  const githubIconClasses = "mr-10 h-10 w-10 ";

  const linkedinIconClasses = "mr-10 h-8 w-8 ";

  const instagramIconClasses = "mr-10 h-11 w-11 ";

  const twitterIconClasses = "h-10 w-10 ";

  return (
    // <div className="relative flex  opacity-80">
    //   <div className=" w-40 space-y-6 xl:ml-6">
    <motion.nav
      variants={navVariants}
      animate="animate"
      initial="initial"
      className="h-44 flex items-center justify-center"
    >
      {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-60 w-6 -mb-1 sm: md:ml-0 lg:ml-1 xl:ml-1 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <motion.path
              initial={{ pathLength: 1, opacity: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, opacity: 1, pathOffset: 0 }}
              transition={transitionArrow}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7l4-4m0 0l4 4m-4-4v100"
            />
          </svg> */}

      <ul className="flex justify-center items-center">
        <motion.li
          initial="initial"
          animate="animate"
          variants={githubVariants}
        >
          <a href="https://github.com/dtran5">
            <GithubIcon classes={githubIconClasses} />
          </a>
        </motion.li>

        <motion.li
          initial="initial"
          animate="animate"
          variants={linkedInVariants}
        >
          <a href="https://www.linkedin.com/feed/">
            <LinkedInIcon classes={linkedinIconClasses} />
          </a>
        </motion.li>
        <motion.li
          initial="initial"
          animate="animate"
          variants={instagramVariants}
        >
          <a href="https://www.instagram.com/dantranman/">
            <InstagramIcon classes={instagramIconClasses} />
          </a>
        </motion.li>
        <motion.li
          initial="initial"
          animate="animate"
          variants={twitterVariants}
        >
          <a href="https://twitter.com/DanTranMan">
            <TwitterIcon classes={twitterIconClasses} />
          </a>
        </motion.li>
      </ul>
      {/* <svg className="-mb-14 mt-3 md:ml-1 lg:ml-1">
            <motion.path
              // variants={svgVariants}
              initial={{ pathLength: 0, opacity: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, opacity: 1, pathOffset: 0 }}
              transition={transitionLine}
              d="M 10,10 V 100"
              stroke="black"
              strokeWidth="2"
            />
          </svg> */}
    </motion.nav>
    //   </div>
    // </div>
  );
}

export default MobileFooterNav;
