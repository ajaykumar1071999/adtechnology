import React from 'react';
import Carousel from './Carousel/Carousel';
import CourseSection from './CourseSection/CourseSection';
import IntroTII from './IntroTII/IntroTII';
import ParentSupport from './ParentSupport/ParentSupport';
import BlogSection from './BlogSection/BlogSection';
import ConsultationSection from './ConsultationSection/ConsultationSection';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import JoinUs from './JoinUs/JoinUs';

export default function Home() {
  return (
    <div>
      <Carousel/>
      <CourseSection/>
      <IntroTII />
        <ParentSupport />
        <BlogSection />
        <ConsultationSection />
        <TestimonialSection />
        <JoinUs />
    </div>
  )
}
