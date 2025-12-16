// Shared clip-path builder for cards/panels
export const buildPath = (W: number, H: number): string =>
  `path('M 80 0 L ${W - 24} 0 Q ${W} 0 ${W} 24 L ${W} ${H - 80} Q ${W} ${H - 60} ${W - 14.1} ${H - 45.9} L ${W - 45.9} ${H - 14.1} Q ${W - 60} ${H} ${W - 80} ${H} L 24 ${H} Q 0 ${H} 0 ${H - 24} L 0 80 Q 0 60 14.1 45.9 L 45.9 14.1 Q 60 0 80 0 Z')`;

// Medium variant (smaller corner radii than the large one)
export const buildPathMedium = (W: number, H: number): string =>
  `path('M 29 0 L ${W - 24} 0 Q ${W} 0 ${W} 24 L ${W} ${H - 29} Q ${W} ${H - 24} ${W - 3.5} ${H - 20.5} L ${W - 20.5} ${H - 3.5} Q ${W - 24} ${H} ${W - 29} ${H} L 24 ${H} Q 0 ${H} 0 ${H - 24} L 0 29 Q 0 24 3.5 20.5 L 20.5 3.5 Q 24 0 29 0 Z')`;

// Small variant (same geometry as medium for now; tweak numbers if you want tighter corners)
export const buildPathSmall = (W: number, H: number, rRatio = 0.3): string => {
  const r = rRatio * Math.min(W, H);
  return `path('M ${r} 0
    L ${W - r} 0
    Q ${W} 0 ${W} ${r}
    L ${W} ${H - r}
    Q ${W} ${H} ${W - r} ${H}
    L ${r} ${H}
    Q 0 ${H} 0 ${H - r}
    L 0 ${r}
    Q 0 0 ${r} 0
    Z')`;
};

export default buildPath;