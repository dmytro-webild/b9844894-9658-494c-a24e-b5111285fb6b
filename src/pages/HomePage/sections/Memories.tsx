import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";

export default function MemoriesSection() {
  return (
    <div data-webild-section="memories" data-section="memories" id="memories">
      <FeaturesFilterGrid
        tag="Event Service"
        title="Vinanza Staffing Personnel"
        description="Our professional crew in action, delivering reliable service standards to caterers and planners across New York City and Long Island."
        categories={["Front of House", "Kitchen Staff", "Event Displays", "Highlights"]}
        textAnimation="slide-up"
        items={[
          {
            name: "Buffet Service",
            category: "Front of House",
            imageSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229987-709vf8u8.jpg?_wi=2",
          },
          {
            name: "Carving Station",
            category: "Kitchen Staff",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229991-82uw83mp.mp4",
          },
          {
            name: "Outdoor Grill Station",
            category: "Event Displays",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229994-p01fyivp.mp4",
          },
          {
            name: "Banquet Room Setup",
            category: "Front of House",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229995-cfmtokiw.mp4",
          },
          {
            name: "Event Highlights",
            category: "Highlights",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344229997-ffke6uym.mp4",
          },
          {
            name: "Fresh Fruit Display",
            category: "Event Displays",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344230003-y2nh6rxp.mp4",
          },
          {
            name: "Chef-Attended Station",
            category: "Kitchen Staff",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344230005-q9kz0i40.mp4",
          },
          {
            name: "Kitchen Team at Work",
            category: "Kitchen Staff",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344230008-upem48y6.mp4",
          },
          {
            name: "Plating & Garnish",
            category: "Highlights",
            videoSrc: "https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1793344230010-tm56r2uj.mp4",
          },
        ]}
      />
    </div>
  );
}
