import { TabletSmartphone, BarChart3, Megaphone } from 'lucide-react';

export const servicesContent = {
    header: {
        title: "Solucionem els reptes de mobilitat de la vostra comunitat", // posar reptes de mobilitat en groc
        description:
            "Ens adaptem a les necessitats de cada territori o organització, treballant de manera propera i personal.",
        ctaPrimary: {
            label: "Descobreix els nostres serveis",
            href: "#services-details",
        },
        ctaSecondary: {
            label: "Contacta amb nosaltres",
            href: "#contacte",
        },
    },
    servicesHeader: "Els nostres serveis per organitzacions",
    services: [
        {
            icon: TabletSmartphone,
            title: "L'app",
            items: [
                "📱 App disponible per a tots els membres de la vostra comunitat.",
                "🏛️ Imatge institucional integrada.",
                "👥 Gestió d'una comunitat oficial de l'organització.",
                "✅ Sistema de verificació de membres.",
            ],
            image: "/assets/images/map-pins--geojango-maps.jpg", // Photo by <a href="https://unsplash.com/@geojango_maps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">GeoJango Maps</a> on <a href="https://unsplash.com/photos/person-holding-red-round-medication-pill-Z8UgB80_46w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            imageSrcSet: "/assets/images/map-pins--geojango-maps-640w.webp 640w, /assets/images/map-pins--geojango-maps.webp 1200w",
            alt: "Map pins image by GeoJango Maps",
            imageAuthor: "GeoJango Maps",
            imageCreditLink: "https://unsplash.com/@geojango_maps",
        },
        {
            icon: BarChart3,
            title: "Dades i control directe",
            items: [
                "📊 Taula de control amb dades en temps real.",
                "🗓️ Informe periòdic amb les dades d'ús i impacte més rellevants.",
                "⚙️ Adaptació del projecte a les vostres necessitats.",
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
                "🧭 Estratègia de comunicació adaptada a la vostra comunitat.",
                "💬 Atenció als membres i gestió d'incidències.",
                "🛠️ Suport tècnic continu.",
                "🔔 Sistema de notificacions i avisos.",
            ],
            image: "/assets/images/marketing--luis-villasmil.jpg", // Photo by <a href="https://unsplash.com/@luisviol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luis Villasmil</a> on <a href="https://unsplash.com/photos/person-holding-black-smartphone-4V8uMZx8FYA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            imageSrcSet: "/assets/images/marketing--luis-villasmil-640w.webp 640w, /assets/images/marketing--luis-villasmil.webp 1200w",
            alt: "Workteam image by Luis Villasmil",
            imageAuthor: "Luis Villasmil",
            imageCreditLink: "https://unsplash.com/@luisviol",
        },
    ],
};
