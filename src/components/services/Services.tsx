import { useEffect } from 'react';
import { servicesContent } from './Services.data.js';

const MunicipalServices = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="serveis" className="page-section py-24 bg-white">
      <div className="container">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll">
          <h2 className="heading-lg text-gray-900 mb-4">
            {servicesContent.header.title}
          </h2>

          <p className="text-gray-600 mb-10">
            {servicesContent.header.description}
          </p>

          <div className="flex justify-center gap-4">
            <a
              href={servicesContent.header.ctaPrimary.href}
              className="flex items-center justify-center px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 cursor-pointer transition-colors"
            >
              {servicesContent.header.ctaPrimary.label}
            </a>

            <a
              href={servicesContent.header.ctaSecondary.href}
              className="flex items-center justify-center px-6 py-3 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {servicesContent.header.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div id="services-details" className="animate-on-scroll scroll-mt-32">
          <h3 className="heading-md text-center text-gray-900 mb-12">
            {servicesContent.servicesHeader}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {servicesContent.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-green-50 rounded-2xl p-8 shadow-sm border border-green-100 hover:shadow-md transition-all cursor-pointer flex flex-col h-full"
                  onClick={() => document.getElementById('contacte')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="flex justify-center mb-6">
                    <Icon className="h-12 w-12 text-green-700" />
                  </div>
                  <h4 className="heading-sm text-center text-gray-900 mb-4">
                    {service.title}
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm flex-1">
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <img src={service.image} alt={service.alt} className="rounded-xl mt-6 w-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MunicipalServices;
