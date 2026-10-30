import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";

const primaryButton = {
  text: "Email vinanzallc@gmail.com",
  href: "mailto:vinanzallc@gmail.com"
};
const secondaryButton = {
  text: "Call (929) 489-6802",
  href: "tel:9294896802"
};

const ContactInline = () => {
  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade-blur">
          <div className="flex flex-col items-center gap-8 md:gap-10 py-20 px-8 rounded card">
            <div className="flex flex-col items-center gap-2">
              <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                <p>{"Get In Touch"}</p>
              </div>

              <TextAnimation
                text={"Reserve Event Personnel for Your Next NYC or Long Island Gathering"}
                variant={"fade"}
                gradientText={true}
                tag="h2"
                className="md:max-w-8/10 text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
              />

              <p className="text-lg md:text-xl text-center text-balance text-foreground/80 max-w-2xl mt-2">
                Providing captains, waiters/servers, bartenders, and kitchen staff for caterers, corporate galas, and weddings. 6-hour minimum booking per shift.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
                <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default function ContactSection() {
  return (
    <div data-webild-section="contact" data-section="contact" id="contact">
      <ContactInline />
    </div>
  );
}
