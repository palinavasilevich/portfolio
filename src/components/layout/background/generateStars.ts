/**
 * Seeded random number generator using the Mulberry32 algorithm
 * @param seed - Initial seed value for the random number generator
 * @returns A function that returns a random number between 0 and 1
 */
export const mulberry32 = (seed: number): (() => number) => {
  return (): number => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export interface Star {
  id: number;
  size: number;
  left: number;
  top: number;
  animationDelay: number;
}

/**
 * Generates an array of star objects with consistent properties based on a seed
 * @param count - Number of stars to generate
 * @param seed - Seed value for random number generation (default: 42)
 * @returns Array of Star objects
 */
export const generateStars = (count: number, seed = 42): Star[] => {
  const random = mulberry32(seed);

  return Array.from({ length: count }, (_, index) => {
    const size = Math.floor(random() * 2) + 1; // 1-2px
    const left = Math.floor(random() * 100);
    const top = Math.floor(random() * 100);
    const animationDelay = Math.floor(random() * 5);

    return {
      id: index,
      size,
      left,
      top,
      animationDelay,
    };
  });
};
