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
        title: "The history og Caligraphy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu eros gravida, hendrerit enim suscipit, consequat nulla. Morbi ac interdum.",
        image: "/images/offerings3.jpg",
        href: "#",
        type: "online"
    },
]

function CourseCard({ title, description, image, href, type }:{ title: string; description: string; image: string; href: string; type: string }) {
    return (
        // image as a bg in div and text as an overlay div
        <a href={href}>
            <div>
                <img src={image} />
                {/* type of the course label */}
                <div>
                    <span>{type}</span>
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>  
        </a>
    );
}

export default function Courses() {
    return(
        <section>
            <div>
                <p className="text-accent-gold uppercase text-center text-xs py-3">features</p>
                <h2 className="text-2xl text-center font-light text-primary-dark leading-tight">Courses</h2>
            </div>
            <div className="grid grid-cols-3 gap-16 items-center mt-12">
                {courses.map(item => (<CourseCard key={item.title} {...item} />))}
            </div>
        </section>
    );
}