import Link from "next/link";

export default function NavLink({ href, children }: {href:string; children: React.ReactNode}) {
    return (
        <Link href={href} className="relative font-light group text-sm tracking-wide text-light text-primary-light">
            {children}
            <span className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary-light group-hover:w-full transition-all duration-400 ease-out"></span>
        </Link>
        
        // <a href={href} className="relative font-light group text-sm tracking-wide text-light text-primary-light">
        //     {children}
        //     <span className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary-light group-hover:w-full transition-all duration-400 ease-out"></span>
        // </a>
    );
}