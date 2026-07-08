// Created by add_section_from_catalog (HeroBillboardBrand).

import React from 'react';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBillboardBrand
        brand="Vinanza"
        secondaryButton={{"href":"#features","text":"Our Services"}}
        imageSrc="http://img.b2bpic.net/free-photo/people-taking-part-business-event_23-2149333663.jpg"
        textAnimation="slide-up"
        description="Elevate Your Events with Professional Staff. Vinanza provides top-tier hospitality and event personnel tailored for corporate, private, and large-scale gatherings."
        primaryButton={{"text":"Get a Quote","href":"#contact"}}
      />
    </div>
  );
}
