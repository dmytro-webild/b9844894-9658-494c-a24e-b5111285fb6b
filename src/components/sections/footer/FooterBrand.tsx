import { ChevronRight, Mail, Phone } from "lucide-react";
import { useButtonClick } from "@/hooks/useButtonClick";
import AutoFillText from "@/components/ui/AutoFillText";

type FooterLink = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type FooterColumn = {
  items: FooterLink[];
};

const FooterLinkItem = ({ label, href, onClick }: FooterLink) => {
  const handleClick = useButtonClick(href, onClick);

  return (
    <div className="flex items-center gap-2 text-base">
      <ChevronRight className="size-4 shrink-0" strokeWidth={3} aria-hidden="true" />
      <button
        onClick={handleClick}
        className="text-base text-primary-cta-text font-semibold hover:opacity-75 transition-opacity cursor-pointer text-left"
      >
        {label}
      </button>
    </div>
  );
};

const FooterBrand = ({
  brand,
  columns,
  email = "vinanzallc@gmail.com",
  phone = "(929) 489-6802",
  copyright = "© 2026 Vinanza LLC. All rights reserved.",
}: {
  brand: string;
  columns: FooterColumn[];
  email?: string;
  phone?: string;
  copyright?: string;
}) => {
  const handleEmailClick = useButtonClick(`mailto:${email}`);
  const handlePhoneClick = useButtonClick(`tel:9294896802`);

  return (
    <footer
      data-section="footer"
      aria-label="Site footer"
      className="w-full pt-15 pb-8 mt-20 rounded-t-lg overflow-hidden primary-button text-primary-cta-text"
    >
      <div className="w-content-width mx-auto flex flex-col gap-10 md:gap-14">
        <AutoFillText className="font-semibold">{brand}</AutoFillText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col items-start gap-3">
              {column.items.map((item) => (
                <FooterLinkItem key={item.label} label={item.label} href={item.href} onClick={item.onClick} />
              ))}
            </div>
          ))}

          {/* Contact Info Column */}
          <div className="flex flex-col items-start gap-3">
            {email && (
              <div className="flex items-center gap-2 text-base">
                <Mail className="size-4 shrink-0 text-primary-cta-text" strokeWidth={2.5} aria-hidden="true" />
                <button
                  onClick={handleEmailClick}
                  className="text-base text-primary-cta-text font-semibold hover:opacity-75 transition-opacity cursor-pointer text-left"
                >
                  {email}
                </button>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-2 text-base">
                <Phone className="size-4 shrink-0 text-primary-cta-text" strokeWidth={2.5} aria-hidden="true" />
                <button
                  onClick={handlePhoneClick}
                  className="text-base text-primary-cta-text font-semibold hover:opacity-75 transition-opacity cursor-pointer text-left"
                >
                  {phone}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-6 border-t border-primary-cta-text/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-primary-cta-text/80">
          <p>{copyright}</p>
          <p>NYC & Long Island Event Staffing</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBrand;

