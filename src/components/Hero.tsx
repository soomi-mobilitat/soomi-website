
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-28 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-somi-50/50 to-white dark:from-gray-900/20 dark:to-gray-900 -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC41Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6TTM2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHpNMTYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] -z-10"></div>
      
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-somi-100 text-somi-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-somi-500 mr-2"></span>
              Viatge compartit basat en comunitats
            </div>
            
            <h1 className="heading-xl text-gray-900 dark:text-white mb-6">
              Comparteix viatges amb la teva<br />
              <span className="text-gradient">comunitat</span>
            </h1>
            
            <p className="body-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Somi et connecta amb la teva comunitat per a un transport compartit fàcil, sostenible i econòmic. Crea o uneix-te a viatges dins de les teves xarxes de confiança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="rounded-full bg-somi-500 hover:bg-somi-600 text-white px-8 py-6 button-hover-effect">
                Comença Ara
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 button-hover-effect">
                Com Funciona
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="rounded-full p-2 bg-somi-100 text-somi-700">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Comunitats</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Uneix-te a xarxes de confiança</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="rounded-full p-2 bg-somi-100 text-somi-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Viatges</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Crea o uneix-te a viatges</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="rounded-full p-2 bg-somi-100 text-somi-700">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Calendari</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Planifica els teus trajectes</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - App visualization */}
          <div className="relative flex justify-center lg:justify-end animate-on-scroll">
            <div className="relative z-10 w-[280px] sm:w-[320px] h-[580px] sm:h-[620px] rounded-[2.5rem] border-[12px] border-gray-900 dark:border-gray-700 overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 dark:bg-gray-700 z-20 rounded-t-lg flex items-center justify-center">
                <div className="h-1.5 w-20 bg-gray-800 dark:bg-gray-600 rounded-full"></div>
              </div>
              <div className="w-full h-full bg-white dark:bg-gray-800 overflow-hidden">
                {/* App Screen Mockup */}
                <div className="relative h-full">
                  {/* App Header */}
                  <div className="p-4 bg-somi-500 text-white">
                    <div className="mb-2 pt-4 flex justify-between items-center">
                      <div className="text-lg font-semibold">Somi</div>
                      <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Users size={16} />
                      </div>
                    </div>
                    <div className="text-xs opacity-80">Comunitat Westgate</div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4">
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">PRÒXIMS VIATGES</h3>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-somi-100 flex items-center justify-center">
                              <span className="text-xs font-medium text-somi-800">JD</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Viatge d'en Joan</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Centre • 3 seients</div>
                            </div>
                          </div>
                          <div className="text-xs font-medium bg-somi-100 text-somi-800 px-2 py-1 rounded-full">
                            8:30 AM
                          </div>
                        </div>
                        <Button className="w-full rounded-lg bg-somi-500 hover:bg-somi-600 text-white text-xs h-8">
                          Unir-se al Viatge
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-somi-100 flex items-center justify-center">
                              <span className="text-xs font-medium text-somi-800">SM</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Viatge de la Sara</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Centre Comercial • 2 seients</div>
                            </div>
                          </div>
                          <div className="text-xs font-medium bg-somi-100 text-somi-800 px-2 py-1 rounded-full">
                            14:15
                          </div>
                        </div>
                        <Button className="w-full rounded-lg bg-somi-500 hover:bg-somi-600 text-white text-xs h-8">
                          Unir-se
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">COMUNITATS</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <div className="h-10 w-10 rounded-full bg-somi-200 flex items-center justify-center">
                            <Users size={18} className="text-somi-700" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">Comunitat Westgate</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">128 membres</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                            <Users size={18} className="text-gray-700 dark:text-gray-300" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">Usuaris Tech Park</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">76 membres</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center px-2">
                    <div className="flex flex-col items-center">
                      <div className="h-6 w-6 rounded-full bg-somi-100 flex items-center justify-center">
                        <Users size={14} className="text-somi-800" />
                      </div>
                      <span className="text-[10px] mt-1 text-somi-800">Grups</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <MapPin size={14} className="text-gray-600 dark:text-gray-400" />
                      </div>
                      <span className="text-[10px] mt-1 text-gray-600 dark:text-gray-400">Viatges</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <Calendar size={14} className="text-gray-600 dark:text-gray-400" />
                      </div>
                      <span className="text-[10px] mt-1 text-gray-600 dark:text-gray-400">Calendari</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 h-64 w-64 bg-somi-200/30 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-20 -left-20 h-72 w-72 bg-somi-100/40 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
