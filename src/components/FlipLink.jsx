import { motion } from 'framer-motion';
import React from 'react';

// Animation constants (adjust as needed)
const DURATION = 0.5;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  // Helper function to get total text length
  const getTextLength = (children) => {
    let length = 0;
    React.Children.forEach(children, (child) => {
      if (typeof child === 'string') {
        length += child.length;
      } else if (React.isValidElement(child)) {
        length += getTextLength(child.props.children);
      }
    });
    return length;
  };

  // Helper function to render animated children
  const renderAnimated = (children, variants, startIndex = 0) => {
    let currentIndex = startIndex;
    return React.Children.map(children, (child) => {
      if (typeof child === 'string') {
        const chars = child.split('');
        const animatedChars = chars.map((l, i) => (
          <motion.span
            variants={variants}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * (currentIndex + i),
            }}
            className="inline-block"
            key={`${currentIndex + i}`}
          >
            {l}
          </motion.span>
        ));
        currentIndex += chars.length;
        return animatedChars;
      } else if (React.isValidElement(child)) {
        const { children: childChildren, ...props } = child.props;
        const animatedChildChildren = renderAnimated(childChildren, variants, currentIndex);
        currentIndex += getTextLength(childChildren);
        return React.cloneElement(child, props, animatedChildChildren);
      } else {
        return child;
      }
    });
  };

  // Define animation variants
  const initialVariants = {
    initial: { y: 0 },
    hovered: { y: '-100%' },
  };

  const hoverVariants = {
    initial: { y: '100%' },
    hovered: { y: 0 },
  };

  // Render animated content
  const initialAnimated = renderAnimated(children, initialVariants, 0);
  const hoverAnimated = renderAnimated(children, hoverVariants, 0);

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.75 }}
    >
      <div>{initialAnimated}</div>
      <div className="absolute inset-0">{hoverAnimated}</div>
    </motion.a>
  );
};

export default FlipLink;