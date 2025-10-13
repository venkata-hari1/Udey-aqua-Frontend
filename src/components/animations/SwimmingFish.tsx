import React from 'react';

interface SwimmingFishProps {
  Position?: string;
  Count: number;
  Height?: number | string;

}

const SwimmingFish: React.FC<SwimmingFishProps> = ({ Position = 'absolute', Count, Height = '100%' }) => {
  const colors = ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e'];
  
  const fishes = Array.from({ length: Count }, (_, i) => {
    const size = 40 + Math.random() * 30;
    const duration = 8 + Math.random() * 12;
    const delay = Math.random() * -20;
    const yPosition = (Height === '100%' || typeof Height === 'string') 
      ? (i / Count) * 95 + 2.5 
      : Math.random() * 95; // Random distribution for fixed heights
    const swimDirection = Math.random() > 0.5 ? 'swim-right' : 'swim-left';
    const waveDelay = Math.random() * -4;
    
    return {
      id: i,
      size,
      duration,
      delay,
      yPosition,
      color: colors[i % colors.length],
      swimDirection,
      waveDelay,
      bodyDuration: 0.6 + Math.random() * 0.4
    };
  });

  return (
    <>
      <style>{`
        @keyframes swim-right {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }

        @keyframes swim-left {
          0% {
            transform: translateX(calc(100vw + 100px)) scaleX(-1);
          }
          100% {
            transform: translateX(-100px) scaleX(-1);
          }
        }

        @keyframes tail-swing {
          0%, 100% {
            transform: rotate(-20deg) scaleY(1);
          }
          25% {
            transform: rotate(-5deg) scaleY(1.1);
          }
          50% {
            transform: rotate(20deg) scaleY(1);
          }
          75% {
            transform: rotate(5deg) scaleY(1.1);
          }
        }

        @keyframes body-wave {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fin-flap {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }

        .fish-container {
          position: absolute;
          pointer-events: none;
          will-change: transform;
        }

        .fish-body {
          position: relative;
          display: inline-block;
          will-change: transform;
        }

        .fish-tail {
          position: absolute;
          left: -20px;
          top: 20%;
          transform-origin: right center;
          will-change: transform;
        }

        .fish-fin-top {
          position: absolute;
          left: 40%;
          top: -8px;
          transform-origin: bottom center;
          will-change: transform;
        }

        .fish-fin-side {
          position: absolute;
          left: 20%;
          top: 55%;
          transform-origin: left center;
          will-change: transform;
        }

        .fish-eye {
          position: absolute;
          right: 20%;
          top: 35%;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fish-pupil {
          background: black;
          border-radius: 50%;
        }
      `}</style>

      <div style={{ position: Position as any, width: '100%', height: Height, overflow: 'hidden', top: 0, left: 0, right: 0, bottom: 0 }}>
        {fishes.map((fish) => (
          <div
            key={fish.id}
            className="fish-container"
            style={{
              top: `${fish.yPosition}%`,
              animation: `${fish.swimDirection} ${fish.duration}s linear ${fish.delay}s infinite`,
            }}
          >
            <div
              className="fish-body"
              style={{
                width: fish.size,
                height: fish.size * 0.6,
                animation: `body-wave ${fish.bodyDuration}s ease-in-out ${fish.waveDelay}s infinite`,
              }}
            >
              {/* Body */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: fish.color,
                  borderRadius: '50%',
                  position: 'relative',
                }}
              >
                {/* Tail */}
                <div
                  className="fish-tail"
                  style={{
                    animation: `tail-swing ${fish.bodyDuration * 0.8}s ease-in-out ${fish.waveDelay}s infinite`,
                  }}
                >
                  <svg
                    width={fish.size * 0.6}
                    height={fish.size * 0.8}
                    viewBox="0 0 60 80"
                    style={{ 
                      display: 'block',
                      marginTop: '-50%',
                    }}
                  >
                    <path
                      d="M 60 40 Q 30 10, 0 0 Q 20 20, 20 40 Q 20 60, 0 80 Q 30 70, 60 40 Z"
                      fill={fish.color}
                      opacity="0.85"
                    />
                  </svg>
                </div>

                {/* Top Fin */}
                <div
                  className="fish-fin-top"
                  style={{
                    animation: `fin-flap ${fish.bodyDuration * 0.8}s ease-in-out ${fish.waveDelay}s infinite`,
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: `${fish.size * 0.1}px solid transparent`,
                      borderRight: `${fish.size * 0.1}px solid transparent`,
                      borderBottom: `${fish.size * 0.3}px solid ${fish.color}`,
                      opacity: 0.9,
                    }}
                  />
                </div>

                {/* Side Fin */}
                <div
                  className="fish-fin-side"
                  style={{
                    animation: `fin-flap ${fish.bodyDuration * 1.2}s ease-in-out ${fish.waveDelay + 0.2}s infinite`,
                  }}
                >
                  <div
                    style={{
                      width: fish.size * 0.25,
                      height: fish.size * 0.15,
                      background: fish.color,
                      borderRadius: '50%',
                      opacity: 0.7,
                    }}
                  />
                </div>

                {/* Eye */}
                <div
                  className="fish-eye"
                  style={{
                    width: fish.size * 0.15,
                    height: fish.size * 0.15,
                  }}
                >
                  <div
                    className="fish-pupil"
                    style={{
                      width: fish.size * 0.08,
                      height: fish.size * 0.08,
                    }}
                  />
                </div>

                {/* Mouth */}
                <div
                  style={{
                    position: 'absolute',
                    right: '10%',
                    top: '55%',
                    width: fish.size * 0.15,
                    height: fish.size * 0.08,
                    borderBottom: `2px solid ${fish.color}`,
                    borderRadius: '0 0 50% 50%',
                    opacity: 0.8,
                  }}
                />

                {/* Scales */}
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      left: `${30 + idx * 20}%`,
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: fish.size * 0.2,
                      height: fish.size * 0.2,
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SwimmingFish;