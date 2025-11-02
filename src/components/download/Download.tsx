import { useEffect } from 'react';
import { Mail } from 'lucide-react';
import { downloadContent } from './Download.data.js';

const Download = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="download" className="page-section py-24 bg-gray-50">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-somi-100 text-somi-800 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-somi-500 mr-2"></span>
            {downloadContent.header.badge}
          </div>
          <div className="text-center max-w-3xl mx-auto mb-8 animate-on-scroll">
            <h2 className="heading-lg text-gray-900 mb-4">
              {downloadContent.header.title}
            </h2>
            <p className="body-base text-gray-600 max-w-2xl mx-auto">
              {downloadContent.header.subtitle}
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT */}
            <div className="flex flex-col h-full text-center md:text-left">
              <h3 className="heading-md text-gray-900 mb-4">
                {downloadContent.leftColumn.title}
              </h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">
                {downloadContent.leftColumn.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                <a
                  className={`block opacity-80 ${downloadContent.leftColumn.appStore.disabled ? 'cursor-not-allowed' : ''}`}
                  aria-disabled={downloadContent.leftColumn.appStore.disabled}
                >
                  <img
                    src={downloadContent.leftColumn.appStore.src}
                    alt={downloadContent.leftColumn.appStore.alt}
                    className="h-12 w-auto"
                  />
                </a>
                <a
                  className={`block opacity-80 ${downloadContent.leftColumn.googlePlay.disabled ? 'cursor-not-allowed' : ''}`}
                  aria-disabled={downloadContent.leftColumn.googlePlay.disabled}
                >
                  <img
                    src={downloadContent.leftColumn.googlePlay.src}
                    alt={downloadContent.leftColumn.googlePlay.alt}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div id="contact" className="flex flex-col h-full text-center md:text-left scroll-mt-32">
              <h3 className="heading-md text-gray-900 mb-4">
                {downloadContent.rightColumn.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {downloadContent.rightColumn.description}
              </p>
              <a
                href={`mailto:${downloadContent.rightColumn.email}`}
                className="inline-flex items-center justify-center gap-2 bg-somi-500 hover:bg-somi-600 text-white px-6 py-3 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
                <b className='text-2xl'>{downloadContent.rightColumn.email}</b>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
