export default function Logo({ size = "default"}: { size?: "default" | "large"}) {
    return (
        <div>
            <a href="/">
                <div className="flex items-center gap-2">
                    <img width={40} src="/images/logo.png" alt="logo" />
                    <span className={`text-primary-light tracking-wider uppercase ${size === "large" ? "text-2xl" : "text-xl" }  ` }>al·khatt</span>
                </div>
            </a>
        </div>
    );
}