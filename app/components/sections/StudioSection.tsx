export default function StudioSection() {
    return (
        <section className="py-24 px-24">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-accent-gold uppercase text-center text-xs">about alkhatt</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left column */}
                    <div className="space-y-6">

                        <p className="text-3xl font-light text-primary-dark leading-tight">A multidisciplinary creative studio dedicated to the preservation, education and evolution of the Islamic arts. </p>
                        <p className="text-xs text-primary-dark/70 max-w-md leading-relaxed">Rooted in heritage and guided by creativity, we exist to inspire deeper connection through artistic practice, cultural learning, and community.</p>
                        <a href="/about" className="text-xs uppercase tracking-widest text-primary-dark hover:text-accent-gold transition-colors duration-300">Our story → </a>
                    </div>

                    {/* Rigth column */}
                    <div className="relative pb-8 pl-8 order-first md:order-last">
                        <img className="w-full h-96 object-cover" src="/images/studio-section.jpg" alt="Al Khatt Studio" />
                        <div className="absolute h-80 top-[50px] right-[-50px] bg-primary-dark text-primary-light px-8 max-w-xs text-center flex flex-col justify-center">
                            <p>Rooted in heritage</p>
                            <p>Guided by creativity</p>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
}