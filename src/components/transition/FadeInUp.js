import { useEffect, useRef, useState } from "react";
import styles from "@/styles/FadeInUp/FadeInUp.module.css";

const FadeInUp = ({ children, delay = 4 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (observerRef.current && currentRef) {
        observerRef.current.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${styles.fadeInUp} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
