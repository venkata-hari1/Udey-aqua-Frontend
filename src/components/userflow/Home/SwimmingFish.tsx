import  { useEffect, useRef } from 'react';

interface Fish {
  x: number;
  y: number;
  speed: number;
  direction: number;
  size: number;
  tailSwing: number;
  color: string;
  yOffset: number;

}

const SwimmingFish = ({Position,Count,Height}:any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fishesRef = useRef<Fish[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 3000;
    canvas.height = Height;

    const handleResize = () => {
      canvas.width = window.innerWidth;
    };
    window.addEventListener('resize', handleResize);

    // Initialize fishes
    const FISH_COUNT = Count;
    const FISH_MIN_SPEED = 1;
    const FISH_MAX_SPEED = 10;
    const FISH_MIN_SIZE = 40;
    const FISH_MAX_SIZE = 70;
    
    // Initialize fishes with all blue colors
    const colors = ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e'];
    
    // Calculate vertical spacing with 5% margin
    const canvasHeight = canvas.height;
    const totalMargin = (FISH_COUNT - 1) * (canvasHeight * 0.05); // 5% margin between each fish
    const availableHeight = canvasHeight - totalMargin;
    const verticalSpacing = availableHeight / FISH_COUNT;
    
    for (let i = 0; i < FISH_COUNT; i++) {
      // Calculate y position with 5% margin between fishes
      const marginTop = i * (canvasHeight * 0.05);
      const baseYPosition = i * verticalSpacing;
      const y = baseYPosition + marginTop;
      
      fishesRef.current.push({
        x: Math.random() * canvas.width,
        y: y,
        speed: FISH_MIN_SPEED + Math.random() * (FISH_MAX_SPEED - FISH_MIN_SPEED),
        direction: Math.random() > 0.5 ? 1 : -1,
        size: FISH_MIN_SIZE + Math.random() * (FISH_MAX_SIZE - FISH_MIN_SIZE),
        tailSwing: Math.random() * Math.PI * 2,
        color: colors[i % colors.length],
        yOffset: Math.random() * Math.PI * 2
      });
    }

    const drawFish = (fish: Fish, tailAngle: number) => {
      ctx.save();
      ctx.translate(fish.x, fish.y);
      
      if (fish.direction === -1) {
        ctx.scale(-1, 1);
      }

      // Body - use solid colors instead of gradients with opacity suffixes
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, fish.size);
      gradient.addColorStop(0, fish.color);
      gradient.addColorStop(0.7, fish.color);
      gradient.addColorStop(1, fish.color);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, fish.size, fish.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tail with swing - use rgba for opacity
      ctx.save();
      ctx.translate(-fish.size, 0);
      ctx.rotate(tailAngle);
      ctx.fillStyle = fish.color;
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-fish.size * 0.5, -fish.size * 0.4);
      ctx.lineTo(-fish.size * 0.5, fish.size * 0.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;

      // Top fin
      ctx.fillStyle = fish.color;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.moveTo(0, -fish.size * 0.6);
      ctx.lineTo(fish.size * 0.15, -fish.size * 0.6 - fish.size * 0.3);
      ctx.lineTo(fish.size * 0.3, -fish.size * 0.6);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;

      // Side fin
      ctx.save();
      ctx.translate(-fish.size * 0.15, fish.size * 0.3);
      ctx.rotate(Math.sin(tailAngle * 3) * 0.2);
      ctx.fillStyle = fish.color;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.ellipse(0, 0, fish.size * 0.25, fish.size * 0.13, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;

      // Eye
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(fish.size * 0.5, -fish.size * 0.15, fish.size * 0.13, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(fish.size * 0.5, -fish.size * 0.15, fish.size * 0.07, 0, Math.PI * 2);
      ctx.fill();

      // Mouth
      ctx.strokeStyle = fish.color;
      ctx.globalAlpha = 0.9;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(fish.size * 0.7, fish.size * 0.1, fish.size * 0.13, 0, Math.PI);
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Scales
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      for (let i = -fish.size * 0.5; i < fish.size * 0.5; i += fish.size * 0.25) {
        ctx.beginPath();
        ctx.arc(i, 0, fish.size * 0.17, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      timeRef.current += 0.05;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fishesRef.current.forEach((fish) => {
        // Update tail swing
        fish.tailSwing = Math.sin(timeRef.current * 3) * 0.3;

        // Add vertical wave motion
        fish.y = fish.y + Math.sin(timeRef.current * 2 + fish.yOffset) * 0.3;

        // Move horizontally
        fish.x += fish.speed * fish.direction;

        // Turn around at edges
        if (fish.direction === 1 && fish.x > canvas.width + fish.size) {
          fish.x = -fish.size;
        } else if (fish.direction === -1 && fish.x < -fish.size) {
          fish.x = canvas.width + fish.size;
        }

        drawFish(fish, fish.tailSwing);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{position:Position}}>
      <canvas
        ref={canvasRef}
        className="w-full"
        
      />
    </div>
  );
};

export default SwimmingFish;