import { useRef, useEffect } from 'react';

const HoverCard = ({ children, className, ...props }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt based on mouse position
      const tiltX = (centerY - y) / 20;
      const tiltY = (x - centerX) / 20;

      // Calculate gradient position as percentage
      const posX = (x / rect.width) * 100;
      const posY = (y / rect.height) * 100;

      // Apply 3D tilt transformation
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      // Update CSS variables for gradient position
      card.style.setProperty('--x', `${posX}%`);
      card.style.setProperty('--y', `${posY}%`);

      // Activate gradient visibility
      card.classList.add('hovered');

      // Determine closest border
      const distanceToTop = y;
      const distanceToBottom = rect.height - y;
      const distanceToLeft = x;
      const distanceToRight = rect.width - x;
      const minDistance = Math.min(distanceToTop, distanceToBottom, distanceToLeft, distanceToRight);

      // Remove previous border highlights
      card.classList.remove('highlight-top', 'highlight-bottom', 'highlight-left', 'highlight-right');

      // Highlight the closest border
      if (minDistance === distanceToTop) {
        card.classList.add('highlight-top');
      } else if (minDistance === distanceToBottom) {
        card.classList.add('highlight-bottom');
      } else if (minDistance === distanceToLeft) {
        card.classList.add('highlight-left');
      } else if (minDistance === distanceToRight) {
        card.classList.add('highlight-right');
      }
    };

    const handleMouseLeave = () => {
      // Reset transformations and styles
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      card.style.setProperty('--x', '50%');
      card.style.setProperty('--y', '50%');
      card.classList.remove('hovered', 'highlight-top', 'highlight-bottom', 'highlight-left', 'highlight-right');
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners on unmount
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={`hover-effect ${className}`} {...props}>
      {children}
    </div>
  );
};

export default HoverCard;