import Hero from './components/home/Hero';
import StudioSection from './components/home/StudioSection';
import Offerings from './components/home/WhatWeOffer';
import Courses from './components/home/CoursesSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  
  return (
    <main>
      <Hero />
      <StudioSection />
      <Offerings />
      <Courses />
      <CTASection />
    </main>
  );
}
// secondary dark color is not shown