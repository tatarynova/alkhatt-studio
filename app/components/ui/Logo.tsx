export default function Logo() {
    return (
        // change color to light later
        // add rhumb instead of dot later
        <div>
            <a href="/">
                <div className="flex items-center gap-2">
                    <img width={40} src="/images/logo.png" alt="logo" />
                    <span className="text-xl text-primary-light tracking-wider uppercase" >al·khatt</span>
                </div>
            </a>
        </div>
    );
}