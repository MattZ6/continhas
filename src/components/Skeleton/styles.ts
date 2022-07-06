import { keyframes, styled } from '@styles/stitches.config';

export namespace SkeletonStyles {
  const blinkSkeleton = keyframes({
    '0%': { opacity: 0.4 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.4 },
  });

  export const Container = styled('div', {
    backgroundColor: '$defaultElementBackground',

    animation: `${blinkSkeleton} 2.5s infinite`,
  });
}
