import React, { useEffect, useState, useRef } from 'react';

// Vertical line falling from top to bottom
const VerticalLine = ({ 
  position = 0, 
  duration = 5,
  opacity = 0.5,
  height = 30,
  delay = 0
}: { 
  position?: number;
  duration?: number;
  opacity?: number;
  height?: number;
  delay?: number;
}) => {
  return (
    <div
      className="absolute w-[2px] top-0"
      style={{
        left: `${position}%`,
        height: `${height}vh`,
        opacity: opacity,
        background: `linear-gradient(to bottom, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, ${opacity + 0.2}))`,
        animation: `verticalFall ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {/* Dot at the bottom */}
      <div 
        className="absolute rounded-full bg-gradient-to-r from-red-500 to-red-600" 
        style={{ 
          width: `${Math.max(height / 8, 2.5)}px`, 
          height: `${Math.max(height / 8, 2.5)}px`,
          boxShadow: '0 0 8px rgba(239, 68, 68, 0.8)',
          left: '50%',
          bottom: '0',
          transform: 'translateX(-50%)',
          animation: `pulseDot 2s ease-in-out infinite`
        }}
      />
      
      {/* Trailing effect */}
      <div 
        className="absolute w-full"
        style={{
          height: `${Math.min(height * 0.3, 15)}vh`,
          bottom: '0',
          background: `linear-gradient(to top, rgba(239, 68, 68, ${opacity}), transparent)`,
          opacity: 0.6
        }}
      />
    </div>
  );
};

// Horizontal line moving from right to left
const HorizontalLine = ({ 
  position = 0, 
  duration = 5,
  opacity = 0.5,
  width = 30,
  delay = 0
}: { 
  position?: number;
  duration?: number;
  opacity?: number;
  width?: number;
  delay?: number;
}) => {
  return (
    <div
      className="absolute h-[2px] right-0"
      style={{
        top: `${position}%`,
        width: `${width}vw`,
        opacity: opacity,
        background: `linear-gradient(to left, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, ${opacity + 0.2}))`,
        animation: `horizontalMove ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {/* Dot at the left end */}
      <div 
        className="absolute rounded-full bg-gradient-to-r from-red-500 to-red-600" 
        style={{ 
          width: `${Math.max(width / 8, 2.5)}px`, 
          height: `${Math.max(width / 8, 2.5)}px`,
          boxShadow: '0 0 8px rgba(239, 68, 68, 0.8)',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          animation: `pulseDot 2s ease-in-out infinite`
        }}
      />
      
      {/* Trailing effect */}
      <div 
        className="absolute h-full"
        style={{
          width: `${Math.min(width * 0.3, 15)}vw`,
          left: '0',
          background: `linear-gradient(to right, rgba(239, 68, 68, ${opacity}), transparent)`,
          opacity: 0.6
        }}
      />
    </div>
  );
};

// Pulsating circle for additional visual interest
const PulsatingCircle = ({ 
  position,
  size = 15,
  color = 'rgba(239, 68, 68, 0.15)',
  duration = 10
}: { 
  position: { x: number, y: number };
  size?: number;
  color?: string;
  duration?: number;
}) => {
  return (
    <div
      className="absolute rounded-full"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}vmin`,
        height: `${size}vmin`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        animation: `pulsateAndFloat ${duration}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`
      }}
    />
  );
};

// Accent line that crosses the screen diagonally
const AccentLine = ({ 
  angle = 45,
  opacity = 0.3,
  duration = 20,
  thickness = 1
}: {
  angle?: number;
  opacity?: number;
  duration?: number;
  thickness?: number;
}) => {
  return (
    <div
      className="absolute"
      style={{
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          width: '150%',
          height: `${thickness}px`,
          background: `linear-gradient(to right, transparent, rgba(239, 68, 68, ${opacity}) 30%, rgba(239, 68, 68, ${opacity}) 70%, transparent)`,
          transform: `translateY(-50%) translateX(-25%) rotate(${angle}deg)`,
          animation: `accentMove ${duration}s cubic-bezier(0.37, 0, 0.63, 1) infinite`
        }}
      />
    </div>
  );
};

// Line manager to control the number of visible lines
const LineManager = ({ 
  maxVisibleLines = 5,
  gridColumns = 7,
  gridRows = 7
}: {
  maxVisibleLines?: number;
  gridColumns?: number;
  gridRows?: number;
}) => {
  const [activeVerticalLines, setActiveVerticalLines] = useState<number[]>([]);
  const [activeHorizontalLines, setActiveHorizontalLines] = useState<number[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Calculate grid size in pixels for 2.5rem
  const gridSize = 2.5 * 16; // 2.5rem * 16px
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate grid line positions
  const calculateGridPositions = () => {
    if (windowSize.width === 0) return { columns: [], rows: [] };
    
    const columns = Array.from({ length: gridColumns }, (_, i) => 
      Math.floor((i + 1) * (100 / (gridColumns + 1)))
    );
    
    const rows = Array.from({ length: gridRows }, (_, i) => 
      Math.floor((i + 1) * (100 / (gridRows + 1)))
    );
    
    return { columns, rows };
  };
  
  const { columns, rows } = calculateGridPositions();
  
  // Cycle through active lines
  useEffect(() => {
    // Split the max visible lines between vertical and horizontal
    const maxVertical = Math.ceil(maxVisibleLines / 2);
    const maxHorizontal = Math.floor(maxVisibleLines / 2);
    
    // Initial active lines
    setActiveVerticalLines(Array.from({ length: maxVertical }, () => 
      Math.floor(Math.random() * columns.length)
    ));
    
    setActiveHorizontalLines(Array.from({ length: maxHorizontal }, () => 
      Math.floor(Math.random() * rows.length)
    ));
    
    // Create interval to cycle through lines
    const interval = setInterval(() => {
      setActiveVerticalLines(prev => {
        // Remove one line and add another
        const newActive = [...prev];
        if (newActive.length > 0) {
          // Remove a random line
          const indexToRemove = Math.floor(Math.random() * newActive.length);
          newActive.splice(indexToRemove, 1);
        }
        
        // Add a new line that isn't already active
        const availableIndices = Array.from({ length: columns.length }, (_, i) => i)
          .filter(i => !newActive.includes(i));
          
        if (availableIndices.length > 0 && newActive.length < maxVertical) {
          const newIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
          newActive.push(newIndex);
        }
        
        return newActive;
      });
      
      setActiveHorizontalLines(prev => {
        // Remove one line and add another
        const newActive = [...prev];
        if (newActive.length > 0) {
          // Remove a random line
          const indexToRemove = Math.floor(Math.random() * newActive.length);
          newActive.splice(indexToRemove, 1);
        }
        
        // Add a new line that isn't already active
        const availableIndices = Array.from({ length: rows.length }, (_, i) => i)
          .filter(i => !newActive.includes(i));
          
        if (availableIndices.length > 0 && newActive.length < maxHorizontal) {
          const newIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
          newActive.push(newIndex);
        }
        
        return newActive;
      });
    }, 4000); // Cycle every 4 seconds
    
    return () => clearInterval(interval);
  }, [columns.length, rows.length, maxVisibleLines]);
  
  // Generate only active lines
  const verticalLines = activeVerticalLines.map((index) => ({
    id: `v-${index}`,
    position: columns[index],
    duration: 12 + (Math.random() * 8), // Between 12s and 20s
    opacity: 0.5 + (Math.random() * 0.2), // Between 0.5 and 0.7
    height: 25 + (Math.random() * 20), // Between 25vh and 45vh
    delay: index * 0.7, // Staggered start times
  }));
  
  const horizontalLines = activeHorizontalLines.map((index) => ({
    id: `h-${index}`,
    position: rows[index],
    duration: 12 + (Math.random() * 8), // Between 12s and 20s
    opacity: 0.5 + (Math.random() * 0.2), // Between 0.5 and 0.7
    width: 25 + (Math.random() * 20), // Between 25vw and 45vw
    delay: index * 0.7, // Staggered start times
  }));
  
  return (
    <>
      {/* Horizontal lines moving from right to left */}
      {horizontalLines.map(line => (
        <HorizontalLine 
          key={line.id} 
          position={line.position} 
          duration={line.duration}
          opacity={line.opacity}
          width={line.width}
          delay={line.delay}
        />
      ))}
      
      {/* Vertical lines falling from top to bottom */}
      {verticalLines.map(line => (
        <VerticalLine 
          key={line.id} 
          position={line.position} 
          duration={line.duration}
          opacity={line.opacity}
          height={line.height}
          delay={line.delay}
        />
      ))}
    </>
  );
};

const ParallaxBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create pulsating background circles
  const backgroundCircles = [
    { id: 'c-1', position: { x: 20, y: 30 }, size: 30, color: 'rgba(239, 68, 68, 0.08)', duration: 15 },
    { id: 'c-2', position: { x: 70, y: 20 }, size: 25, color: 'rgba(239, 68, 68, 0.07)', duration: 18 },
    { id: 'c-3', position: { x: 30, y: 75 }, size: 35, color: 'rgba(239, 68, 68, 0.08)', duration: 20 },
  ];
  
  // Create accent lines
  const accentLines = [
    { id: 'a-1', angle: 30, opacity: 0.2, duration: 25, thickness: 1 },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 w-full h-full -z-10 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/40 to-white" />
      
      {/* Background pulsating circles */}
      {backgroundCircles.map(circle => (
        <PulsatingCircle 
          key={circle.id}
          position={circle.position}
          size={circle.size}
          color={circle.color}
          duration={circle.duration}
        />
      ))}
      
      {/* Accent diagonal lines */}
      {accentLines.map(line => (
        <AccentLine 
          key={line.id}
          angle={line.angle}
          opacity={line.opacity}
          duration={line.duration}
          thickness={line.thickness}
        />
      ))}
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
      </div>

      {/* Line manager to control visible lines */}
      <LineManager maxVisibleLines={5} gridColumns={7} gridRows={7} />
      
      {/* Light edge effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top light bar */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        
        {/* Bottom light bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-500/10 to-transparent" />
      </div>
      
      {/* Define animation keyframes with style tag in head */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes verticalFall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes horizontalMove {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100vw);
            opacity: 0;
          }
        }
        
        @keyframes pulseDot {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 8px rgba(239, 68, 68, 0.8);
          }
          50% {
            transform: translateX(-50%) scale(1.3);
            box-shadow: 0 0 12px rgba(239, 68, 68, 1);
          }
        }
        
        @keyframes pulsateAndFloat {
          0% {
            transform: translateY(0) scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(0.95);
            opacity: 0.7;
          }
        }
        
        @keyframes accentMove {
          0% {
            transform: translateY(-50%) translateX(-120%) rotate(var(--angle));
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-50%) translateX(20%) rotate(var(--angle));
            opacity: 0;
          }
        }
      `}} />
    </div>
  );
};

export default ParallaxBackground; 