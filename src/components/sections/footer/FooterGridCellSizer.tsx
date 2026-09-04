'use client';

import { useEffect, type RefObject } from 'react';

export function FooterGridCellSizer({ targetRef }: { targetRef: RefObject<HTMLElement | null> }) {
  useEffect(() => {
    const footerEl = targetRef.current;
    if (!footerEl) return;

    const updateCellSize = () => {
      const pageFrame = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--page-frame')
      );
      const availableWidth = footerEl.clientWidth - pageFrame * 2;
      const desiredCell = Math.min(
        Math.max(availableWidth / 14, 96),
        (3000 - pageFrame * 2) / 14
      );
      const cols = Math.max(1, Math.round(availableWidth / desiredCell));
      const cellSize = availableWidth / cols;
      footerEl.style.setProperty('--footer-cell', `${cellSize}px`);
    };

    updateCellSize();
    const observer = new ResizeObserver(updateCellSize);
    observer.observe(footerEl);
    return () => observer.disconnect();
  }, [targetRef]);

  return null;
}
