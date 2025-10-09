import { useEffect, useRef } from 'react';

interface BubbleType {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  wobble: number;
  wobbleOffset: number;
  update: () => void;
  draw: () => void;
}

const BubbleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<BubbleType[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      // Set display size
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      // Set actual size in memory (scaled for retina)
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Scale context to match device pixel ratio
      ctx.scale(dpr, dpr);
      
      // Store display dimensions for calculations
      canvas.displayWidth = rect.width;
      canvas.displayHeight = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Bubble implements BubbleType {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
      wobble: number;
      wobbleOffset: number;

      constructor() {
        const displayWidth = canvas.displayWidth || window.innerWidth;
        const displayHeight = canvas.displayHeight || window.innerHeight;
        const isMobile = displayWidth < 768;
        
        this.x = Math.random() * displayWidth;
        this.y = displayHeight + Math.random() * 100;
        
        const minSize = isMobile ? 10 : 20;
        const maxSize = isMobile ? 10 : 40;
        this.radius = Math.random() * (maxSize - minSize) + minSize;
       
        this.speedY = Math.random() * 1 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.wobble = Math.random() * 0.05 + 0.02;
        this.wobbleOffset = Math.random() * Math.PI * 2;
      }

      update() {
        const displayWidth = canvas.displayWidth || window.innerWidth;
        const displayHeight = canvas.displayHeight || window.innerHeight;
        
        this.y -= this.speedY;
        this.wobbleOffset += this.wobble;
        this.x += Math.sin(this.wobbleOffset) * 0.5 + this.speedX * 0.1;
        
        // Reset bubble when it goes off screen
        if (this.y + this.radius < 0) {
          this.y = displayHeight + this.radius;
          this.x = Math.random() * displayWidth;
        }
        
        if (this.x < -this.radius) this.x = displayWidth + this.radius;
        if (this.x > displayWidth + this.radius) this.x = -this.radius;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          this.x - this.radius * 0.3,
          this.y - this.radius * 0.3,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(173, 216, 230, ${this.opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(135, 206, 250, ${this.opacity * 0.2})`);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Border
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.6})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Highlight
        ctx.beginPath();
        ctx.arc(
          this.x - this.radius * 0.4,
          this.y - this.radius * 0.4,
          this.radius * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.6})`;
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create initial bubbles
    const displayWidth = canvas.displayWidth || window.innerWidth;
    const isMobile = displayWidth < 768;
    const bubbleCount = isMobile ? 5 : 8;
    
    bubblesRef.current = [];
    for (let i = 0; i < bubbleCount; i++) {
      bubblesRef.current.push(new Bubble());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      const displayWidth = canvas.displayWidth || window.innerWidth;
      const displayHeight = canvas.displayHeight || window.innerHeight;
      
      ctx.clearRect(0, 0, displayWidth, displayHeight);
      
      bubblesRef.current.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    />
  );
};

export default BubbleCanvas;



