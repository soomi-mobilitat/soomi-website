import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const INTERVAL_MS = 10000;

// Rendered width of a phone at each breakpoint (matches the slot classes below)
const SIZES = '(min-width: 1280px) 260px, (min-width: 1024px) 230px, (min-width: 768px) 220px, (min-width: 640px) 280px, 260px';

// Each screenshot `name.webp` (720px wide) also exists as `name-360w.webp` and `name-540w.webp`
const srcSetFor = (src: string) => {
  const base = src.replace(/\.webp$/, '');
  return `${base}-360w.webp 360w, ${base}-540w.webp 540w, ${src} 720w`;
};

type Screenshot = { src: string; alt: string };

const ScreenshotCarousel = ({ screenshots }: { screenshots: Screenshot[] }) => {
  const isMobile = useIsMobile();
  const visible = isMobile ? 1 : 2;
  const pages = Math.ceil(screenshots.length / visible);
  const [page, setPage] = useState(0);

  // Keep the page in range when switching between one and two screenshots
  const currentPage = page % pages;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pages), INTERVAL_MS);
    return () => clearInterval(id);
  }, [pages, page]); // restart the timer after a manual change

  return (
    <div className="relative z-10 flex flex-col items-center">
      <div className="flex gap-4 lg:gap-6">
        {Array.from({ length: visible }, (_, slot) => {
          const active = (currentPage * visible + slot) % screenshots.length;
          return (
            <div
              key={slot}
              // The prerendered HTML has two slots: hide the second one on phones until hydration removes it
              className={cn(
                'relative aspect-[1080/2424] w-[260px] sm:w-[280px] md:w-[220px] lg:w-[230px] xl:w-[260px] overflow-hidden rounded-[11%/4.9%] shadow-xl',
                slot === 1 && 'hidden md:block'
              )}
            >
              {screenshots.map((shot, i) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  srcSet={srcSetFor(shot.src)}
                  sizes={SIZES}
                  alt={shot.alt}
                  width={720}
                  height={1616}
                  aria-hidden={i !== active}
                  // Only the shown screenshot competes for bandwidth on load
                  loading={i === active ? undefined : 'lazy'}
                  fetchPriority={i === active ? undefined : 'low'}
                  className={cn(
                    'absolute inset-0 w-full h-full transition-opacity duration-700',
                    slot === 1 && 'delay-150',
                    i === active ? 'opacity-100' : 'opacity-0'
                  )}
                />
              ))}
            </div>
          );
        })}
      </div>

      {/* Page indicators */}
      <div className="flex mt-4">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Captura ${i + 1} de ${pages}`}
            aria-current={i === currentPage}
            onClick={() => setPage(i)}
            className="group p-2" // padding gives a comfortable tap target around the small dot
          >
            <span
              className={cn(
                'block h-2 rounded-full transition-all',
                i === currentPage ? 'w-6 bg-soomi-500' : 'w-2 bg-gray-300 group-hover:bg-gray-400'
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotCarousel;
