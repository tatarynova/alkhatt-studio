import Nuqta from "./Nuqta";
import LogoMark from "./LogoMark";

export default function Logo({ 
    size = "default", color = "dark"
 }: { 
    size?: "default" | "large"
    color?: "dark" | "light" 
}) {
    return (
        <div>
            <a href="/">
                <div className="flex items-center gap-2">
                    <LogoMark color={color}></LogoMark>
                    <span className={`flex items-center gap-1 text-primary-light tracking-wider uppercase ${size === "large" ? "text-2xl" : "text-xl" } ${ color === "light" ? "text-primary-light" : "text-primary-dark"}  ` }>al <Nuqta size="default" color="accent"></Nuqta> khatt</span>
                </div>
            </a>
        </div>
    );
}