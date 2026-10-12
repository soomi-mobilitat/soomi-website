import { navItems, footerContent } from './Layout.data';

const Footer = () => {

  const startYear = footerContent.disclaimers.webCreationYear;
  const currentYear = new Date().getFullYear();

  const yearDisplay =
    startYear === currentYear
      ? startYear
      : `${startYear}–${currentYear}`;

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 py-8 md:py-6">

        {/* Top row: 3 columns */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">

          {/* Column 1: Logo + slogan */}
          <div className="flex flex-col items-center gap-1">
            <img
              src="/assets/icons/main_logo_mark-cropped.svg"
              alt="Soomi logo"
              width={79}
              height={80}
              loading="lazy"
              className="h-20 w-auto px-8"
            />
            <p className="text-gray-600 text-sm text-center">{footerContent.slogan}</p>
          </div>

          {/* Column 2: Email, vertically centered */}
          <div className="flex-1 flex items-center justify-center text-center md:text-left text-sm text-gray-600">
            {footerContent.contactLabel}
            <a
              href={`mailto:${footerContent.email}`}
              className="text-soomi-500 font-extrabold text-xl md:text-2xl tracking-wide hover:underline ml-2"
            >
              {footerContent.email}
            </a>
          </div>

          {/* Column 3: Navigation items */}
          <div className="grid grid-cols-2 gap-4">
            {[
              navItems.slice(0, Math.ceil(navItems.length / 2)),
              navItems.slice(Math.ceil(navItems.length / 2)),
            ].map((column, colIndex) => (
              <div
                key={colIndex}
                className={`${colIndex === 0 ? "text-left" : "text-right"} flex flex-col space-y-2`}
              >
                {column.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-soomi-600 text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: horizontal line + copyright & disclaimers */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-gray-500 text-xs">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2">
            <p>© {yearDisplay} Soomi. {footerContent.disclaimers.rights}</p>
            {footerContent.legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="underline underline-offset-2 hover:text-soomi-600"
              >
                {link.name}
              </a>
            ))}
          </div>
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
