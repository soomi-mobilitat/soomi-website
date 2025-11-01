import { TabletSmartphone, BarChart3, Megaphone } from 'lucide-react';

export const municipalServicesSection = {
    header: {
        badge: "Serveis per Ajuntaments",
        title: "Solucionem els reptes de mobilitat als municipis",
        subtitle:
            "Ajudem als Ajuntaments a diversificar les opcions de transport de la seva comunitat i els oferim un major control sobre la mobilitat del seu territori.",
        description:
            "Ens adaptem a les necessitats de cada municipi, treballant de manera propera i personal.",
        ctaPrimary: {
            label: "Descobreix els nostres serveis",
            href: "#services-list",
        },
        ctaSecondary: {
            label: "Contacta amb nosaltres",
            href: "#download-contact",
        },
    },
    servicesHeader: "Els nostres serveis per ajuntaments",
    services: [
        {
            icon: TabletSmartphone,
            title: "L'App",
            items: [
                "📱 App premium privada: amb totes les funcionalitats i comunitats oficials.",
                "🏛️ Imatge institucional i verificació oficial personalitzada.",
                "👥 Comunitats oficials dels habitants del municipi.",
                "✅ Sistema de verificació antifrau i de seguretat.",
            ],
            image: "aa", // substitueix amb el camí real
            alt: "App preview",
        },
        {
            icon: BarChart3,
            title: "Dades i control directe",
            items: [
                "📊 Taula de control amb dades en temps real.",
                "🗓️ Informe semestral amb els punts més rellevants.",
                "⚙️ Adaptació del projecte segons les necessitats.",
                "🎁 Disseny d'incentius per compartir trajectes.",
            ],
            image: "aa",
            alt: "Dashboard preview",
        },
        {
            icon: Megaphone,
            title: "Comunicació i màrqueting",
            items: [
                "🧭 Estratègia de comunicació adaptada a cada territori.",
                "💬 Atenció als membres i gestió d'incidències.",
                "🛠️ Suport tècnic continu.",
                "🔔 Sistema de notificacions i avisos personalitzats.",
            ],
            image: "aa",
            alt: "Marketing preview",
        },
    ],
};
