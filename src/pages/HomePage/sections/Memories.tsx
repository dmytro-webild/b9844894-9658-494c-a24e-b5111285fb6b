import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';

export default function MemoriesSection() {
  return (
    <div data-webild-section="memories" id="memories">
      <AboutMediaOverlay
        tag="Memories"
        title="Our Core Team"
        description="A look back at some of the best moments with our dedicated staff who make every event special."
        imageSrc="https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1783479835343-gyj7ipr0.jpg"
        textAnimation="slide-up"
      />
    </div>
  );
}