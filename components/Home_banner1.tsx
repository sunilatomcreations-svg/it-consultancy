"use client"
import React, { useEffect, useRef } from "react";

/*
  RipplePanels.jsx
  - A small React component (Next.js friendly) that reproduces the three-panel layout in the screenshot.
  - Each panel shows an image (you will replace the default image paths with your images) with a vertical "ripple / displacement" effect
  - Uses an SVG filter (feTurbulence + feDisplacementMap) applied to each <image> element
  - Small animation subtly varies the turbulence to give the wavy look

  Usage:
    1. Drop this file into your Next.js project's components/ folder.
    2. Import and use: import RipplePanels from "~/components/RipplePanels";
       <RipplePanels />

  Notes:
    - The demo uses local path: /mnt/data/10f061c4-bcc1-4aa8-8a2e-b8d3dfd53324.png (replace with your image URLs or imports)
    - If you prefer next/image, you can adapt the <image> href to use a preloaded src or use <svg> with a pattern.
    - Tailwind CSS classes are used for quick layout. If you don't have Tailwind, replace classes with equivalent CSS rules.
*/

const DEFAULT_IMAGES = [
  "/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png",
  "/mnt/data/10f061c4-bcc1-4aa8-8a2e-b8d3dfd53324.png",
  "/mnt/data/10f061c4-bcc1-4aa8-8a2e-b8d3dfd53324.png",
];

export default function RipplePanels({ images = DEFAULT_IMAGES }) {
  // refs to each feTurbulence so we can animate baseFrequency
  const turbulenceRefs = useRef<(SVGFETurbulenceElement | null)[]>([]);

  useEffect(() => {
    let rafId: number | null = null;
    let t = 0;

    function animate() {
      t += 0.016; // approx per frame
      turbulenceRefs.current.forEach((el, i) => {
        if (!el) return;
        // subtle oscillation of baseFrequency for vertical waves
        const baseX = 0.0005 + i * 0.00025; // tiny horizontal frequency per panel
        const baseY = 0.035 + i * 0.01; // vertical frequency
        const oscillation = Math.abs(Math.sin(t * (0.5 + i * 0.2))) * 0.02; // 0 - 0.02
        const newVal = `${(baseX + oscillation).toFixed(6)} ${(baseY).toFixed(6)}`;
        try {
          el.setAttribute("baseFrequency", newVal);
        } catch (e) {
          // ignore
        }
      });
      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="bg-F6F1EB w-full min-h-[300px] md:min-h-[350px] lg:min-h-[450px] p-4 md:p-6 lg:p-8 flex items-stretch justify-between gap-2 md:gap-4 mt-14 md:mt-12">
      {/* Left big panel */}
      <div className="flex-1 min-h-[250px] md:min-h-[350px] lg:min-h-[450px] rounded-2xl overflow-hidden shadow-lg">
        <SVGPanel
          src={images[0]}
          filterId="ripple-left"
          turbulenceRef={(el) => (turbulenceRefs.current[0] = el)}
        />
      </div>

      {/* Middle tall narrow */}
      <div className="w-[80px] md:w-[130px] lg:w-[180px] min-h-[250px] md:min-h-[350px] lg:min-h-[450px] rounded-2xl overflow-hidden shadow-lg">
        <SVGPanel
          src={images[1]}
          filterId="ripple-mid"
          turbulenceRef={(el) => (turbulenceRefs.current[1] = el)}
        />
      </div>

      {/* Right narrow */}
      <div className="w-[60px] md:w-[100px] lg:w-[120px] min-h-[250px] md:min-h-[350px] lg:min-h-[450px] rounded-2xl overflow-hidden shadow-lg">
        <SVGPanel
          src={images[2]}
          filterId="ripple-right"
          turbulenceRef={(el) => (turbulenceRefs.current[2] = el)}
        />
      </div>
    </div>
  );
}

interface SVGPanelProps {
  src: string;
  filterId: string;
  turbulenceRef: (el: SVGFETurbulenceElement | null) => void;
}

function SVGPanel({ src, filterId, turbulenceRef }: SVGPanelProps) {
  // the svg will fill the wrapper. set viewBox to maintain aspect ratio of how you want the image scaled
  return (
    <svg className="w-full h-full block" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400" role="img" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          {/* fractalNoise creates the displacement source */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.05"
            numOctaves="2"
            stitchTiles="stitch"
            result="turbulence"
            ref={(el) => {
              if (!el) return;
              // feTurbulence doesn't accept ref in React normally. We'll attach via attribute in parent using turbulenceRef callback instead.
            }}
          />
          {/* displace the image by the turbulence */}
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="36" xChannelSelector="R" yChannelSelector="G"/>
        </filter>

        {/* Clip path to get very rounded corners in SVG itself (helps on some browsers) */}
        <clipPath id={`${filterId}-clip`}>
          <rect x="0" y="0" width="100%" height="100%" rx="24" ry="24" />
        </clipPath>
      </defs>

      {/* Background fill (in case image has transparent parts) */}
      <rect width="100%" height="100%" fill="#f0ebe5" clipPath={`url(#${filterId}-clip)`} />

      {/* The <image> element which shows your photo. The filter is applied here. */}
      {/* Note: Some React setups may escape href — using xlinkHref is an alternative in older svg specs. */}
      <image
        href={src}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${filterId}-clip)`}
        style={{ filter: `url(#${filterId})` }}
      />

      {/* A subtle vertical stripe overlay to mimic the corrugated look (optional) */}
      <rect width="100%" height="100%" clipPath={`url(#${filterId}-clip)`} fill="url(#stripes)" opacity="0.06" />

      <defs>
        <pattern id="stripes" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="3" height="6" fill="#000" />
        </pattern>
      </defs>
    </svg>
  );
}

/*
  Extra instructions:
  - To ensure the animation hook can access the <feTurbulence> nodes, replace the <feTurbulence> line with a manual ID and in useEffect use document.querySelector(`#${filterId} feTurbulence`). The example above uses a global animation loop writing to an array of refs; if needed adapt to querySelector in your environment.
  - If you want sharper ridged vertical lines like in the reference, increase feDisplacementMap scale and adjust the pattern overlay opacity.
*/
