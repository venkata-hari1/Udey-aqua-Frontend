import { useState, useEffect } from 'react';

const SunFishAnimation = ({ Fish, Zindex, Count }: { Fish: string; Zindex: number; Count: number }) => {
  const [fishes, setFishes] = useState<any[]>([]);

  useEffect(() => {
    const fishCount = Count;
    const centerY = window.innerHeight / 2;
    const spacing = 400;

    const initialFishes = Array.from({ length: fishCount }, (_, i) => ({
      id: i,
      x: -20 - i * spacing,
       y: centerY - 80 + i * 10,
      baseY: Count === 4 ? centerY - 450 : centerY - 400,
      speed: 3,
      direction: 1, // 1 = right, -1 = left
      targetDirection: 1, // Target direction for smooth transitions
      swimOffset: Math.random() * Math.PI * 2,
      isTurning: false,
      turnProgress: 0, // 0 to 1 for turn animation
    }));

    setFishes(initialFishes);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.016;

      setFishes(prevFishes =>
        prevFishes.map(fish => {
          let newX = fish.x + fish.speed * fish.direction;
          let newDirection = fish.direction;
          let newTargetDirection = fish.targetDirection;
          let isTurning = fish.isTurning;
          let turnProgress = fish.turnProgress;

          // Check if fish needs to turn around
          if (newDirection === 1 && newX > window.innerWidth - 100) {
            newTargetDirection = -1;
            isTurning = true;
          } else if (newDirection === -1 && newX < -20) { // <- changed from -100 to -20
            newTargetDirection = 1;
            isTurning = true;
          }

          // Handle turning animation
          if (isTurning) {
            turnProgress += 0.1; // Adjust this value to control turn speed
            
            if (turnProgress >= 1) {
              // Turn completed
              newDirection = newTargetDirection;
              isTurning = false;
              turnProgress = 0;
            }
          }

          // Gentle up/down motion
          const swimMotion = Math.sin(time * 2 + fish.swimOffset) * 15;
          const newY = fish.baseY + swimMotion;

          return { 
            ...fish, 
            x: newX, 
            y: newY, 
            direction: newDirection,
            targetDirection: newTargetDirection,
            isTurning,
            turnProgress
          };
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [Count]);

  return (
    <div style={{ position: 'absolute', width: '100%', zIndex: Zindex }}>
      {fishes.map(fish => (
        <img
          key={fish.id}
          src={Fish}
          alt="fish"
          style={{
            position: 'absolute',
            left: `${fish.x}px`,
            top: `${fish.y}px`,
            width: Count===1?'fit-content':'140px',
            height: 'auto',
            transform:`scaleX(${Count === 3 || Count === 4 ? -fish.direction : fish.direction})`,
            transition: fish.isTurning ? 'transform 0.6s ease-in-out' : 'none',
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
};

export default SunFishAnimation;