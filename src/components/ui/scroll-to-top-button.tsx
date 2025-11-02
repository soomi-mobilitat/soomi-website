import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300); // show after 300px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <a
            href="/#"
            aria-label="Torna a dalt"
            className="fixed bottom-6 right-6 bg-somi-500 text-white p-3 rounded-full shadow-lg hover:bg-somi-600 transition-colors"
        >
            <ArrowUp size={20} />
        </a>
    );
};

export default ScrollToTopButton;
