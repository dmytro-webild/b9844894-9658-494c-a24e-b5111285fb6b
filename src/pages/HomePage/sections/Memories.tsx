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
            imageSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229987-709vf8u8.jpg",
          },
          {
            name: "On-Site Team",
            category: "Our Core Team",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229991-82uw83mp.mp4",
          },
          {
            name: "Service Execution",
            category: "Event Service",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229994-p01fyivp.mp4",
          },
          {
            name: "Staff Operations",
            category: "Vinanza Personnel",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229995-cfmtokiw.mp4",
          },
          {
            name: "Event Highlights",
            category: "Memories",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229997-ffke6uym.mp4",
          },
          {
            name: "Captain Supervision",
            category: "Our Core Team",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344230003-y2nh6rxp.mp4",
          },
          {
            name: "Banquet Support",
            category: "Event Service",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344230005-q9kz0i40.mp4",
          },
          {
            name: "Uniformed Crew",
            category: "Vinanza Personnel",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344230008-upem48y6.mp4",
          },
          {
            name: "Event Hospitality",
            category: "Memories",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344230010-tm56r2uj.mp4",
          },
        ]}
      />
    </div>
  );
}
