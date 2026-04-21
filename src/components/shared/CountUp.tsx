import React, { useEffect, useRef, useState } from 'react';

/** Animates a number from 0 to `end` when it scrolls into view. */
const CountUp = ({
  end,
  suffix = '',
  prefix = '',
  className,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

export default CountUp;
