import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const INTERVAL_MS = 10000;

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
              className="relative aspect-[1080/2424] w-[260px] sm:w-[280px] md:w-[220px] lg:w-[230px] xl:w-[260px] overflow-hidden rounded-[11%/4.9%] shadow-xl"
            >
              {screenshots.map((shot, i) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  aria-hidden={i !== active}
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
      <div className="flex gap-2 mt-6">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Captura ${i + 1} de ${pages}`}
            aria-current={i === currentPage}
            onClick={() => setPage(i)}
            className={cn(
              'h-2 rounded-full transition-all',
              i === currentPage ? 'w-6 bg-soomi-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotCarousel;
