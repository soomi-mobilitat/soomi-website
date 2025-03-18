
import React, { useEffect } from 'react';
import { Users, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Communities = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const communities = [
    {
      name: 'Westgate Neighbors',
      members: 142,
      rides: 35,
      color: 'bg-somi-100',
      textColor: 'text-somi-800',
      iconColor: 'text-somi-600',
      borderColor: 'border-somi-200',
      features: ['School runs', 'Weekend trips', 'Community events']
    },
    {
      name: 'Tech Park Commuters',
      members: 76,
      rides: 28,
      color: 'bg-blue-100',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      features: ['Daily commutes', 'Conference travels', 'Airport pickups']
    },
    {
      name: 'Downtown Workers',
      members: 98,
      rides: 42,
      color: 'bg-green-100',
      textColor: 'text-green-800',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200',
      features: ['Rush hour rides', 'Lunch groups', 'After-work events']
    },
    {
      name: 'University Students',
      members: 215,
      rides: 68,
      color: 'bg-purple-100',
      textColor: 'text-purple-800',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      features: ['Campus shuttles', 'Weekend getaways', 'Study groups']
    }
  ];

  return (
    <section id="communities" className="page-section py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-somi-100 text-somi-800 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-somi-500 mr-2"></span>
            Communities
          </div>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Join <span className="text-gradient">trusted communities</span> or create your own
          </h2>
          <p className="body-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Communities are at the heart of Somi. They provide a safe, trusted environment 
            for organizing carpools with people you know or share common interests with.
          </p>
        </div>

        <div className="relative mb-16 animate-on-scroll">
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 rounded-3xl transform rotate-1 scale-[1.03] opacity-70"></div>
          <div className="relative glass-card dark:glass-card-dark rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <h3 className="heading-md text-gray-900 dark:text-white mb-4">Create a new community</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Start your own carpooling community for your neighborhood, workplace, school, 
                  or any group with shared transportation needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-somi-100 text-somi-700 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Name your community</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Give it a clear, descriptive name</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-somi-100 text-somi-700 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Set privacy options</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Public or private with invite-only access</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-somi-100 text-somi-700 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Invite members</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Share with friends, neighbors, or colleagues</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-8 rounded-full bg-somi-500 hover:bg-somi-600 px-8 py-6">
                  Create Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search communities..." 
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-somi-500 dark:focus:ring-somi-400 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-4">
                    {communities.map((community, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-colors"
                      >
                        <div className={`h-12 w-12 rounded-full ${community.color} flex items-center justify-center`}>
                          <Users className={`h-6 w-6 ${community.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{community.name}</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <span>{community.members} members</span>
                            <span className="mx-2">•</span>
                            <span>{community.rides} active rides</span>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="px-4 rounded-full border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          Join
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="link" className="text-somi-600 dark:text-somi-400">
                      View all communities
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communities.map((community, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border ${community.borderColor} p-6 animate-on-scroll`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`h-10 w-10 rounded-full ${community.color} flex items-center justify-center`}>
                  <Users className={`h-5 w-5 ${community.iconColor}`} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{community.name}</h3>
              </div>
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{community.members}</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div>{community.rides} rides</div>
              </div>
              <div className="mb-5">
                <h4 className={`text-xs font-medium mb-2 ${community.textColor}`}>POPULAR FOR</h4>
                <div className="flex flex-wrap gap-2">
                  {community.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs px-2 py-1 rounded-full ${community.color} ${community.textColor}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full rounded-full border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                View Community
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;
