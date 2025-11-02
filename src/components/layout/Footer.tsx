import { navItems } from './Layout.data';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">

        {/* Top row: 3 columns */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-8">

          {/* Column 1: Logo + slogan */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/assets/icons/logo_compact.svg" alt="Somi logo" className="h-12 w-auto"></img>
              <span className="font-bold text-2xl text-gray-900">
                Somi
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Comunitat en moviment
            </p>
          </div>

          {/* Column 2: Email, vertically centered */}
          <div className="flex-1 flex items-center justify-center">
            Escriu-nos a&nbsp;
            <a
              href="mailto:contacte@somi.cat"
              className="text-somi-500 font-extrabold text-xl md:text-2xl tracking-wide hover:underline"
            >
              contacte@somi.cat
            </a>
          </div>

          {/* Column 3: Navigation items in two columns */}
          <div className="grid grid-cols-2 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-somi-600 text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: horizontal line + copyright & disclaimers */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Somi. Tots els drets reservats.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <span>No recollim dades personals dels visitants.</span>
            <span>Contingut informatiu i promocional.</span>
            <span>No utilitzem cookies de tercers.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
