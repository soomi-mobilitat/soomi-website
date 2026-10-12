import { UserPlus, Users, Car, MapPin, Calendar, MessageSquare, Bell, Shield } from 'lucide-react';
import { featuresContent, featuresHeader } from './Features.data';

// Icons referenced by name in Features.data
const icons = { UserPlus, Users, Car, MapPin, Calendar, MessageSquare, Bell, Shield };

const Features = () => {
  return (
    <section id="caracteristiques" className="page-section py-24 bg-soomi-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="heading-lg text-gray-900 mb-4">
            {featuresHeader.title.normal}
            <span className="text-gradient">{featuresHeader.title.highlight}</span>
          </h2>

          <p className="body-base text-gray-600 max-w-2xl mx-auto">
            {featuresHeader.description}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresContent.map((feature, index) => {
            const IconComponent = icons[feature.icon];
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-soomi-100 text-soomi-700 flex items-center justify-center mb-5">
                  {IconComponent && <IconComponent className="h-7 w-7" />}
                </div>
                <h3 className="heading-sm text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="body-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
