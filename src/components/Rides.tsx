
import React, { useEffect } from 'react';
import { 
  Car, MapPin, Clock, Users, ArrowRight, 
  Calendar, DollarSign, PlusCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Rides = () => {
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

  const rides = [
    {
      driver: 'Michael K.',
      origin: 'Westgate',
      destination: 'Downtown',
      time: '7:30 AM',
      date: 'Mon, Jun 12',
      seats: 3,
      cost: '$4.50',
      recurring: true,
      avatar: 'MK',
      community: 'Westgate Neighbors'
    },
    {
      driver: 'Sarah L.',
      origin: 'Tech Park',
      destination: 'Shopping Mall',
      time: '5:45 PM',
      date: 'Wed, Jun 14',
      seats: 2,
      cost: '$3.75',
      recurring: false,
      avatar: 'SL',
      community: 'Tech Park Commuters'
    },
    {
      driver: 'David W.',
      origin: 'University',
      destination: 'Airport',
      time: '10:15 AM',
      date: 'Fri, Jun 16',
      seats: 4,
      cost: '$6.25',
      recurring: false,
      avatar: 'DW',
      community: 'University Students'
    }
  ];

  return (
    <section id="rides" className="page-section py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-somi-100 text-somi-800 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-somi-500 mr-2"></span>
            Rides
          </div>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Create or join <span className="text-gradient">rides</span> within your communities
          </h2>
          <p className="body-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you're offering a ride or looking to join one, Somi makes it easy 
            to connect with other community members heading your way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="col-span-1 lg:col-span-2 animate-on-scroll">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Available Rides</h3>
                <Button variant="outline" size="sm" className="text-sm rounded-full">
                  Filter
                </Button>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {rides.map((ride, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-somi-100 text-somi-800 flex items-center justify-center font-medium">
                          {ride.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{ride.driver}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{ride.community}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-sm rounded-full border-gray-200 dark:border-gray-700"
                        >
                          Details
                        </Button>
                        <Button 
                          size="sm" 
                          className="text-sm rounded-full bg-somi-500 hover:bg-somi-600"
                        >
                          Join Ride
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">From</div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{ride.origin}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">To</div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{ride.destination}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Date & Time</div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {ride.date}, {ride.time}
                            {ride.recurring && <span className="ml-1 text-xs text-somi-600 dark:text-somi-400">(Recurring)</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Seats</div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{ride.seats}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Cost</div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{ride.cost}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 text-center">
                <Button variant="link" className="text-somi-600 dark:text-somi-400">
                  View all available rides
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '100ms' }}>
            <div className="bg-gradient-to-br from-somi-500 to-somi-700 rounded-2xl p-6 text-white h-full flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Create a new ride</h3>
              <p className="text-white/80 text-sm mb-6">
                Offer a ride to your community members and share the journey together.
              </p>
              
              <div className="space-y-5 mb-6 flex-grow">
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3 mb-1">
                    <MapPin className="h-5 w-5 text-white/70" />
                    <h4 className="font-medium">Set pickup and destination</h4>
                  </div>
                  <p className="text-sm text-white/70 pl-8">Choose your starting point and destination.</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3 mb-1">
                    <Calendar className="h-5 w-5 text-white/70" />
                    <h4 className="font-medium">Schedule date and time</h4>
                  </div>
                  <p className="text-sm text-white/70 pl-8">Set when your ride will take place.</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3 mb-1">
                    <Users className="h-5 w-5 text-white/70" />
                    <h4 className="font-medium">Available seats & pricing</h4>
                  </div>
                  <p className="text-sm text-white/70 pl-8">How many passengers and cost per person.</p>
                </div>
              </div>
              
              <Button className="w-full rounded-xl bg-white text-somi-700 hover:bg-white/90">
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Ride
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-4">Download the mobile app</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get the full Somi experience on your phone. Easily manage rides, communicate 
                with your community, and receive real-time notifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5675 12.0183C17.5548 9.29466 19.8368 7.89463 19.9245 7.84033C18.5795 5.91666 16.5119 5.64099 15.7638 5.62466C14.0262 5.45433 12.3519 6.67299 11.4682 6.67299C10.5646 6.67299 9.2242 5.63999 7.73886 5.67233C5.83152 5.70433 4.0575 6.74566 3.06851 8.33066C1.00318 11.5707 2.56217 16.2983 4.54217 18.9637C5.53083 20.277 6.68551 21.7483 8.19618 21.685C9.66334 21.616 10.218 20.7253 11.9977 20.7253C13.7572 20.7253 14.2732 21.685 15.8035 21.6443C17.3852 21.616 18.377 20.3103 19.329 18.988C20.4738 17.455 20.9488 15.9473 20.9691 15.8767C20.9287 15.8633 17.5826 14.622 17.5675 12.0183Z" />
                    <path d="M14.9425 3.91366C15.7525 2.9 16.3091 1.50533 16.1558 0.0799866C14.9022 0.133321 13.3628 0.889988 12.5231 1.88366C11.7788 2.74633 11.1085 4.19733 11.2825 5.567C12.6895 5.66333 14.0928 4.90733 14.9425 3.91366Z" />
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5409 8.22207C15.1979 6.89474 12.0089 6.11741 11.9999 6.11408C11.9952 6.11308 8.80553 5.33441 6.45921 6.66174C3.64686 8.28308 3.44287 12.0504 3.44287 12.0504V20.4421C3.44287 20.5294 3.51287 20.6034 3.60019 20.6034H5.50016C5.58882 20.6034 5.65749 20.5347 5.65749 20.4461V12.0747C5.65749 12.0071 6.45921 9.22207 11.9999 11.2001C17.5406 9.22307 18.3423 12.0071 18.3423 12.0747V20.4461C18.3423 20.5347 18.411 20.6034 18.4996 20.6034H20.3996C20.4869 20.6034 20.5569 20.5294 20.5569 20.4421V12.0504C20.5569 12.0504 20.353 8.28307 17.5409 8.22207Z" />
                    <path d="M11.1525 9.54333L8.3262 7.86133C8.16287 7.76266 7.9562 7.85933 7.93554 8.04933C7.91487 8.23933 8.07954 8.39466 8.26021 8.32833L10.9212 7.45666C9.99521 7.67533 9.00553 8.024 8.15288 8.59933C7.71554 8.87266 7.28754 9.20533 6.91954 9.61133C7.6762 8.94266 9.70686 8.188 12.6855 9.086C13.4789 9.312 14.2309 9.62867 14.9195 10.026C13.3969 7.97 10.4049 6.77333 9.65021 6.57467L11.7282 8.042C11.8942 8.154 12.0589 8.27933 12.2195 8.41533C12.3935 8.56133 12.5595 8.716 12.7182 8.87933C12.2082 9.06733 11.6742 9.29267 11.1528 9.54333H11.1525Z" />
                  </svg>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[240px] h-[480px] rounded-[2rem] border-[10px] border-gray-900 dark:border-gray-700 overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-5 bg-gray-900 dark:bg-gray-700 z-20 rounded-t-lg flex items-center justify-center">
                  <div className="h-1 w-16 bg-gray-800 dark:bg-gray-600 rounded-full"></div>
                </div>
                {/* Mock App Screen */}
                <div className="w-full h-full overflow-hidden">
                  <div className="bg-somi-500 text-white p-4 h-16 flex items-center">
                    <div className="font-semibold text-lg">Today's Rides</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 h-[calc(100%-64px)] overflow-y-auto">
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 border border-gray-100 dark:border-gray-600">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center space-x-2">
                              <div className="h-8 w-8 rounded-full bg-somi-100 flex items-center justify-center">
                                <Car className="h-4 w-4 text-somi-700" />
                              </div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">Downtown Ride</div>
                            </div>
                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                              8:30 AM
                            </div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                            <div>From: Westgate</div>
                            <div>2 seats left</div>
                          </div>
                          <Button className="w-full text-xs py-1 h-8 rounded-lg bg-somi-500 hover:bg-somi-600">
                            Join
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rides;
