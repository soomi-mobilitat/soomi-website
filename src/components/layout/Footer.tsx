import { navItems, footerContent } from './Layout.data';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">

        {/* Top row: 3 columns */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-8">

          {/* Column 1: Logo + slogan */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/icons/secondary_logo_mark-cropped.svg"
                alt="Somi logo"
                className="invisible h-0 w-auto sm:h-12 sm:visible"
              />
              <img
                src="/assets/icons/main_logo_mark-cropped.svg"
                alt="Somi logo"
                className="visible h-24 w-auto sm:h-0 sm:invisible"
              />
            </div>
            <p className="text-gray-600 text-sm mb-6">
              {footerContent.slogan}
            </p>
          </div>

          {/* Column 2: Email, vertically centered */}
          <div className="flex-1 flex items-center justify-center text-center md:text-left text-sm text-gray-600">
            {footerContent.contactLabel}
            <a
              href={`mailto:${footerContent.email}`}
              className="text-somi-500 font-extrabold text-xl md:text-2xl tracking-wide hover:underline ml-2"
            >
              {footerContent.email}
            </a>
          </div>

          {/* Column 3: Navigation items */}
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
          <p>© {new Date().getFullYear()} Somi. {footerContent.disclaimers.rights}</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <span>{footerContent.disclaimers.privacy}</span>
            <span>{footerContent.disclaimers.info}</span>
            <span>{footerContent.disclaimers.cookies}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
