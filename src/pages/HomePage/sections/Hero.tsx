// Created by add_section_from_catalog (HeroBrandCarousel).

import React from 'react';
import HeroBrandCarousel from '@/components/sections/hero/HeroBrandCarousel';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBrandCarousel
        primaryButton={{"text":"Get a Quote","href":"#contact"}}
        brand="Vinanza"
        secondaryButton={{"href":"#features","text":"Our Services"}}
        textAnimation="slide-up"
        items={[{"imageSrc":"https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1783485233634-6bmwb7vm.jpg"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3GCXkgaOrxONyQE8SfG9tbExgNj/uploaded-1783485233634-6bmwb7vm.jpg"},{"imageSrc":"https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=2070"}]}
        description="Elevate Your Events with Professional Staff. Vinanza provides top-tier hospitality and event personnel tailored for corporate, private, and large-scale gatherings."
      />
    </div>
  );
}
