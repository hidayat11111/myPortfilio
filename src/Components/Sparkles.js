"use client";
import React, { useId, useCallback } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "./../Utils/cn";
import { motion, useAnimation } from "framer-motion";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Debounce the particles initialization to prevent the UI freeze.
    let timeout = setTimeout(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, 1000); // Adding a small delay to prevent UI freezing

    return () => clearTimeout(timeout);
  }, []);

  // Use useCallback to avoid unnecessary re-renders
  const particlesLoaded = useCallback(async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  }, [controls]);

  const generatedId = useId();

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "#0d47a1",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 60, // Reduce fps limit to 60 for smoother performance
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false, // Set hover off for performance
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                enable: false,
                mode: "bounce",
              },
              color: {
                value: particleColor || "#ffffff",
              },
              move: {
                enable: true,
                speed: {
                  min: 0.1,
                  max: speed || 1,
                },
                direction: "none",
                outModes: {
                  default: "out",
                },
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                value: particleDensity || 100, // Reduce particle count for performance
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: 1.5, // Adjust speed for smoother performance
                  startValue: "random",
                },
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 2.5, // Slightly reduce max size for better performance
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
