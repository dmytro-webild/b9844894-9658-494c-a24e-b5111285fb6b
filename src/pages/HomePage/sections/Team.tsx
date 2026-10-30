import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Shirt, UserCheck, Clock, Crown } from "lucide-react";

const staffStandards = [
  {
    title: "Professional Attire",
    description: "Every crew member arrives in standardized formal attire—black tie, classic server uniform, or bistro style, crisp and immaculate.",
    icon: Shirt,
  },
  {
    title: "Trained & Vetted",
    description: "Rigorously background-checked and evaluated for fine dining etiquette, banquet service, food safety, and guest interaction.",
    icon: UserCheck,
  },
  {
    title: "Punctual & Prepared",
    description: "Crews arrive early for mandatory pre-event briefings, ensuring full venue familiarity and operational readiness before guests arrive.",
    icon: Clock,
  },
  {
    title: "Led by Captains",
    description: "Every deployment is spearheaded by an experienced captain who manages service pacing, directs floor crews, and liaises directly with planners.",
    icon: Crown,
  },
];

export default function TeamSection() {
  return (
    <div data-webild-section="team" data-section="team" id="team">
      <section aria-label="Our Professional Staff" className="py-20">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col items-center gap-2 w-content-width mx-auto text-center">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>Event Personnel</p>
            </div>

            <TextAnimation
              text="Our Professional Staff"
              variant="slide-up"
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text="Our staffing standards ensure seamless, reliable execution for caterers, event planners, and venue hosts across NYC and Long Island."
              variant="slide-up"
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
            />
          </div>

          <ScrollReveal variant="fade-blur">
            <div className="w-content-width mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {staffStandards.map((standard) => {
                const IconComponent = standard.icon;
                return (
                  <div
                    key={standard.title}
                    className="flex flex-col gap-4 p-6 xl:p-7 card rounded h-full border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center shrink-0 size-12 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <IconComponent className="size-6 text-amber-400" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-semibold leading-snug text-foreground">{standard.title}</h3>
                      <p className="text-base leading-relaxed text-foreground/80">{standard.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

