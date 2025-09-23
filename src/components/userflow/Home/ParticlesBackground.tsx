// src/components/userflow/Home/ParticlesBackground.tsx
import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, Container } from "@tsparticles/engine";

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);


  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (_?: Container) => {
    // no-op
  }, []);

  const particlesOptions = useMemo(() => (
    {
      fullScreen: { enable: false },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          // Some versions' type defs may not recognize boolean here; runtime supports it
          resize: true,
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        // Desktop baseline style
        links: { color: "#ffffff", distance: 150, enable: true },
        move: { enable: true, speed: 2, outModes: { default: "bounce" } },
        number: { value: 80, density: { enable: true, area: 800 } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    
      responsive: [
        {
          maxWidth: 480,
          options: {
            particles: {
              // Mobile: spacious, transparent, behind content
              number: { value: 22, density: { enable: false } },
              links: { opacity: 0.15, width: 1 },
              opacity: { value: 0.25 },
            },
          },
        },
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 35, density: { enable: false } },
              links: { opacity: 0.2, width: 1 },
              opacity: { value: 0.35 },
            },
          },
        },
      ],
    } as unknown
  ), []);

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        className="particles"
        options={particlesOptions as unknown as object}
      />
    )
  );
};

export default ParticlesBackground;
