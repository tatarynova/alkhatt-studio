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

function CourseCard({ title, description, image, href, type }:{ title: string; description: string; image: string; href: string; type: string }) {
    return (
        <div>
            <div className="relative rounded-lg overflow-hidden">
                <img className="w-full h-56 object-cover" src={image} alt={title} />

                {/* Badge on top of image */}
                <div className="absolute top-45 left-4 bg-primary-light/90 px-3 py-0.1 rounded-sm text-accent-gold">
                    <span className="text-xs uppercase text-accent-gold tracking-widest">{type}</span>
                </div>

                {/* Concent below image */}
                <div className="bg-primary-light p-5 font-light space-y-1">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={href} className="uppercase text-xs tracking-widest hover:text-accent-gold transition-colors duration-300">learn more →</a>
                </div>
            </div>  
        </div>
    );
}

export default function Courses() {
    return(
        <section className="space-y-3 py-24 px-24 text-primary-dark">
            <div>
                <p className="text-accent-gold uppercase text-center text-xs">featured</p>
                <h2 className="text-2xl text-center font-light text-primary-dark leading-tight">Courses</h2>
            </div>
            <div className="grid grid-cols-3 gap-16 items-center mt-12">
                {courses.map(item => (<CourseCard key={item.title} {...item} />))}
            </div>
            <div className="text-center">
                <a href="/courses" className="text-xs uppercase tracking-widest hover:text-accent-gold transition-colors duration-300">View all Courses & Workshops → </a>
            </div>
        </section>
    );
}