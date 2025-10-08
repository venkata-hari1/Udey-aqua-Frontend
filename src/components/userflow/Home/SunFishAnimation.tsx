import { useState, useEffect } from 'react';
import sunfish from '../../../assets/home/sunfish.gif';

const FishAnimation = () => {
  const [fishes, setFishes] = useState<any>([]);

  useEffect(() => {
    const fishCount = 3;
    const paddingTop = 10;
    const paddingLeft = 50;
    const paddingRight = 50;
    
    const initialFishes = Array.from({ length: fishCount }, (_, i) => ({
      id: i,
      x: paddingLeft + Math.random() * (window.innerWidth - paddingLeft - paddingRight),
      y: paddingTop + i * (window.innerHeight - 2 * paddingTop) / fishCount + Math.random() * 90,
      baseY: paddingTop + i * (window.innerHeight - 2 * paddingTop) / fishCount,
      speed: 4,
      direction: Math.random() > 0.5 ? 1 : -1,
      swimOffset: Math.random() * Math.PI * 2,
    }));
    
    setFishes(initialFishes);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.016;
      
      setFishes((prevFishes: string[]) => 
        prevFishes.map((fish:{speed:number;swimOffset:number;baseY:number;direction:number;x:number;y:number} | any) => {
          let newX = fish.x + fish.speed * fish.direction;
          let newDirection = fish.direction;
          if (newDirection === 1 && newX > window.innerWidth + 180) {
            newX = -180;
          } else if (newDirection === -1 && newX < -180) {
            newX = window.innerWidth + 180;
          }
          const swimMotion = Math.sin(time * 2 + fish.swimOffset) * 15;
          const newY = fish.baseY + swimMotion;

          return { ...fish, x: newX, y: newY, direction: newDirection };
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div style={{ position: 'relative'}}>
      {fishes.map((fish:{id:number,direction:number;x:number;y:number}) => (
        <img
          key={fish.id}
          src={sunfish}
          alt="fish"
          style={{
            position: 'absolute',
            left: `${fish.x}px`,
            top: `${fish.y}px`,
            width: 'fit-content',
            transform: `scaleX(${fish.direction})`,
            transition: 'transform 0.5s ease',
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
};

export default FishAnimation;