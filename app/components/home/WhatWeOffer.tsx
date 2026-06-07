import { title } from "process";

const offerings = [
    {
        title: "Courses",
        description: "Structured learning experiences",
        image: "/images/offerings1.jpg",
        href: "/courses"
    },
    {
        title: "Workshops",
        description: "In-person and online creative gatherings",
        image: "/images/offerings2.jpg",
        href: "/workshops"
    },
    {
        title: "Community",
        description: "Connection, collaboration and support",
        image: "/images/offerings3.jpg",
        href: "#"
    },
    {
        title: "Resources",
        description: "Guides, tools and creative materials",
        image: "/images/offerings4.jpg",
        href: "#"
    },
    {
        title: "Shop",
        description: "Artwork prints and creative products",
        image: "/images/offerings5.jpg",
        href: "/shop"
    },
    {
        title: "Events",
        description: "Exhibitions and experiences",
        image: "/images/offerings6.jpg",
        href: "/events"
    }
];

function OfferingCard({ title, description, image, href }: {title: string; description: string; image: string; href: string }) {
    return (
        <a href={href} className="group">
            <div className="overflow-hidden mb-4">
                <img src={image} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="font-light text-primary-dark">
                <h3 className="uppercase">{title}</h3>
                <p>{description}</p> 
            </div>
        </a>
    )
}

export default function Offerings() {
    return(
        <section className="py-12 px-6 md:py-24 md:px-28">
            <div className="max-w-7xl mx-auto">
                <div>
                    <p className="text-accent-gold uppercase text-center text-xs py-3">explore</p>
                    <h2 className="text-2xl text-center font-light text-primary-dark leading-tight">What We Offer</h2>
                </div>
                <div className="grid grid-cols-1 md:grid md:grid-cols-3 md:gap-16 items-center mt-12">
                    {offerings.map(item => (<OfferingCard key={item.title} {...item} /> ))}
                </div>
            </div>
        </section>
    );
}