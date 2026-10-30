import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const members = [
  {
    name: "David",
    role: "Captain Lead",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1783478473070-shm5mxkp.png"
  },
  {
    name: "Josue",
    role: "Senior Server",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1783478473073-qq9abrct.png"
  },
  {
    name: "Seif",
    role: "Kitchen Staff",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1783478549327-e2031yx1.png"
  },
  {
    name: "Antonio",
    role: "Lead Bartender",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1783479156931-5lqjnxyk.png"
  }
];

const TeamInline = () => (
  <section aria-label="Team section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
        <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
          <p>{"Event Personnel"}</p>
        </div>

        <TextAnimation
          text={"Experienced On-Site Crew"}
          variant={"slide-up"}
          gradientText={true}
          tag="h2"
          className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
        />

        <TextAnimation
          text={"Seasoned captains who lead crews, attentive waiters, professional bartenders, and kitchen staff for NYC & Long Island events."}
          variant={"slide-up"}
          gradientText={false}
          tag="p"
          className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
        />
      </div>

      <ScrollReveal variant="fade">
        <GridOrCarousel>
          {members.map((member) => (
            <div key={member.name} className="relative aspect-4/5 card rounded">
              <div className="relative w-full h-full rounded overflow-hidden">
                <ImageOrVideo imageSrc={member.imageSrc} />

                <div className="absolute inset-x-4 bottom-4 xl:inset-x-5 xl:bottom-5 2xl:inset-x-6 2xl:bottom-6 flex items-center justify-between gap-4 xl:gap-5 2xl:gap-6 p-4 xl:p-5 2xl:p-6 card backdrop-blur-sm rounded">
                  <span className="text-xl font-semibold leading-snug truncate">{member.name}</span>
                  <div className="px-3 py-2 text-sm primary-button text-primary-cta-text rounded">
                    <p className="truncate">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default function TeamSection() {
  return (
    <div data-webild-section="team" data-section="team" id="team">
      <TeamInline />
    </div>
  );
}
