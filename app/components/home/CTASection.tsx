import Button from "../ui/Button";

export default function CTASection() {
    return (
        <section className="py-12 px-6 md:py-24 md:px-16 bg-primary-dark">
            <div className="text-primary-light text-center mb-3">
                <h3 className="text-2xl font-light leading-tight mb-3">Begin Your Creative Jorney</h3>
                <div className="leading-relaxed font-light">
                    <p>Explore courses, join a workshop,</p>
                    <p>connect with a community</p>                    
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" href="/learn">Explore Courses</Button>
                <Button variant="secondary" href="/community">Join Community</Button>
            </div>
        </section>
    );
}