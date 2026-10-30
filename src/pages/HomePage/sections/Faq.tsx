import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function FaqSection(): React.JSX.Element {
  return (
    <div id="faq" data-section="faq">
      <SectionErrorBoundary name="faq">
        <FaqTabbedAccordion
          tag="FAQ"
          title="Frequently Asked Questions"
          description="Operational details for caterers, event planners, and venue managers booking Vinanza LLC staff."
          categories={[
            {
              name: "Booking Requirements",
              items: [
                {
                  question: "What is the shift minimum for booking Vinanza LLC staff?",
                  answer: "We require a 6-hour minimum shift per staff member across all bookings in New York City and Long Island. This ensures full pre-event preparation and shift consistency."
                },
                {
                  question: "Which geographic areas does Vinanza LLC cover?",
                  answer: "We provide event personnel throughout all five boroughs of New York City (Manhattan, Brooklyn, Queens, Bronx, Staten Island) and across Long Island (Nassau and Suffolk counties)."
                }
              ]
            },
            {
              name: "Roles & Expertise",
              items: [
                {
                  question: "What staffing roles do you supply?",
                  answer: "We supply professional waiters/servers, bartenders, kitchen staff, and seasoned captains who lead crews on-site during your event."
                },
                {
                  question: "Do you have experience working with kosher caterers?",
                  answer: "Yes. Our team is well-versed in working alongside specialized caterers, including kosher caterers, adhering strictly to kitchen protocols and event standards."
                },
                {
                  question: "How are on-site crews managed during an event?",
                  answer: "Every shift includes a designated Vinanza LLC captain who leads the crew on-site, serving as the central contact for the planner or catering manager."
                }
              ]
            }
          ]}
          textAnimation="slide-up"
        />
      </SectionErrorBoundary>
    </div>
  );
}
