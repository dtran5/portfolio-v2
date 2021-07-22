import React from "react";
import { Link } from "next/link";
import { motion } from "framer-motion";
import GithubIcon from "../../svgIcons/GithubIcon";
import LinkedInIcon from "../../svgIcons/LinkedInIcon";

function SidebarNav() {
  const transitionLine = { duration: 2, ease: "easeInOut" };
  const transitionArrow = {
    duration: 2,
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
        delay: 3.2,
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
        delay: 2.7,
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
        delay: 2.2,
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
        delay: 1.7,
      },
    },
  };

  const githubIconClasses =
    "mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8";

  const linkedinIconClasses =
    "mr-3 h-4.5 w-4.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7";

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
          </svg>

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 -ml-1 "
                  viewBox="-100.7682 -167.947 873.3244 1007.682"
                >
                  <g fill="#100f0d">
                    <path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959" />
                    <path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308" />
                  </g>
                </svg>
              </a>
            </motion.li>
            <motion.li
              initial="initial"
              animate="animate"
              variants={twitterVariants}
            >
              <a href="https://twitter.com/DanTranMan">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
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
