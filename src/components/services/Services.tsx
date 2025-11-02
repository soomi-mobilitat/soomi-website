import { useEffect } from 'react';
import { municipalServicesSection } from './Services.data.js';

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
    <section id="services" className="page-section py-24 bg-white">
      <div className="container">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-somi-100 text-somi-800 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-somi-500 mr-2"></span>
            {municipalServicesSection.header.badge}
          </div>

          <h2 className="heading-lg text-gray-900 mb-4">
            {municipalServicesSection.header.title}
          </h2>

          <h3 className="text-xl text-gray-700 font-medium mb-6">
            {municipalServicesSection.header.subtitle}
          </h3>

          <p className="text-gray-600 mb-10">
            {municipalServicesSection.header.description}
          </p>

          <div className="flex justify-center gap-4">
            <a
              href={municipalServicesSection.header.ctaPrimary.href}
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 cursor-pointer transition-colors"
            >
              {municipalServicesSection.header.ctaPrimary.label}
            </a>

            <a
              href={municipalServicesSection.header.ctaSecondary.href}
              className="px-6 py-3 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {municipalServicesSection.header.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div id="services-details" className="animate-on-scroll scroll-mt-32">
          <h3 className="heading-md text-center text-gray-900 mb-12">
            {municipalServicesSection.servicesHeader}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {municipalServicesSection.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-green-50 rounded-2xl p-8 shadow-sm border border-green-100 hover:shadow-md transition-all cursor-pointer flex flex-col h-full"
                  onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
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

          {/* CREDIT IMATGES */}
          <p className="text-xs text-gray-400 mt-4 text-center">
            {municipalServicesSection.creditFooter.imagesBy}&nbsp;
            <a href={municipalServicesSection.services[0].imageCreditLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">{municipalServicesSection.services[0].imageAuthor}</a>,&nbsp;
            <a href={municipalServicesSection.services[1].imageCreditLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">{municipalServicesSection.services[1].imageAuthor}</a> {municipalServicesSection.creditFooter.and}&nbsp;
            <a href={municipalServicesSection.services[2].imageCreditLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">{municipalServicesSection.services[2].imageAuthor}</a> {municipalServicesSection.creditFooter.onUnsplash}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MunicipalServices;
