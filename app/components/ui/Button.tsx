import Link from "next/link";

export default function Button({ variant, href, children }: {variant: "primary" | "secondary"; href: string; children: React.ReactNode }) {
    const variantStyles = {
        primary: "border border-primary-light bg-transparent text-primary-light hover:bg-primary-light hover:text-primary-dark",
        secondary: "border border-accent-gold bg-transparent text-accent-gold hover:bg-accent-gold hover:text-primary-dark"
    }

    const baseStyles = "px-8 py-3 transition-all duration-300 inline-block uppercase";

    const styles = variantStyles[variant];

    const fullClassName = `${baseStyles} ${styles}`;

    return (
        <Link href={href} className={fullClassName}>
            {children}
        </Link>
    );
}