import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";

export default function MemoriesSection() {
  return (
    <div data-webild-section="memories" data-section="memories" id="memories">
      <FeaturesFilterGrid
        tag="Event Service"
        title="Vinanza Staffing Personnel"
        description="Our professional crew in action, delivering reliable service standards to caterers and planners across New York City and Long Island."
        categories={["Memories", "Our Core Team", "Event Service", "Vinanza Personnel"]}
        textAnimation="slide-up"
        items={[
          {
            name: "Event Setup",
            category: "Memories",
            imageSrc: "vinanza-event-photo-1.jpg",
          },
          {
            name: "On-Site Team",
            category: "Our Core Team",
            videoSrc: "vinanza-event-video-1",
          },
          {
            name: "Service Execution",
            category: "Event Service",
            videoSrc: "vinanza-event-video-3",
          },
          {
            name: "Staff Operations",
            category: "Vinanza Personnel",
            videoSrc: "vinanza-event-video-4",
          },
          {
            name: "Event Highlights",
            category: "Memories",
            videoSrc: "vinanza-event-video-5",
          },
          {
            name: "Captain Supervision",
            category: "Our Core Team",
            videoSrc: "vinanza-event-video-6",
          },
          {
            name: "Banquet Support",
            category: "Event Service",
            videoSrc: "vinanza-event-video-7",
          },
          {
            name: "Uniformed Crew",
            category: "Vinanza Personnel",
            videoSrc: "vinanza-event-video-8",
          },
          {
            name: "Event Hospitality",
            category: "Memories",
            videoSrc: "vinanza-event-video-9",
          },
        ]}
      />
    </div>
  );
}
