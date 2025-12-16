"use client";

import { useLayoutEffect } from "react";
import buildPath, { buildPathMedium, buildPathSmall } from "../lib/clipPath";

export default function ClipCardsClient() {
  useLayoutEffect(() => {
    function applyClip() {
      const els = Array.from(document.querySelectorAll<HTMLElement>('.clip-card'));
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const W = Math.max(0, rect.width || el.offsetWidth);
        const H = Math.max(0, rect.height || el.offsetHeight);
        try {
          const clipType = (el.dataset.clip || '').toLowerCase();
          let path: string;
          if (clipType === 'small') path = buildPathSmall(W, H);
          else if (clipType === 'large' || clipType === 'default' || clipType === 'big') path = buildPath(W, H);
          else path = buildPathMedium(W, H);

          el.style.clipPath = path;
          // @ts-ignore
          el.style.webkitClipPath = path;
        } catch (e) {
          // ignore
        }
      });
    }

    applyClip();

    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(applyClip) : null;
    const observed = new Set<HTMLElement>();
    const els = Array.from(document.querySelectorAll<HTMLElement>('.clip-card'));
    function observeEl(el: HTMLElement) {
      if (!observed.has(el) && ro) {
        try { ro.observe(el); } catch (e) { /* ignore */ }
        observed.add(el);
      }
    }
    els.forEach(observeEl);

    const imgLoadHandlers: Array<{ img: HTMLImageElement; fn: () => void }> = [];
    document.querySelectorAll('img').forEach((img) => {
      if (!(img as HTMLImageElement).complete) {
        const fn = () => applyClip();
        img.addEventListener('load', fn);
        imgLoadHandlers.push({ img: img as HTMLImageElement, fn });
      }
    });

    const timeout = window.setTimeout(applyClip, 500);

    // Observe DOM mutations so client-side navigation that adds new
    // .clip-card elements will get measured and observed.
    const mo = typeof MutationObserver !== 'undefined'
      ? new MutationObserver((mutations) => {
        let found = false;
        for (const m of mutations) {
          m.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              if (node.classList && node.classList.contains('clip-card')) {
                observeEl(node);
                found = true;
              }
              node.querySelectorAll && node.querySelectorAll('.clip-card').forEach((s) => {
                if (s instanceof HTMLElement) { observeEl(s); found = true; }
              });
            }
          });
        }
        if (found) applyClip();
      })
      : null;

    if (mo) mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (ro) {
        observed.forEach((el) => { try { ro.unobserve(el); } catch (e) {} });
        ro.disconnect();
      }
      if (mo) mo.disconnect();
      imgLoadHandlers.forEach(({ img, fn }) => img.removeEventListener('load', fn));
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
