import NuqtaDiamond from "../components/ui/NuqtaDiamond";
import Nuqta from "../components/ui/Nuqta";
import { Shield, GraduationCap, Sprout, Globe } from "lucide-react";

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

            <div className="border-transparent border-r pr-6 md:border-primary-dark/20 space-y-6">
              <h3 className="text-accent-gold uppercase text-xs">- about the studio</h3>
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark leading-tight">More than a studio - <br />
              a <span className="font-style: italic">living tradition.</span> </h2>
              <p className="font-light text-primary-dark leading-tight">Al Khatt Studio is a multidisciplinary creative studio dedicated to the preservation, education, and evolution of the traditional Islamic arts. Rooted in heritage and guided by creativity, we exist to inspire deeper connection through artistic practice, cultural learning, and community.</p>
              <p className="font-light text-primary-dark leading-tight">We believe the Islamic arts are living expressions of beauty, meaning, discipline, and identity that continue to shape the way we see ourselves and the world around us.</p>
              <p className="font-light text-primary-dark leading-tight">Our work focuses on Arabic calligraphy, geometric design, illumination, and manuscript arts — while embracing contemporary approaches that allow these traditions to evolve and speak to modern audiences.</p>
              <a href="/about" className="text-sm uppercase tracking-widest text-primary-dark hover:text-accent-gold transition-colors duration-300">Find out more → </a>
            </div>

            {/* Right column */}

            <div className="mx-auto space-y-6">
              <div className="mx-auto flex gap-8 justify-between items-center">
                <Nuqta color="accent" size="medium"></Nuqta>
                <div className="mx-auto max-w-100vw">
                  <NuqtaDiamond></NuqtaDiamond>
                </div>
                <Nuqta color="accent" size="medium"></Nuqta>
              </div>
              <div className="bg-accent-red/10 border-l-[3px] border-accent-red p-6">
                <p className="italic font-light text-primary-dark leading-tight">"Every masterpiece begins with a single point. Creativity begins the same way - with a single intention, a single mark, a single step into the unknown."</p>
                <p className="pt-3 font-light text-sm leading-tight uppercase text-accent-red">- The nuqta philosophy</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Value section */}

      <section className="py-12 px-6 md:py-24 md:px-28 bg-accent-blue height-screen">

        {/* flex box with titles */}
        {/* Section titles */}
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-accent-red uppercase text-xs">- our values</h3>
            <h2 className="text-2xl md:text-3xl font-light text-primary-light leading-tight">What we stand for,<br />
            a <span className="font-style: italic">and why it matters.</span> </h2> 
          </div>

          <div>
            <p className="text-right text-primary-light/50 font-light leading-tight text-xs">Each value flows from the meaning of the Nuqta <br /> - the single point from which all things begin</p>
          </div>
        </div>

        {/* grid with columns */}
        {/* Values */}
        <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-1 pt-10">
          <div className="bg-primary-light/10 text-primary-light space-y-3 px-6 py-12 hover:scale-102 transition-transform duration-500">
            <Shield size={40}></Shield>
            <h4 className="text-accent-red uppercase text-light text-xs">01 - preserve</h4>
            <h3 className="text-2xl md:text-xl">Honour timeless traditions</h3>
            <p className="text-primary-light/50 font-light leading-tight text-xs">We safeguard thesacred art forms that have connected generations - Arabic calligraphy, geometric design, and manuscript arts - ensuring they remain vital and alive</p>
          </div>
          <div className="bg-primary-light/10 text-primary-light space-y-3 px-6 py-12 hover:scale-102 transition-transform duration-500">
            <GraduationCap size={40}></GraduationCap>
            <h4 className="text-accent-red uppercase text-light text-xs">02 - educate</h4>
            <h3 className="text-2xl md:text-xl">Share knowledge and skill</h3>
            <p className="text-primary-light/50 font-light leading-tight text-xs">Throught courses,  workshops, and resources, we make the discipline and depth of Islamic arts accessible to learners at every stage of their journey.</p>
          </div>
          <div className="bg-primary-light/10 text-primary-light space-y-3 px-6 py-12 hover:scale-102 transition-transform duration-500">
            <Sprout size={40}></Sprout>
            <h4 className="text-accent-red uppercase text-light text-xs">03 - nurture</h4>
            <h3 className="text-2xl md:text-xl">Cultivate creative confidence</h3>
            <p className="text-primary-light/50 font-light leading-tight text-xs">Art transforms. We nurture creative confidence and personal growth, helping individuals reconnect with intention, presence, and inner purpose through practice.</p>
          </div>
          <div className="bg-primary-light/10 text-primary-light space-y-3 px-6 py-12 hover:scale-102 transition-transform duration-500">
            <Globe size={40}></Globe>
            <h4 className="text-accent-red uppercase text-light text-xs">04 - connect </h4>
            <h3 className="text-2xl md:text-xl">Build inclusive community</h3>
            <p className="text-primary-light/50 font-light leading-tight text-xs">We are a global gathering place for artistsm students, and creatie - creating spaces where culture, cretivity, and belonging can be explored with depth and sincerity.</p>
          </div>
        </div>

      </section>

      <div className="border-t border-primary-dark/20 py-6 mx-6 md:py-12 md:mx-16"></div>

      {/* Founder section */}
      <section className="py-12 px-6 md:py-24 md:px-28">
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