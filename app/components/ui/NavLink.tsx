import Link from "next/link";

export default function NavLink({ color = "default", href, children }: { color?: "default" | "accent"; href:string; children: React.ReactNode}) {
    return (
        <Link href={href} className={`relative font-light group text-sm tracking-wide text-light ${color === "accent" ? "text-accent-gold" : "text-primary-light" } ` }>
            {children}
            <span className={`absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-0 h-[1px] group-hover:w-full transition-all duration-400 ease-out ${color === "accent" ? "bg-accent-gold" : "bg-primary-light" } ` }></span>
        </Link>
    );
}