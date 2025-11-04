// AboutUs.data.js
import { Leaf, Globe, Users, Bolt, LandPlot, Handshake } from 'lucide-react';

/// REFER COMPLETAMENT

export const aboutUsSection = {
    header: {
        title: "Per què hem creat Somi",
        // subtitle: "Durant la nostra etapa universitària vam experimentar de primera mà les dificultats de desplaçar-nos cada dia. Moltes persones necessiten moure's diàriament per estudiar, treballar o participar en tot tipus d'activitats, i vam veure la necessitat d'una solució millor. Somi neix per connectar persones i territoris, oferint desplaçaments més eficients i sostenibles, i fomentant comunitats cohesionades i col·laboratives."
        subtitle: [
            { emphasis: false, text: "Durant la nostra etapa universitària vam experimentar de primera mà les " },
            { emphasis: true, text: "dificultats de desplaçar-nos cada dia" },
            { emphasis: false, text: ". Moltes persones necessiten moure's " },
            { emphasis: true, text: "diàriament" },
            { emphasis: false, text: " per estudiar, treballar o participar en tot tipus d'activitats, i vam veure la necessitat d'una " },
            { emphasis: true, text: "solució millor" },
            { emphasis: false, text: ". Somi neix per " },
            { emphasis: true, text: "connectar persones i territoris" },
            { emphasis: false, text: ", oferint desplaçaments més " },
            { emphasis: true, text: "eficients i sostenibles" },
            { emphasis: false, text: ", i fomentant comunitats cohesionades i " },
            { emphasis: true, text: "col·laboratives" },
            { emphasis: false, text: "." }
        ]
    },
    challengesHeader: "Els nostres reptes",
    challenges: [
        { icon: Globe, text: "Transport sostenible i eficient per al dia a dia" },
        { icon: Leaf, text: "Territoris connectats i en igualtat d'oportunitats" },
        { icon: Users, text: "Comunitats organitzades i cohesionades" },
    ],
    valuesHeader: "Els nostres valors",
    values: [
        { icon: Bolt, text: "Eficiència" },
        { icon: Leaf, text: "Sostenibilitat" },
        { icon: LandPlot, text: "Igualtat territorial" },
        { icon: Handshake, text: "Cooperació" },
    ],
};
