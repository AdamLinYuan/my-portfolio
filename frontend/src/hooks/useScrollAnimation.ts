import { useEffect, useState } from 'react';

interface ScrollAnimationProps {
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
}

export const useScrollAnimation = (
  ref: React.RefObject<HTMLElement>,
  {
    threshold = 0.1,
    direction = 'up',
    distance = 50,
    duration = 0.7,
    delay = 0
  }: ScrollAnimationProps = {}
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // This makes elements re-animate when scrolling back up
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  // Map direction to transform properties
  const directionMap: Record<string, { x?: number; y?: number }> = {
    up: { y: isVisible ? 0 : distance },
    down: { y: isVisible ? 0 : -distance },
    left: { x: isVisible ? 0 : distance },
    right: { x: isVisible ? 0 : -distance }
  };

  const transform = directionMap[direction];

  return {
    style: {
      opacity: isVisible ? 1 : 0,
      transform: `translate(${transform.x || 0}px, ${transform.y || 0}px)`,
      transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
    },
    isVisible
  };
};