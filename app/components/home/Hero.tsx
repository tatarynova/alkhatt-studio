import Button from '../ui/Button';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-start">
            {/* Background image */}
            <div
            className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary-dark/60"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 text-left text-primary-light max-w-4xl px-20">
                <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                    Preserving. <br />
                    Teaching. <br />
                    Evolving.
                </h1>

                <p className="text-xl md:text-xl font-light mb-12 text-primary-light">
                    The traditional Islamic arts <br />
                    for contemorary generations.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-start">
                    <Button variant='primary' href='/about'>
                        explore the studio
                    </Button>
                    <Button variant='secondary' href='/courses'>
                        view courses
                    </Button>
                </div>
            </div>
        </section>
    );
}