"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "./../Utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  fontSize = "text-2xl", // Default size class
  textColor = "text-black", // Default text color
  width = "w-full", // Default width class
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${textColor} ${fontSize} opacity-0`} // Apply text color and size
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(`font-normal text-center ${width}`, className)}> {/* Added width prop */}
      <div className="">
        <div className={`leading-snug tracking-wide ${fontSize}`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
