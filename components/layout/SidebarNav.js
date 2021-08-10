import React from "react";
import { Link } from "next/link";
import { motion } from "framer-motion";
import GithubIcon from "../../svgIcons/GithubIcon";
import LinkedInIcon from "../../svgIcons/LinkedInIcon";
import TwitterIcon from "../../svgIcons/TwitterIcon";
import InstagramIcon from "../../svgIcons/InstagramIcon";

function SidebarNav() {
  const transitionLine = { duration: 1, ease: "easeInOut" };
  const transitionArrow = {
    duration: 1.3,
    delay: 3,

    ease: "easeInOut",
  };

  const githubVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2.7,
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
        delay: 2.4,
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
        delay: 2.1,
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
        delay: 1.8,
      },
    },
  };

  const githubIconClasses =
    "mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8";

  const linkedinIconClasses =
    "mr-3 h-4.5 w-4.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7";

  const instagramIconClasses =
    "h-4.5 w-4.5 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 -ml-1 ";

  const twitterIconClasses =
    "h-4.5 w-4.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7";

  return (
    <div className="relative flex opacity-80">
      <div className=" w-40 space-y-6 xl:ml-6">
        <nav>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-60 w-6 -mt-20 sm:-ml-1 md:ml-0 lg:ml-0 xl:ml-0"
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
              strokeWidth="2"
              d="M16 100l-4 4m0 0l-4-4m4 4V3"
            />
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-60 w-6 -mb-2 sm: md:ml-0 lg:ml-1 xl:ml-1 "
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
          </svg>
          {/* <svg className="-mb-2 mt-3 md:ml-1 lg:ml-1">
            <motion.path
              initial={{ pathLength: 1, opacity: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, opacity: 1, pathOffset: 0 }}
              transition={transitionArrow}
              d="M 10,10 V 120"
              stroke="black"
              strokeWidth="2"
            />
          </svg> */}

          <ul className="space-y-6">
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
              <a href="https://www.linkedin.com/in/dtran5/">
                <LinkedInIcon classes={linkedinIconClasses} />
              </a>
            </motion.li>
            <motion.li
              initial="initial"
              animate="animate"
              variants={instagramVariants}
            >
              <InstagramIcon classes={instagramIconClasses} />
              <a href="https://www.instagram.com/dantranman/"></a>
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
          <svg className="-mb-14 mt-3 md:ml-1 lg:ml-1">
            <motion.path
              // variants={svgVariants}
              initial={{ pathLength: 0, opacity: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, opacity: 1, pathOffset: 0 }}
              transition={transitionLine}
              d="M 10,10 V 100"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </nav>
      </div>
    </div>
  );
}

export default SidebarNav;
