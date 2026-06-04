import NuqtaDiamond from "../components/ui/NuqtaDiamond";

export default function StudioPage() {
  return (
    <main>


      {/* Hero section */}
      <section className="relative h-screen md:h-screen flex items-end justify-start">

        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
          <div className="absolute inset-0 bg-primary-dark/60"></div>
        </div>


        {/* Content */}
        <div className="relative z-10 text-left text-primary-light max-w-4xl px-6 py-16 md:px-28 md:py-34">
          <p className="text-xl md:text-xl font-light text-accent-gold uppercase">About Al Khatt</p>
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            Rooted in heritage. <br />
            <span className="italic">Guided by creativity.</span> <br />
            Driven by purpose.
          </h1>
        </div> 

      </section>


      {/* About Studio */}
      <section className="py-12 px-6 md:py-24 md:px-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div className="space-y-6">
              <h3 className="text-accent-gold uppercase text-xs">- about the studio</h3>
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark leading-tight">More than a studio - <br />
              a <span className="font-style: italic">living tradition.</span> </h2>
              <p className="font-light text-primary-dark leading-tight">Al Khatt Studio is a multidisciplinary creative studio dedicated to the preservation, education, and evolution of the traditional Islamic arts. Rooted in heritage and guided by creativity, we exist to inspire deeper connection through artistic practice, cultural learning, and community.</p>
              <p className="font-light text-primary-dark leading-tight">We believe the Islamic arts are living expressions of beauty, meaning, discipline, and identity that continue to shape the way we see ourselves and the world around us.</p>
              <p className="font-light text-primary-dark leading-tight">Our work focuses on Arabic calligraphy, geometric design, illumination, and manuscript arts — while embracing contemporary approaches that allow these traditions to evolve and speak to modern audiences.</p>
              <a href="/about" className="text-sm uppercase tracking-widest text-primary-dark hover:text-accent-gold transition-colors duration-300">Find out more → </a>
            </div>
            {/* Right column */}
            <div className="mx-auto">
              <NuqtaDiamond></NuqtaDiamond>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-primary-dark/20 py-6 mx-6 md:py-12 md:mx-16"></div>   
      {/* Founder section */}
      <section className="py-12 px-6 md:py-24 md:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <p className="font-light text-primary-dark leading-tight">
            Zakariyya is an Arabic calligrapher, artist, and designer — and the founding vision behind Al Khatt Studio. His work explores the space where traditional Islamic artistic practice meets contemporary visual expression, creating pieces that are grounded in heritage yet speak to modern eyes.
          </p>
          <p className="font-light text-primary-dark leading-tight">
            Specialising in the Thuluth script, Zakariyya is a dedicated student of the classical tradition, currently studying under a master calligrapher in both Thuluth and Naskh. His practice is shaped by deep respect for the historical weight and technical rigour of these traditions, even as he continues to push their boundaries through design, abstraction, and material exploration
          </p>
          <a href="/founder" className="uppercase tracking-widest text-primary-dark hover:text-accent-gold transition-colors duration-300">Find out more → </a>
        </div>
      </section>
    </main>
  );
}