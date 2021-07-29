import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SiteButton from "../SiteButton";
import CopyIcon from "../../svgIcons/CopyIcon";

export default function App() {
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

  const [text, setText] = useState("Dan.tran301@gmail.com");
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const handleEmailClick = () => {
    setText("Dan.tran301@gmail.com");
    console.log(text);
  };

  const emailCaptureVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 100 },
    visible: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const iconClasses = "h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-5 lg:w-5";
  const emailButtonClasses =
    "flex justify-center items-center bg-white w-32 sm:w-40 sm:text-sm md:text-base px-2 py-1 mb-2 hover:bg-gray-100 text-gray-700   border border-gray-100 rounded shadow";

  return (
    <motion.div
      id="contact"
      animate={controls}
      ref={ref}
      variants={emailCaptureVariants}
      className="flex w-auto  items-end border-b-2 border-indigo-500  md:mb-20"
    >
      <input
        className="appearance-none bg-transparent border-none w-full text-base xs:text-lg text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        value={text}
        aria-label="Full name"
        readOnly
      />
      <CopyToClipboard text={text} onCopy={onCopyText}>
        <div className="flex">
          <SiteButton
            onClick={handleEmailClick}
            text="Copy Email"
            classes={emailButtonClasses}
          >
            <CopyIcon classes={iconClasses} />
          </SiteButton>
          <span
            className={`ml-3 mt-1 text-gray-700 ${
              isCopied ? "inline-block" : "hidden"
            }`}
          >
            Copied!
          </span>
        </div>
      </CopyToClipboard>
    </motion.div>
  );
}
