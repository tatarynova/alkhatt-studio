export default function StudioPage() {
  return (
    <main>
      {/* Hero section */}
      <section className="relative h-screen flex items-end justify-start">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
          <div className="absolute inset-0 bg-primary-dark/60"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 text-left text-primary-light max-w-4xl px-28 py-34">
          <p className="text-xl md:text-xl font-light text-accent-gold uppercase">About Al Khatt</p>
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            Rooted in heritage. <br />
            Guided by creativity. <br />
            Driven by purpose.
          </h1>
        </div>          
      </section>
      {/* About Studio */}
      <section className="py-12 px-6 md:py-24 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="space-y-6">
              <p className="font-light text-primary-dark leading-tight">Al Khatt Studio is a creative home for the traditional Islamic arts — a space where Arabic calligraphy, geometric design, illumination, and manuscript arts are not relics of the past, but living, breathing practices for the present.</p>
              <p className="font-light text-primary-dark leading-tight">We exist at the intersection of heritage and creativity. Our work is rooted in the belief that these art forms carry something rare: a capacity to slow us down, reconnect us with beauty, and return us to ourselves. In a world that moves fast and forgets deeply, the Islamic arts offer a path back to intentionality and presence.</p>
              <p className="font-light text-primary-dark leading-tight">Through courses, workshops, events, and a growing creative community, Al Khatt Studio is building something more than a platform — a place where artists, students, and curious souls can learn, grow, and belong. Whether you are picking up a reed pen for the first time or deepening a lifelong practice, there is space for you here.</p>
              <p className="font-light text-primary-dark leading-tight">Every composition begins with a single point — the Nuqta. So does every journey. This is yours.</p>
              <a href="/about" className="uppercase tracking-widest text-primary-dark hover:text-accent-gold transition-colors duration-300">Find out more → </a>
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