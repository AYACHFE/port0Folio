import type { MutableRefObject } from "react";

export type Vec2 = { x: number; y: number };

export type MotionRefs = {
  mouse: MutableRefObject<Vec2>;
  scroll: MutableRefObject<number>;
  reduced: boolean;
  isMobile: boolean;
};
