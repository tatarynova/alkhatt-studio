import Nuqta from "./Nuqta";

export default function Logo({ size = "default"}: { size?: "default" | "large"}) {
    return (
        <div>
            <a href="/">
                <div className="flex items-center gap-2">
                    <img width={40} src="/images/logo.png" alt="logo" />
                    <span className={`flex items-center gap-1 text-primary-light tracking-wider uppercase ${size === "large" ? "text-2xl" : "text-xl" }  ` }>al <Nuqta size="default" color="default"></Nuqta> khatt</span>
                </div>
            </a>
        </div>
    );
}