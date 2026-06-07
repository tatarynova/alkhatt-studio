'use client';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
    {
        title: "Introduction to Arabic Caligraphy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu eros gravida, hendrerit enim suscipit, consequat nulla. Morbi ac interdum.",
        image: "/images/offerings1.jpg",
        href: "#",
        type: "online"
    },
    {
        title: "Creative workshop",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu eros gravida, hendrerit enim suscipit, consequat nulla. Morbi ac interdum.",
        image: "/images/offerings2.jpg",
        href: "#",
        type: "in-person"
    },
    {
        title: "The history of Caligraphy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu eros gravida, hendrerit enim suscipit, consequat nulla. Morbi ac interdum.",
        image: "/images/offerings3.jpg",
        href: "#",
        type: "online"
    },
]

function CourseCard({ title, description, image, href, type }:{ 
    title: string; 
    description: string; 
    image: string; 
    href: string; 
    type: string
 }) {
    return (
        <div className="rounded-lg overflow-hidden flex flex-col h-full group">

            <div className="relative">
                <img 
                className="w-full h-56 object-cover group-hover:scale-102 transition-transform duration-500" src={image} alt={title} />
                {/* Badge on top of image */}
                <div className="absolute top-45 left-4 bg-primary-light/90 px-3 py-0.1 rounded-sm">
                    <span className="text-xs uppercase text-accent-gold tracking-widest">{type}</span>
                </div>
            </div>  

            <div className="bg-primary-light p-5 flex flex-col flex-1 font-light space-y-3">
                <h3 className="text-base">{title}</h3>
                <p className="text-xs leading-relaxed flex-1">{description}</p>
                <a href={href} className="uppercase text-xs tracking-widest hover:text-accent-gold transition-colors duration-300 mt-auto">learn more →</a>
            </div>
        </div>
    );
}

export default function Courses() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 3; 
    const maxIndex = courses.length - visibleCount; 

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };
    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    return(
        <section className="py-12 px-6 md:py-24 md:px-28 text-primary-dark">
            {/* div for the entire section */}
            <div className="max-w-7xl mx-auto">
                {/* div for titles before courses cards */}
                <div className="mb-12">
                    <p className="text-center text-accent-gold uppercase text-xs mb-4">featured</p>
                    <h2 className="text-center text-2xl font-light text-primary-dark leading-tight">Courses & Workshops</h2>
                </div>

                <div className="flex items-center gap-4">

                    {/* left arrow */}
                    <button 
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="flex-shrink-0 p-2 text-primary-dark disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300">
                        <ChevronLeft size={20} />
                    </button>

                    <div className="overflow-hidden flex-1">
                        <div className="flex gap-6 transition-transform duration-500 ease-out" style={{transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`}}>
                            {courses.map(item => (
                                <div key={item.title} className="w-[85vw] sm:w-[45vw] md:w-80 h-[420px]">
                                <CourseCard {...item} />
                                </div>
                            ))}
                        </div>                    
                    </div>
                    <button 
                    onClick={handleNext}
                    disabled={currentIndex === maxIndex}
                    className="flex-shrink-0 p-2 text-primary-dark disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300">
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="text-center py-16">
                    <a href="/courses" className="text-xs uppercase tracking-widest hover:text-accent-gold transition-colors duration-300">View all Courses & Workshops → </a>
                </div>                
            </div>    
        </section>
    );
}
