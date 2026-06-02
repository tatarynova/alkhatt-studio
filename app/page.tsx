import Hero from './components/home/Hero';
import StudioSection from './components/home/StudioSection';
import Offerings from './components/home/WhatWeOffer';
import Courses from './components/home/CoursesSection';

export default function Home() {
  
  return (
    <main>
      <Hero />
      <StudioSection />
      <Offerings />
      <Courses />
    </main>
  );
}
// secondary dark color is not shown