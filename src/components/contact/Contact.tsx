import { useEffect } from 'react';
import { Mail } from 'lucide-react';
import { contactContent } from './Contact.data.js';

const MOBILE_BREAKPOINT = 768

const Contact = () => {
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

  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === '#contacte' && window.innerWidth < MOBILE_BREAKPOINT) {
        const contactCol = document.querySelector('.right-column');
        contactCol?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);

    return () => window.removeEventListener('hashchange', handleHashScroll);

  }, []);


  return (
    <section id="contacte" className="page-section py-24 bg-gray-50">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 animate-on-scroll">
          <div className="text-center max-w-3xl mx-auto mb-8 animate-on-scroll">
            <h2 className="heading-lg text-gray-900 mb-4">
              {contactContent.header.title}
            </h2>
            <p className="body-base text-gray-600 max-w-2xl mx-auto">
              {contactContent.header.subtitle}
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT */}
            <div className="flex flex-col h-full text-center md:text-left justify-between">
              <div>
                <h3 className="text-center heading-md text-gray-900 mb-4">
                  {contactContent.leftColumn.title}
                </h3>
                <p className="text-gray-600 md:text-justify whitespace-pre-line">
                  {contactContent.leftColumn.description1}
                </p>
                <p className="text-gray-600 mb-4 whitespace-pre-line">
                  {contactContent.leftColumn.description2}
                </p>
              </div>

              {/* Badges bottom */}
              <div className="justify-center flex flex-col sm:flex-row items-center md:items-start gap-4 lg:gap-8 pb-4 md:pb-0">
                <a
                  className={`block opacity-80 ${contactContent.leftColumn.appStore.disabled ? 'cursor-not-allowed' : ''}`}
                  aria-disabled={contactContent.leftColumn.appStore.disabled}
                >
                  <img
                    src={contactContent.leftColumn.appStore.src}
                    alt={contactContent.leftColumn.appStore.alt}
                    className="h-12 w-auto lg:mr-8"
                  />
                </a>
                <a
                  className={`block opacity-80 ${contactContent.leftColumn.googlePlay.disabled ? 'cursor-not-allowed' : ''}`}
                  aria-disabled={contactContent.leftColumn.googlePlay.disabled}
                >
                  <img
                    src={contactContent.leftColumn.googlePlay.src}
                    alt={contactContent.leftColumn.googlePlay.alt}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-column flex flex-col h-full text-center md:text-left scroll-mt-32 justify-between">
              <div>
                <h3 className="text-center heading-md text-gray-900 mb-4">
                  {contactContent.rightColumn.title}
                </h3>
                <p className="text-gray-600 mb-6 md:text-justify whitespace-pre-line">
                  {contactContent.rightColumn.description}
                </p>
              </div>

              {/* Email bottom */}
              <a
                href={`mailto:${contactContent.rightColumn.email}`}
                className="inline-flex items-center justify-center gap-2 bg-somi-500 hover:bg-somi-600 text-white px-4 py-2 rounded-full transition-colors max-w-full"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <b className="text-xs sm:text-sm md:text-lg lg:text-2xl truncate">
                  {contactContent.rightColumn.email}
                </b>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
