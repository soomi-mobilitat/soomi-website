
import React, { useEffect } from 'react';
import { 
  Users, MapPin, Calendar, MessageSquare, Shield, CreditCard, 
  Smartphone, Globe, Bell, UserPlus, Car, Settings
} from 'lucide-react';

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <UserPlus className="h-7 w-7" />,
      title: 'User Accounts',
      description: 'Sign up via email, phone, or third-party services. Create your profile and set ride preferences.'
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: 'Communities',
      description: 'Create or join public and private communities to organize rides within trusted groups.'
    },
    {
      icon: <Car className="h-7 w-7" />,
      title: 'Ride Creation',
      description: 'Create rides with departure and arrival points, time, available seats, and cost-sharing options.'
    },
    {
      icon: <Calendar className="h-7 w-7" />,
      title: 'Ride Calendar',
      description: 'Community-wide calendar for ride planning and event coordination with external sync options.'
    },
    {
      icon: <MessageSquare className="h-7 w-7" />,
      title: 'Communication',
      description: 'Community and ride-specific chats for coordinating details and discussions.'
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: 'Safety & Privacy',
      description: 'User profiles with visibility settings and reporting system for inappropriate behavior.'
    },
    {
      icon: <CreditCard className="h-7 w-7" />,
      title: 'Cost Management',
      description: 'Suggested ride costs based on distance and passenger count with optional payment tracking.'
    },
    {
      icon: <Bell className="h-7 w-7" />,
      title: 'Notifications',
      description: 'Get alerts for ride updates, community messages, and important announcements.'
    },
  ];

  return (
    <section id="features" className="page-section py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-somi-100 text-somi-800 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-somi-500 mr-2"></span>
            Features
          </div>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Everything you need for <span className="text-gradient">community-based</span> carpooling
          </h2>
          <p className="body-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Somi offers a complete set of tools designed to make carpooling within communities seamless, 
            safe, and enjoyable for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card dark:glass-card-dark rounded-2xl p-6 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-somi-100 text-somi-700 dark:bg-somi-900/20 dark:text-somi-400 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="heading-sm text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="body-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-br from-somi-500 to-somi-700 rounded-3xl p-8 md:p-12 text-white animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="heading-md mb-4">Ready to transform your community's transportation?</h3>
              <p className="text-white/80 mb-6">
                Join Somi today and start building a more sustainable, connected, and cost-effective 
                carpooling network within your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-white text-somi-700 font-medium rounded-full hover:bg-white/90 transition-colors">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-transparent border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm text-white/70">Communities</div>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">5K+</div>
                <div className="text-sm text-white/70">Active Users</div>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">10K+</div>
                <div className="text-sm text-white/70">Rides Shared</div>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-sm text-white/70">CO2 Saved (kg)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
