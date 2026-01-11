// AboutUs.data.js
import { Leaf, Globe, Users, Bolt, LandPlot, Handshake } from 'lucide-react';

/// REFER COMPLETAMENT

export const missionContent = {
    header: {
        title: [
            { emphasis: false, text: "Per què hem creat " },
            { emphasis: true, text: "Soomi" },
            { emphasis: false, text: " ?" },
        ],
        subtitle: [
            { emphasis: false, text: "La nostra missió és construir un " },
            { emphasis: true, text: "territori" },
            { emphasis: false, text: " interconnectat, on la " },
            { emphasis: true, text: "mobilitat" },
            { emphasis: false, text: " quotidiana sigui sinònim d'" },
            { emphasis: true, text: "eficiència" },
            { emphasis: false, text: " i cooperació, i generar una xarxa de comunitats més unides i " },
            { emphasis: true, text: "sostenibles" },
            { emphasis: false, text: "." }
        ],
    },
    banner: {
        image: "/assets/images/car-banner--averie-woodard--soomi-edit.jpg", // Photo by <a href="https://unsplash.com/@averieclaire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">averie woodard</a> on <a href="https://unsplash.com/photos/woman-sitting-on-roof-of-white-sedan-Tfzlo-KdPxo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        alt: "Young woman in denim sitting on car roof by averie woodard.",
        imageAuthor: "averie woodard",
        imageCreditLink: "https://unsplash.com/@averieclaire",
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
