import { useEffect } from 'react';
import { aboutUsSection } from './AboutUs.data.js';
import { Unplug } from 'lucide-react';

const AboutUs = () => {
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
    <section id="about-us" className="page-section py-24 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            {aboutUsSection.header.badge}
          </div>
          <h2 className="heading-lg text-gray-900 mb-4">
            {aboutUsSection.header.title}
          </h2>
          <p className="body-base text-gray-600 max-w-2xl mx-auto">
            {aboutUsSection.header.subtitle.map((part, index) => (
              <span
                key={index}
                className={part.emphasis ? 'font-bold bg-green-100' : ''}
              >
                {part.text}
              </span>
            ))}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start">
            {/* LEFT: Challenges */}
            <div className="flex flex-col h-full text-center md:text-left">
              <h3 className="heading-md text-gray-900 mb-6 flex items-center gap-2 text-green-700">
                <Unplug className="h-6 w-6" />
                {aboutUsSection.challengesHeader}
              </h3>

              {/* Bullets */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {aboutUsSection.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-green-700 font-medium text-center rounded-full px-6 py-6 min-w-[160px] max-w-[180px] h-[160px] bg-gray-200 relative shadow-md transition-transform hover:scale-105"
                  >
                    {/* YellowAccent */}
                    <span className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <b className="z-10">{challenge.text}</b>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Values */}
            <div className="flex flex-col h-full text-center md:text-left">
              <h3 className="heading-md text-gray-900 mb-6 text-green-700">
                {aboutUsSection.valuesHeader}
              </h3>
              <ul className="space-y-3">
                {aboutUsSection.values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <li key={index} className="flex items-center gap-3 text-gray-900">
                      <Icon className="h-5 w-5 text-black flex-shrink-0" />
                      <span>{value.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
