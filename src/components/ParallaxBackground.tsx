import React, { useEffect, useState, useRef } from 'react';

// Vertical line falling from top to bottom
const VerticalLine = ({ 
  position = 0, 
  duration = 5,
  opacity = 0.5,
  height = 30,
  delay = 0,
  isVisible = true
}: { 
  position?: number;
  duration?: number;
  opacity?: number;
  height?: number;
  delay?: number;
  isVisible?: boolean;
}) => {
  return (
    <div
      className="absolute w-[2px] top-0"
      style={{
        left: `${position}%`,
        height: `${height}vh`,
        opacity: isVisible ? opacity : 0,
        background: `linear-gradient(to bottom, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, ${opacity + 0.2}))`,
        animation: `verticalFall ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) infinite`,
        animationDelay: `${delay}s`,
        transition: 'opacity 0.8s ease-in-out'
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
  delay = 0,
  isVisible = true
}: { 
  position?: number;
  duration?: number;
  opacity?: number;
  width?: number;
  delay?: number;
  isVisible?: boolean;
}) => {
  return (
    <div
      className="absolute h-[2px] right-0"
      style={{
        top: `${position}%`,
        width: `${width}vw`,
        opacity: isVisible ? opacity : 0,
        background: `linear-gradient(to left, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, ${opacity + 0.2}))`,
        animation: `horizontalMove ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) infinite`,
        animationDelay: `${delay}s`,
        transition: 'opacity 0.8s ease-in-out'
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
        transform: 'scale(0.95)',
        opacity: 0.7
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
          transform: `translateY(-50%) translateX(-120%) rotate(${angle}deg)`,
          animationName: 'accentMove',
          animationDuration: `${duration}s`,
          animationTimingFunction: 'cubic-bezier(0.37, 0, 0.63, 1)',
          animationIterationCount: 'infinite',
          '--angle': `${angle}deg`
        } as React.CSSProperties}
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
  const [lines, setLines] = useState<{
    vertical: Array<{
      id: string;
      position: number;
      duration: number;
      opacity: number;
      height: number;
      delay: number;
      isVisible: boolean;
    }>;
    horizontal: Array<{
      id: string;
      position: number;
      duration: number;
      opacity: number;
      width: number;
      delay: number;
      isVisible: boolean;
    }>;
  }>({
    vertical: [],
    horizontal: []
  });
  
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
  
  // Initialize all lines at the beginning
  useEffect(() => {
    const maxVertical = Math.ceil(maxVisibleLines / 2);
    const maxHorizontal = Math.floor(maxVisibleLines / 2);
    
    // Create all potential lines (both visible and invisible)
    const allVerticalLines = columns.map((position, index) => ({
      id: `v-${index}`,
      position,
      duration: 12 + (Math.random() * 8), // Between 12s and 20s
      opacity: 0.3 + (Math.random() * 0.2), // Between 0.5 and 0.7
      height: 15 + (Math.random() * 20), // Between 25vh and 45vh
      delay: index * 0.5, // Staggered start times
      isVisible: index < maxVertical // Only the first maxVertical are initially visible
    }));
    
    const allHorizontalLines = rows.map((position, index) => ({
      id: `h-${index}`,
      position,
      duration: 12 + (Math.random() * 8), // Between 12s and 20s
      opacity: 0.3 + (Math.random() * 0.2), // Between 0.5 and 0.7
      width: 15 + (Math.random() * 20), // Between 25vw and 45vw
      delay: index * 0.5, // Staggered start times
      isVisible: index < maxHorizontal // Only the first maxHorizontal are initially visible
    }));
    
    setLines({
      vertical: allVerticalLines,
      horizontal: allHorizontalLines
    });
  }, [columns.length, rows.length, maxVisibleLines, columns, rows]);
  
  // Cycle through line visibility
  useEffect(() => {
    if (lines.vertical.length === 0 || lines.horizontal.length === 0) return;
    
    const interval = setInterval(() => {
      // Cycle vertical lines
      setLines(prevLines => {
        const newLines = { ...prevLines };
        const visibleCount = newLines.vertical.filter(l => l.isVisible).length;
        const maxVertical = Math.ceil(maxVisibleLines / 2);
        
        if (visibleCount >= maxVertical) {
          // Hide a random visible line
          const visibleIndices = newLines.vertical
            .map((line, index) => line.isVisible ? index : -1)
            .filter(index => index !== -1);
            
          if (visibleIndices.length > 0) {
            const randomIndex = visibleIndices[Math.floor(Math.random() * visibleIndices.length)];
            newLines.vertical[randomIndex] = {
              ...newLines.vertical[randomIndex],
              isVisible: false
            };
          }
        }
        
        // Show a random hidden line after a small delay
        setTimeout(() => {
          setLines(prevLines => {
            const newLines = { ...prevLines };
            const visibleCount = newLines.vertical.filter(l => l.isVisible).length;
            const maxVertical = Math.ceil(maxVisibleLines / 2);
            
            if (visibleCount < maxVertical) {
              // Show a random hidden line
              const hiddenIndices = newLines.vertical
                .map((line, index) => !line.isVisible ? index : -1)
                .filter(index => index !== -1);
                
              if (hiddenIndices.length > 0) {
                const randomIndex = hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)];
                newLines.vertical[randomIndex] = {
                  ...newLines.vertical[randomIndex],
                  isVisible: true,
                  duration: 12 + (Math.random() * 8), // Refresh animation duration
                  delay: 0.2 // Small delay for smoother appearance
                };
              }
            }
            
            return newLines;
          });
        }, 800); // Delay showing new lines by 800ms for smoother transition
        
        return newLines;
      });
      
      // Cycle horizontal lines
      setLines(prevLines => {
        const newLines = { ...prevLines };
        const visibleCount = newLines.horizontal.filter(l => l.isVisible).length;
        const maxHorizontal = Math.floor(maxVisibleLines / 2);
        
        if (visibleCount >= maxHorizontal) {
          // Hide a random visible line
          const visibleIndices = newLines.horizontal
            .map((line, index) => line.isVisible ? index : -1)
            .filter(index => index !== -1);
            
          if (visibleIndices.length > 0) {
            const randomIndex = visibleIndices[Math.floor(Math.random() * visibleIndices.length)];
            newLines.horizontal[randomIndex] = {
              ...newLines.horizontal[randomIndex],
              isVisible: false
            };
          }
        }
        
        // Show a random hidden line after a small delay
        setTimeout(() => {
          setLines(prevLines => {
            const newLines = { ...prevLines };
            const visibleCount = newLines.horizontal.filter(l => l.isVisible).length;
            const maxHorizontal = Math.floor(maxVisibleLines / 2);
            
            if (visibleCount < maxHorizontal) {
              // Show a random hidden line
              const hiddenIndices = newLines.horizontal
                .map((line, index) => !line.isVisible ? index : -1)
                .filter(index => index !== -1);
                
              if (hiddenIndices.length > 0) {
                const randomIndex = hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)];
                newLines.horizontal[randomIndex] = {
                  ...newLines.horizontal[randomIndex],
                  isVisible: true,
                  duration: 12 + (Math.random() * 8), // Refresh animation duration
                  delay: 0.2 // Small delay for smoother appearance
                };
              }
            }
            
            return newLines;
          });
        }, 800); // Delay showing new lines by 800ms for smoother transition
        
        return newLines;
      });
    }, 5000); // Cycle every 5 seconds (increased from 4s for smoother perception)
    
    return () => clearInterval(interval);
  }, [lines.vertical.length, lines.horizontal.length, maxVisibleLines]);
  
  return (
    <>
      {/* Horizontal lines moving from right to left */}
      {lines.horizontal.map(line => (
        <HorizontalLine 
          key={line.id} 
          position={line.position} 
          duration={line.duration}
          opacity={line.opacity}
          width={line.width}
          delay={line.delay}
          isVisible={line.isVisible}
        />
      ))}
      
      {/* Vertical lines falling from top to bottom */}
      {lines.vertical.map(line => (
        <VerticalLine 
          key={line.id} 
          position={line.position} 
          duration={line.duration}
          opacity={line.opacity}
          height={line.height}
          delay={line.delay}
          isVisible={line.isVisible}
        />
      ))}
    </>
  );
};

const ParallaxBackground: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Setup resize listener
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Show the background with a slight delay for smoother initial load
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Generate random elements with stable IDs to prevent flicker on re-render
  const verticalLines = useRef(Array.from({ length: 4 }, (_, i) => ({
    id: `vline-${i}`,
    position: 15 + Math.random() * 70, // Positioned between 15-85% of width
    duration: 16 + Math.random() * 8, // 16-24s duration for smoother movement
    delay: i * 3, // Staggered by 3s each
    opacity: 0.2 + Math.random() * 0.2, // 0.2-0.4 opacity
    height: 20 + Math.random() * 25, // 20-45vh height
    startVisible: i < 3 // Start with 3 visible
  }))).current;
  
  const horizontalLines = useRef(Array.from({ length: 4 }, (_, i) => ({
    id: `hline-${i}`,
    position: 15 + Math.random() * 70, // Positioned between 15-85% of height
    duration: 16 + Math.random() * 8, // 16-24s duration
    delay: i * 3 + 1.5, // Staggered + offset from vertical
    opacity: 0.2 + Math.random() * 0.2, // 0.2-0.4 opacity
    width: 20 + Math.random() * 25, // 20-45vw width
    startVisible: i < 3 // Start with 3 visible
  }))).current;
  
  const accentLines = useRef([
    { 
      id: 'accent-1', 
      angle: 25, 
      opacity: 0.15, 
      duration: 40,
      delay: 0
    },
    { 
      id: 'accent-2', 
      angle: -15, 
      opacity: 0.1, 
      duration: 48,
      delay: 20
    }
  ]).current;
  
  const backgroundCircles = useRef([
    { id: 'circle-1', position: { x: 20, y: 30 }, size: 35, color: 'rgba(239, 68, 68, 0.06)', duration: 15, delay: 0 },
    { id: 'circle-2', position: { x: 70, y: 20 }, size: 30, color: 'rgba(239, 68, 68, 0.05)', duration: 18, delay: 6 },
    { id: 'circle-3', position: { x: 30, y: 75 }, size: 40, color: 'rgba(239, 68, 68, 0.06)', duration: 20, delay: 3 },
    { id: 'circle-4', position: { x: 85, y: 60 }, size: 25, color: 'rgba(239, 68, 68, 0.04)', duration: 16, delay: 9 }
  ]).current;

  return (
    <div 
      className={`fixed inset-0 w-full h-full -z-10 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/30 to-white" />
      
      {/* Background circles */}
      {backgroundCircles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full"
          style={{
            left: `${circle.position.x}%`,
            top: `${circle.position.y}%`,
            width: `${circle.size}vmin`,
            height: `${circle.size}vmin`,
            background: `radial-gradient(circle, ${circle.color} 0%, transparent 70%)`,
            animation: `pulsateAndFloat ${circle.duration}s ease-in-out infinite`,
            animationDelay: `${circle.delay}s`,
            willChange: 'transform, opacity'
          }}
        />
      ))}
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
      </div>
      
      {/* Accent diagonal lines */}
      {accentLines.map((line) => (
        <div
          key={line.id}
          className="absolute inset-0 overflow-hidden"
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              width: '150%',
              height: '1px',
              background: `linear-gradient(to right, transparent, rgba(239, 68, 68, ${line.opacity}) 30%, rgba(239, 68, 68, ${line.opacity}) 70%, transparent)`,
              transform: `translateY(-50%) rotate(${line.angle}deg) translateX(-100%)`,
              animation: `accentMove ${line.duration}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: `${line.delay}s`,
              willChange: 'transform, opacity'
            }}
          />
        </div>
      ))}
      
      {/* Vertical lines */}
      {verticalLines.map((line) => (
        <div
          key={line.id}
          className="absolute w-[1.5px] top-0"
          style={{
            left: `${line.position}%`,
            height: `${line.height}vh`,
            opacity: line.startVisible ? line.opacity : 0,
            background: `linear-gradient(to bottom, rgba(239, 68, 68, 0.03), rgba(239, 68, 68, ${line.opacity + 0.1}))`,
            animation: `verticalFall ${line.duration}s cubic-bezier(0.22, 1, 0.36, 1) infinite`,
            animationDelay: `${line.delay}s`,
            willChange: 'transform',
            boxShadow: '0 0 8px rgba(239, 68, 68, 0.1)'
          }}
        >
          {/* Dot at the bottom */}
          <div 
            className="absolute rounded-full"
            style={{ 
              width: `${Math.max(line.height / 10, 2)}px`, 
              height: `${Math.max(line.height / 10, 2)}px`,
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.9) 0%, rgba(239, 68, 68, 0.6) 100%)',
              boxShadow: '0 0 6px rgba(239, 68, 68, 0.7)',
              left: '50%',
              bottom: '0',
              transform: 'translateX(-50%)',
              animation: `pulseDot 3s ease-in-out infinite`
            }}
          />
          
          {/* Trailing effect */}
          <div 
            className="absolute w-full"
            style={{
              height: `${Math.min(line.height * 0.15, 8)}vh`,
              bottom: '0',
              background: `linear-gradient(to top, rgba(239, 68, 68, ${line.opacity * 0.8}), transparent)`,
              opacity: 0.6
            }}
          />
        </div>
      ))}
      
      {/* Horizontal lines */}
      {horizontalLines.map((line) => (
        <div
          key={line.id}
          className="absolute h-[1.5px] right-0"
          style={{
            top: `${line.position}%`,
            width: `${line.width}vw`,
            opacity: line.startVisible ? line.opacity : 0,
            background: `linear-gradient(to left, rgba(239, 68, 68, 0.03), rgba(239, 68, 68, ${line.opacity + 0.1}))`,
            animation: `horizontalMove ${line.duration}s cubic-bezier(0.22, 1, 0.36, 1) infinite`,
            animationDelay: `${line.delay}s`,
            willChange: 'transform',
            boxShadow: '0 0 8px rgba(239, 68, 68, 0.1)'
          }}
        >
          {/* Dot at the left end */}
          <div 
            className="absolute rounded-full"
            style={{ 
              width: `${Math.max(line.width / 10, 2)}px`, 
              height: `${Math.max(line.width / 10, 2)}px`,
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.9) 0%, rgba(239, 68, 68, 0.6) 100%)',
              boxShadow: '0 0 6px rgba(239, 68, 68, 0.7)',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              animation: `pulseDot 3s ease-in-out infinite`
            }}
          />
          
          {/* Trailing effect */}
          <div 
            className="absolute h-full"
            style={{
              width: `${Math.min(line.width * 0.15, 8)}vw`,
              left: '0',
              background: `linear-gradient(to right, rgba(239, 68, 68, ${line.opacity * 0.8}), transparent)`,
              opacity: 0.6
            }}
          />
        </div>
      ))}
      
      {/* Light edge effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top light bar */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        
        {/* Bottom light bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-red-500/5 to-transparent" />
      </div>
      
      {/* Define animation keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes verticalFall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        
        @keyframes horizontalMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100vw);
          }
        }
        
        @keyframes pulseDot {
          0%, 100% {
            opacity: 0.7;
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 5px rgba(239, 68, 68, 0.6);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.5);
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.9);
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
            transform: translateY(-50%) rotate(var(--angle, 25deg)) translateX(-100%);
            opacity: 0.1;
          }
          30% {
            opacity: 0.4;
          }
          70% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-50%) rotate(var(--angle, 25deg)) translateX(100%);
            opacity: 0.1;
          }
        }
      `}} />
    </div>
  );
};

export default ParallaxBackground; 