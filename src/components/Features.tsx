
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
      title: 'Comptes d\'Usuari',
      description: 'Registra\'t via correu, telèfon o serveis de tercers. Crea el teu perfil i configura les teves preferències de viatge.'
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: 'Comunitats',
      description: 'Crea o uneix-te a comunitats públiques i privades per organitzar viatges dins de grups de confiança.'
    },
    {
      icon: <Car className="h-7 w-7" />,
      title: 'Creació de Viatges',
      description: 'Crea viatges amb punts de sortida i arribada, hora, seients disponibles i opcions de compartir costos.'
    },
    {
      icon: <Calendar className="h-7 w-7" />,
      title: 'Calendari de Viatges',
      description: 'Calendari comunitari per a la planificació de viatges i coordinació d\'esdeveniments amb opcions de sincronització externa.'
    },
    {
      icon: <MessageSquare className="h-7 w-7" />,
      title: 'Comunicació',
      description: 'Xats comunitaris i específics per viatge per coordinar detalls i discussions.'
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: 'Seguretat i Privacitat',
      description: 'Perfils d\'usuari amb configuració de visibilitat i sistema de denúncies per comportaments inapropiats.'
    },
    {
      icon: <CreditCard className="h-7 w-7" />,
      title: 'Gestió de Costos',
      description: 'Costs de viatge suggerits basats en la distància i el nombre de passatgers amb seguiment opcional de pagaments.'
    },
    {
      icon: <Bell className="h-7 w-7" />,
      title: 'Notificacions',
      description: 'Rep alertes d\'actualitzacions de viatges, missatges comunitaris i anuncis importants.'
    },
  ];

  return (
    <section id="features" className="page-section py-24 bg-somi-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-somi-100 text-somi-800 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-somi-500 mr-2"></span>
            Característiques
          </div>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Tot el que necessites per a compartir cotxe <span className="text-gradient">basat en comunitats</span>
          </h2>
          <p className="body-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Somi ofereix un conjunt complet d'eines dissenyades per fer que compartir cotxe dins de les comunitats sigui
            senzill, segur i agradable per a tothom.
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

        <div className="mt-24 bg-gradient-to-br from-somi-500 to-somi-700 rounded-3xl p-8 md:p-12 text-somi-900 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="heading-md mb-4">Preparat per transformar el transport de la teva comunitat?</h3>
              <p className="text-somi-900/80 mb-6">
                Uneix-te a Somi avui i comença a construir una xarxa de viatges compartits més sostenible, connectada i econòmica dins la teva comunitat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-white text-somi-700 font-medium rounded-full hover:bg-white/90 transition-colors">
                  Comença Ara
                </button>
                <button className="px-6 py-3 bg-transparent border border-white/60 rounded-full hover:bg-white/10 transition-colors text-somi-900">
                  Saber-ne Més
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm text-somi-900/90">Comunitats</div>
              </div>
              <div className="p-4 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">5K+</div>
                <div className="text-sm text-somi-900/90">Usuaris Actius</div>
              </div>
              <div className="p-4 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">10K+</div>
                <div className="text-sm text-somi-900/90">Viatges Compartits</div>
              </div>
              <div className="p-4 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-sm text-somi-900/90">CO2 Estalviat (kg)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
