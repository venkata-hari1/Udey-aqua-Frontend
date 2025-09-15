import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, Container } from "@tsparticles/engine";

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        links: { color: "#ffffff", distance: 150, enable: true },
        move: {
          enable: true,
          speed: 2,
          outModes: { default: "bounce" },
        },
        number: {
          value: 80,
          density: {
            enable: true,
            // Some versions require value_area, others area; engine handles both
            area: 800,
          },
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    } as unknown
  ), []);

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        // Restrict to container size
        style={{ width: "100%", height: "100%" }}
        // Cast to unknown to avoid over-strict type defs across versions
        options={particlesOptions as unknown as object}
      />
    )
  );
};

export default ParticlesBackground;
