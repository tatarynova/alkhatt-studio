import Button from '../ui/Button';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-end justify-start">
            {/* Background image */}
            <div
            className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary-dark/60"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 text-left text-primary-light max-w-4xl py-12 px-6 md:py-24 md:px-28">
                <h1 className="text-3xl md:text-5xl font-light leading-tight">
                    Preserving. <br />
                    Teaching. <br />
                    Evolving.
                </h1>

                <p className="text-xl md:text-xl font-light mb-12 text-primary-light">
                    The traditional Islamic arts <br />
                    for contemporary generations.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <Button variant='primary' href='/studio'>
                        explore the studio
                    </Button>
                    <Button variant='secondary' href='/learn'>
                        view courses
                    </Button>
                </div>
            </div>
        </section>
    );
}