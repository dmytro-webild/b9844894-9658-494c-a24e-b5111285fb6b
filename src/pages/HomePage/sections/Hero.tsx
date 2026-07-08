// Created by add_section_from_catalog (HeroBrand).

import React from 'react';
import HeroBrand from '@/components/sections/hero/HeroBrand';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBrand
        textAnimation="slide-up"
        imageSrc="http://img.b2bpic.net/free-photo/people-taking-part-business-event_23-2149333663.jpg"
        secondaryButton={{"href":"#features","text":"Our Services"}}
        primaryButton={{"href":"#contact","text":"Get a Quote"}}
        description="Elevate Your Events with Professional Staff. Vinanza provides top-tier hospitality and event personnel tailored for corporate, private, and large-scale gatherings."
        brand="Vinanza"
      />
    </div>
  );
}
