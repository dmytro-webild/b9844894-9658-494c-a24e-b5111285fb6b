import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Capabilities", href: "#features" },
    { name: "Standards", href: "#metrics" },
    { name: "Our Staff", href: "#team" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <StyleProvider buttonVariant="default" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
          logo="Vinanza LLC"
          logoImageSrc="https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1783480187867-d78kum3a.png"
          ctaButton={{
            text: "Request Staff", href: "#contact"}}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
          brand="Vinanza LLC"
          email="vinanzallc@gmail.com"
          phone="(929) 489-6802"
          copyright="© 2026 Vinanza LLC. All rights reserved."
          columns={[
            {
              items: [
                { label: "About Vinanza LLC", href: "#about" },
                { label: "Staffing Capabilities", href: "#features" },
                { label: "Operational Standards", href: "#metrics" },
              ],
            },
            {
              items: [
                { label: "Our Professional Staff", href: "#team" },
                { label: "Frequently Asked Questions", href: "#faq" },
                { label: "Contact & Booking", href: "#contact" },
              ],
            },
          ]}
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}