// AboutUs.data.js
import { Leaf, Globe, Users, Bolt, LandPlot, Handshake } from 'lucide-react';

/// REFER COMPLETAMENT

export const missionContent = {
    header: {
        title: "Per què hem creat Somi ?", // posar somi en groc
        subtitle: [
            { emphasis: false, text: "La demanda de " },
            { emphasis: true, text: "cotxes compartits" },
            { emphasis: false, text: " a Europa " },
            { emphasis: true, text: "creix" },
            { emphasis: false, text: " de manera contínua, amb increments de " },
            { emphasis: true, text: "+10% l'any" },
            { emphasis: false, text: " i augments acumulats de " },
            { emphasis: true, text: "+20-30%" },
            { emphasis: false, text: " en període triennal." }
        ],
        sourceLabel: "* Fluctuo, European Shared Mobility Index (Q1 2024), publicat per l'European Urban Mobility Observatory (Comissió Europea).",
        sourceLink: "https://marketplace.eiturbanmobility.eu/insights/what-are-the-current-shared-mobility-trends-european-shared-mobility-index?utm_source=chatgpt.com",
    },
    banner: {
        image: "/assets/images/cars-banner--benjamin-fay.jpg", // Photo by <a href="https://unsplash.com/@radcartier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benjamin Fay</a> on <a href="https://unsplash.com/photos/a-city-street-filled-with-lots-of-traffic-q4kD6q3pD7Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        alt: "City street filled with lots of traffic image by Benjamin Fay",
        imageAuthor: "Benjamin Fay",
        imageCreditLink: "https://unsplash.com/@radcartier",
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
