import { TabletSmartphone, BarChart3, Megaphone } from 'lucide-react';

export const municipalServicesSection = {
    header: {
        badge: "Serveis per organitzacions",
        title: "Solucionem els reptes de mobilitat al teu municipi, empresa o institució",
        subtitle:
            "Ajudem als Ajuntaments i altres organitzacions a diversificar les opcions de transport de la seva comunitat i els oferim un major control sobre la mobilitat del seu territori.",
        description:
            "Ens adaptem a les necessitats de cada municipi o organització, treballant de manera propera i personal.",
        ctaPrimary: {
            label: "Descobreix els nostres serveis",
            href: "#services-details",
        },
        ctaSecondary: {
            label: "Contacta amb nosaltres",
            href: "#contact",
        },
    },
    servicesHeader: "Els nostres serveis per ajuntaments i organitzacions",
    services: [
        {
            icon: TabletSmartphone,
            title: "L'App",
            items: [
                "📱 App premium privada: amb totes les funcionalitats i comunitats oficials.",
                "🏛️ Imatge institucional i verificació oficial personalitzada.",
                "👥 Comunitats oficials dels habitants del municipi o membres de l’organització.",
                "✅ Sistema de verificació antifrau i de seguretat.",
            ],
            image: "/assets/images/map-pins--geojango-maps.jpg", // Photo by <a href="https://unsplash.com/@geojango_maps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">GeoJango Maps</a> on <a href="https://unsplash.com/photos/person-holding-red-round-medication-pill-Z8UgB80_46w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            alt: "Map pins image by GeoJango Maps",
            imageAuthor: "GeoJango Maps",
            imageCreditLink: "https://unsplash.com/@geojango_maps",
        },
        {
            icon: BarChart3,
            title: "Dades i control directe",
            items: [
                "📊 Taula de control amb dades en temps real.",
                "🗓️ Informe semestral amb els punts més rellevants.",
                "⚙️ Adaptació del projecte segons les necessitats.",
                "🎁 Disseny d’incentius per compartir trajectes.",
            ],
            image: "/assets/images/dashboard--deng-xiang.jpg", // Photo by <a href="https://unsplash.com/@dengxiangs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Deng Xiang</a> on <a href="https://unsplash.com/photos/graphical-user-interface--WXQm_NTK0U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            alt: "Dashboard image by Deng Xiang",
            imageAuthor: "Deng Xiang",
            imageCreditLink: "https://unsplash.com/@dengxiangs",
        },
        {
            icon: Megaphone,
            title: "Comunicació i màrqueting",
            items: [
                "🧭 Estratègia de comunicació adaptada a cada territori o organització.",
                "💬 Atenció als membres i gestió d’incidències.",
                "🛠️ Suport tècnic continu.",
                "🔔 Sistema de notificacions i avisos personalitzats.",
            ],
            image: "/assets/images/marketing--luis-villasmil.jpg", // Photo by <a href="https://unsplash.com/@luisviol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luis Villasmil</a> on <a href="https://unsplash.com/photos/person-holding-black-smartphone-4V8uMZx8FYA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            alt: "Workteam image by Luis Villasmil",
            imageAuthor: "Luis Villasmil",
            imageCreditLink: "https://unsplash.com/@luisviol",
        },
    ],
    creditFooter: {
        imagesBy: "Imatges de",
        and: "i",
        onUnsplash: "a Unsplash",
    },
};
