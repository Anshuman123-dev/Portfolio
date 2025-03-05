import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content", delay = 0.25 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  const isBlockElement = React.Children.toArray(children).some(
    child =>
      React.isValidElement(child) &&
      ["div", "p", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "li"].includes(
        child.type
      )
  );

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: isBlockElement ? "block" : "inline-block",
        width,
        overflow: "hidden",
      }}
    >
      {/* Main content (text/children) */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: delay + 0.5, // Starts after overlay completes
          ease: "easeOut",
        }}
        style={{ display: "inherit" }}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                style: { ...child.props.style, position: "relative" },
              })
            : child
        )}
      </motion.div>

      {/* Sliding overlay */}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          delay: delay, // Starts at delay
          ease: "easeIn",
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#0d727b",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;