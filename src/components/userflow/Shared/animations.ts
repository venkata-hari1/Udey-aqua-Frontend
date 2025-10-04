// src/components/userflow/Shared/animations.ts
import type { Target, Transition } from "framer-motion";

export const FISH_OVAL_INITIAL: Target = { x: 0, y: 0, rotate: 0 };

export const FISH_OVAL_ANIMATE: Target = {
  x: [
    0, -20, -40, -60, -80, -100, -120, -140, -160, -180, -200, -220, -240, -260,
    -280, -300, -320, -340, -360, -380, -400, -420, -440, -460, -480, -500,
    -520, -540, -560, -580, -600,
  ],
  y: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -20, -40, -60, -80, -100,
    -120, -140, -160, -180, -200, -180, -160, -140, -120, -100,
  ],
  rotate: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, -30, -45, -60, -75,
    -90, -105, -120, -135, -120, -105, -90, -75, -60,
  ],
};

export const FISH_OVAL_TRANSITION: Transition = {
  duration: 10,
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

// Footer background animations
export const FOOTER_BG1_INITIAL: Target = { x: 0, y: 0 };
export const FOOTER_BG1_ANIMATE: Target = {
  x: [0, -40, -80, -120, -80, -40, 0],
  y: [0, -10, -15, -10, 0, 10, 0],
};
export const FOOTER_BG1_TRANSITION: Transition = {
  duration: 8,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
};

export const FOOTER_BG3_INITIAL: Target = { x: 0, y: 0 };
export const FOOTER_BG3_ANIMATE: Target = {
  x: [0, -10, -20, -10, 0],
  y: [0, -3, 0, 3, 0],
};
export const FOOTER_BG2_INITIAL: Target = { x: 0, y: 0 };
export const FOOTER_BG2_ANIMATE: Target = {
  x: [0, 30, 60, 90, 60, 30, 0],
  y: [0, 8, 12, 8, 0, -8, 0],
};
export const FOOTER_BG2_TRANSITION: Transition = {
  duration: 10,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
};

export const FOOTER_BG3_TRANSITION: Transition = {
  duration: 12,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
};

// Partners fish U-turn animation
export const PARTNERS_FISH_INITIAL: Target = { x: 0, y: 0 };
export const PARTNERS_FISH_ANIMATE: Target = {
  // U-turn path: goes left, then down in U-turn, then back up
  x: [0, -20, -40, -60, -80, -100, -80, -60, -40, -20, 0],
  y: [0, 0, 0, 0, 0, 0, 10, 20, 30, 20, 10, 0],
};
export const PARTNERS_FISH_TRANSITION: Transition = {
  duration: 15,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 2,
};

// About fish up and down animation
export const ABOUT_FISH_INITIAL: Target = { x: 0, y: 0 };
export const ABOUT_FISH_ANIMATE: Target = {
  y: [0, -20, 0],
};
export const ABOUT_FISH_TRANSITION: Transition = {
  duration: 3,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "loop",
};

export const CULTURES_FISH_INITIAL: Target = { x: 0, y: 0 };
export const CULTURES_FISH_ANIMATE: Target = {
  y: [0, -10, 0],
};
export const CULTURES_FISH_TRANSITION: Transition = {
  duration: 2,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "loop",
};

export const NEWS_FISH_CIRCLE_INITIAL: Target = { x: 0, y: 0, rotate: 0 };
export const NEWS_FISH_CIRCLE_ANIMATE: Target = {
  x: [
    0, -15, -30, -45, -60, -75, -90, -105, -120, -135, -150, -165, -180, -195,
    -210, -225, -240, -255, -270, -285, -300, -315, -330, -345, -360, -375,
    -390, -405, -420, -435, -450,
  ],
  y: [
    0, -10, -20, -30, -40, -30, -20, -10, 0, -10, -20, -30, -40, -30, -20, -10,
    0, -10, -20, -30, -40, -30, -20, -10, 0, 0, 0, 0, 0, 0, 0,
  ],
  rotate: [
    0, -10, -20, -30, -20, -10, 0, -10, -20, -30, -20, -10, 0, -10, -20, -30,
    -20, -10, 0, -10, -20, -30, -20, -10, 0, 0, 0, 0, 0, 0, 0,
  ],
};

export const NEWS_FISH_CIRCLE_TRANSITION: Transition = {
  duration: 16,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
};

export const NEWS_FISHES_INITIAL: Target = { x: 0, y: 0 };
export const NEWS_FISHES_ANIMATE: Target = {
  x: [0, 20, 0, 20, 0],
  y: [0, 0, 15, 0, 15, 0],
};
export const NEWS_FISHES_TRANSITION: Transition = {
  duration: 6,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "loop",
};

// Cultures side image up-left-back loop animation
export const CULTURES_SIDE_INITIAL: Target = { x: 0, y: 0 };
export const CULTURES_SIDE_ANIMATE: Target = {
  x: [0, -30, -60, 0],
  y: [0, -20, -40, 0],
};
export const CULTURES_SIDE_TRANSITION: Transition = {
  duration: 5,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "loop",
};
