import { useEffect } from 'react';
import { missionContent } from './Mission.data.js';
import { Unplug } from 'lucide-react';

const Mission = () => {
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
    <section id="missio-valors" className="page-section py-24 bg-gray-50">
      <div className="container">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 animate-on-scroll">
          <h2 className="heading-lg text-gray-900 mb-4">
            {missionContent.header.title.map((part, index) => (
              <span
                key={index}
                className={part.emphasis ? 'font-bold text-4xl text-soomi-600' : ''}
              >
                {part.text}
              </span>
            ))}
          </h2>
          <p className="body-base text-gray-600 max-w-2xl mx-auto">
            {missionContent.header.subtitle.map((part, index) => (
              <span
                key={index}
                className={part.emphasis ? 'font-bold text-xl text-soomi-600' : ''}
              >
                {part.text}
              </span>
            ))}
          </p>
        </div>

        {/* IMAGE BAND */}
        <div className="relative w-full mb-8 animate-on-scroll">
          <img
            src={missionContent.banner.image}
            alt={missionContent.banner.alt}
            className="w-full h-56 object-cover rounded-2xl shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl"></div>
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start">

            {/* LEFT: Challenges */}
            <div className="flex flex-col h-full text-center md:text-left">
              <h3 className="heading-md text-gray-900 mb-6 flex items-center gap-2 text-green-700">
                <Unplug className="h-6 w-6" />
                {missionContent.challengesHeader}
              </h3>

              {/* Bullets */}
              <div className="flex flex-wrap justify-evenly gap-6">
                {missionContent.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-center 
                    rounded-full px-6 py-6 min-w-[140px] max-w-[180px] w-full sm:w-[45%] md:w-[180px] h-[170px]
                    bg-white border-4 border-soomi-500 
                    shadow-[0_4px_6px_rgba(0,0,0,0.08),_0_8px_20px_rgba(0,0,0,0.08)]
                    transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
                  >
                    <b className="font-medium text-md text-gray-700 z-10">{challenge.text}</b>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Values */}
            <div className="flex flex-col h-full text-center md:text-left">
              <h3 className="heading-md mb-6 text-green-700">
                {missionContent.valuesHeader}
              </h3>
              <ul className="space-y-3">
                {missionContent.values.map((value, index) => {
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

export default Mission;
