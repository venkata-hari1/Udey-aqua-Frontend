import type { Target, Transition } from "framer-motion";

export const FISH_OVAL_INITIAL: Target = { x: 0, y: 0, rotate: 0 };

export const FISH_OVAL_ANIMATE: Target = {
  x: [
    0, -40, -80, -120, -160, -200, -240, -280, -320, -280, -240, -200, -160,
    -120, -80, -40, 0,
  ],
  y: [0, -15, -25, -30, -25, -15, 0, 15, 25, 30, 25, 15, 0, -15, -25, -15, 0],
  rotate: [
    0, -22.5, -45, -67.5, -90, -112.5, -135, -157.5, -180, -202.5, -225, -247.5,
    -270, -292.5, -315, -337.5, -360,
  ],
};

export const FISH_OVAL_TRANSITION: Transition = {
  duration: 20,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 3,
};

export const TEAM_FISH_INITIAL: Target = { x: 0, y: 0 };

export const TEAM_FISH_ANIMATE: Target = {
  x: [
    0, -50, -50, -45, -30, 0, 30, 45, 50, 45, 30, 0, -30, -45, -50, -45, -30,
    -15, 0,
  ],
  y: [
    0, 30, 50, 55, 50, 40, 30, 10, 0, -10, -30, -40, -50, -55, -50, -35, -25,
    -10, 0,
  ],
};

export const TEAM_FISH_TRANSITION: Transition = {
  duration: 24,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 3,
};
