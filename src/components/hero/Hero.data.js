export const heroContent = {
    slogan: {
        main: 'Comunitat en',
        highlight: 'moviment',
    },
    descriptionInBold: 'Soomi',
    description: [
        { emphasis: false, text: ' connecta conductors i passatgers en ' },
        { emphasis: true, text: 'comunitats locals' },
        { emphasis: false, text: ' de confiança, facilitant ' },
        { emphasis: true, text: 'compartir trajectes habituals' },
        { emphasis: false, text: ' de manera ' },
        { emphasis: true, text: 'eficient, segura i sostenible' },
        { emphasis: false, text: '.' },
    ],
    cta: 'Com funciona',
    features: [
        {
            icon: 'Users',
            title: 'Comunitats',
            description: 'Connecta amb la teva comunitat.',
        },
        {
            icon: 'MapPin',
            title: 'Trajectes',
            description: 'Crea o sol·licita trajectes.',
        },
        {
            icon: 'Calendar',
            title: 'Calendari',
            description: 'Planifica els teus desplaçaments.',
        },
    ],
};

// Fixed order: on wide screens they pair up as (communities, calendar) and (invitation, trips)
export const heroScreenshots = [
    { src: '/assets/images/soomi-screenshots/4_m6plz.webp', alt: 'Llista de comunitats a l\'app Soomi' },
    { src: '/assets/images/soomi-screenshots/1_m6plz.webp', alt: 'Calendari setmanal amb els trajectes de la comunitat' },
    { src: '/assets/images/soomi-screenshots/7_m6plz.webp', alt: 'Invitació a un trajecte per acceptar o rebutjar' },
    { src: '/assets/images/soomi-screenshots/3_m6plz.webp', alt: 'Trajectes disponibles amb horari, preu i places lliures' },
];
