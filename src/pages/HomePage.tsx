import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesBento from '@/components/sections/features/FeaturesBento';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TeamOverlayCards from '@/components/sections/team/TeamOverlayCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="Premier Staffing Solutions"
      title="Elevate Your Events with Professional Staff"
      description="Vinanza provides top-tier hospitality and event personnel tailored for corporate, private, and large-scale gatherings."
      primaryButton={{
        text: "Get a Quote",        href: "#contact"}}
      secondaryButton={{
        text: "Our Services",        href: "#features"}}
      items={[
        { imageSrc: "http://img.b2bpic.net/free-photo/people-taking-part-business-event_23-2149333663.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/lovely-family-enjoying-new-year-party_23-2149173314.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/partners-sitting-table-working-cafe_1157-28472.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-drinking-champagne-outdoors_197531-5879.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-staff-standing_107420-85117.jpg" },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Why Choose Vinanza"
      title="Staffing Excellence Driven by Quality"
      description="We specialize in matching talented, trained individuals with high-impact events. Our commitment to professionalism ensures every guest is treated with exceptional service."
      items={[
        { icon: "CheckCircle", title: "Verified Talent", description: "Rigorous vetting process to ensure professionalism." },
        { icon: "Shield", title: "Fully Insured", description: "Complete coverage for peace of mind." },
        { icon: "Zap", title: "Rapid Deployment", description: "Last-minute scaling capabilities." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/people-working-their-office_23-2149196434.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBento
      tag="Our Expertise"
      title="Comprehensive Event Solutions"
      description="Tailored staffing solutions for diverse event categories."
      features={[
        {
          title: "Corporate Events",          description: "Professional support for meetings and conferences.",          bentoComponent: "info-card-marquee",          infoCards: [
            { icon: "Briefcase", label: "Events", value: "500+" },
            { icon: "Users", label: "Staff", value: "200+" },
          ],
        },
        {
          title: "Hospitality Crew",          description: "Top tier waitstaff and service teams.",          bentoComponent: "tilted-stack-cards",          stackCards: [
            { icon: "Users", title: "Server", subtitle: "Staff", detail: "Expert catering service." },
            { icon: "Clock", title: "Bar", subtitle: "Tender", detail: "Professional mixing." },
            { icon: "Star", title: "Host", subtitle: "Service", detail: "Welcoming experience." },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Impact"
      title="Proven Results in Event Staffing"
      description="Delivering excellence at every touchpoint."
      metrics={[
        { value: "98%", title: "Client Satisfaction", features: ["On-time delivery", "Professionalism"] },
        { value: "250+", title: "Events Staffed", features: ["Corporate", "Weddings"] },
        { value: "1500+", title: "Service Hours", features: ["Hospitality", "Operations"] },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamOverlayCards
      tag="Leadership"
      title="Meet Our Management Team"
      description="Dedicated professionals committed to event success."
      members={[
        { name: "Elena Vance", role: "Director", imageSrc: "http://img.b2bpic.net/free-photo/businessman-dress-code-holding-black-jacket-his-arm_114579-15947.jpg" },
        { name: "Marcus Thorne", role: "Ops Lead", imageSrc: "http://img.b2bpic.net/free-photo/young-trans-man-working-as-waiter_23-2149409815.jpg" },
        { name: "Sarah Jenkins", role: "Recruiting", imageSrc: "http://img.b2bpic.net/free-photo/male-jeweler-working-shop_23-2150914246.jpg" },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="Trust"
      title="What Our Clients Say"
      description="Real feedback from satisfied event organizers."
      testimonials={[
        { name: "Jessica Lee", role: "Event Planner", company: "Global Gala", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/colleagues-having-fun-business-event_23-2149370487.jpg" },
        { name: "David Smith", role: "COO", company: "CorpConnect", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-mature-businessman-with-crossed-arms-standing-restaurant_23-2147955310.jpg" },
        { name: "Amelia Ross", role: "Manager", company: "Luxury Events", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/male-guest-waiting-check_482257-79729.jpg" },
        { name: "Brian K.", role: "Director", company: "Elite Hospitality", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/handsome-tattooed-man-summer-terrace-city-cafe-is-drinking-wine-street-cafe_1321-20.jpg" },
        { name: "Sophie P.", role: "Founder", company: "Vogue Galas", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-portrait-beautiful-woman_23-2148317338.jpg" },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Q&A"
      title="Common Questions"
      description="Everything you need to know about our staffing services."
      categories={[
        { name: "General", items: [{ question: "How far in advance should we book?", answer: "We recommend 2 weeks, but can handle urgent requests." }, { question: "Are your staff insured?", answer: "Yes, all staff are fully covered." }] },
        { name: "Services", items: [{ question: "What types of events do you staff?", answer: "Corporate, private, wedding, and large conferences." }] },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to staff your next event with professional excellence?"
      primaryButton={{ text: "Contact Us", href: "mailto:hello@vinanza.com" }}
      secondaryButton={{ text: "Book Now", href: "#" }}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}