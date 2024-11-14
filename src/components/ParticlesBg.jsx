// src/components/ParticlesBg.js
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load slim bundle
    }).then(() => {
      setInit(true); // Marks initialization as complete
    });
  }, []);

  // JSON configuration for "starry" effect
  const options = {
    autoPlay: true,
    background: { color: { value: "#000" } },
    fullScreen: { enable: true, zIndex: -1 },
    detectRetina: true,
    fpsLimit: 120,
    particles: {
      number: {
        density: { enable: true, width: 1920, height: 1080 },
        value: 150, // Increased particle count for denser background
      },
      color: { value: "#fff" },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
          enable: true,
          speed: 0.25,
          startValue: "random",
          destroy: "none",
        },
      },
      size: { value: 1 },
      move: {
        enable: true, // Ensure movement is enabled
        speed: 0.2, // Higher speed
        direction: "none",
        outModes: { default: "out" },
      },
      shape: { type: "circle" },
    },
  };

  return init ? <Particles id="tsparticles" options={options} /> : null;
};

export default ParticlesBg;
