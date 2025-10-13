import React from 'react';

interface BubbleCanvasProps {
  count?: number;
}

const BubbleCanvas: React.FC<BubbleCanvasProps> = ({ count = 15 }) => {
  const bubbles = Array.from({ length: count }, (_, i) => {
    const size = 20 + Math.random() * 40; 
    const mobileSize = 10 + Math.random() * 20; 
    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * -15;
    const wobbleAmount = 20 + Math.random() * 40;
    const wobbleDuration = 2 + Math.random() * 2;
    const opacity = 0.3 + Math.random() * 0.4;
    
    return {
      id: i,
      size,
      mobileSize,
      left,
      duration,
      delay,
      wobbleAmount,
      wobbleDuration,
      opacity
    };
  });

  return (
    <>
      <style>{`
        @keyframes rise {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100vh);
          }
        }

        @keyframes wobble {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(var(--wobble-amount));
          }
          75% {
            transform: translateX(calc(var(--wobble-amount) * -1));
          }
        }

        .bubble-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .bubble {
          position: absolute;
          bottom: -100px;
          border-radius: 50%;
          pointer-events: none;
          will-change: transform;
        }

        .bubble-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.8),
            rgba(173, 216, 230, 0.4) 50%,
            rgba(135, 206, 250, 0.2)
          );
          border: 2px solid rgba(255, 255, 255, 0.6);
          position: relative;
          box-shadow: 
            inset 0 0 20px rgba(255, 255, 255, 0.3),
            0 0 20px rgba(135, 206, 250, 0.2);
        }

        .bubble-highlight {
          position: absolute;
          top: 20%;
          left: 20%;
          width: 30%;
          height: 30%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0) 70%
          );
          border-radius: 50%;
        }

        .bubble-shine {
          position: absolute;
          top: 10%;
          right: 15%;
          width: 20%;
          height: 20%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0) 60%
          );
          border-radius: 50%;
        }

        /* Mobile screens */
        @media (max-width: 768px) {
          .bubble {
            width: var(--mobile-size) !important;
            height: var(--mobile-size) !important;
          }

          .bubble-inner {
            border-width: 1px;
          }
        }

        /* Tablet screens */
        @media (min-width: 769px) and (max-width: 1024px) {
          .bubble {
            width: calc(var(--desktop-size) * 0.7) !important;
            height: calc(var(--desktop-size) * 0.7) !important;
          }
        }
      `}</style>

      <div className="bubble-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              left: `${bubble.left}%`,
              width: bubble.size,
              height: bubble.size,
              opacity: bubble.opacity,
              animation: `rise ${bubble.duration}s linear ${bubble.delay}s infinite`,
              ['--wobble-amount' as any]: `${bubble.wobbleAmount}px`,
              ['--mobile-size' as any]: `${bubble.mobileSize}px`,
              ['--desktop-size' as any]: `${bubble.size}px`,
            }}
          >
            <div
              className="bubble-inner"
              style={{
                animation: `wobble ${bubble.wobbleDuration}s ease-in-out ${bubble.delay}s infinite`,
              }}
            >
              <div className="bubble-highlight" />
              <div className="bubble-shine" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BubbleCanvas;