import Logo from "../ui/Logo";
import Link from "next/link";
import IconButton from "../ui/IconButton";
import { Mail } from 'lucide-react';
import InstagramIcon from "../ui/InstagramIcon";

export default function Footer() {
    return (
        <footer className="relative backdrop-blur-sm text-primary-light bg-primary-dark">
            <nav className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-2 md:grid md:grid-cols-4 md:gap-16 items-start"> 
                    {/* column 1: Branding */}
                    <div>
                        <Logo></Logo>
                        {/* input tagline */}
                        <p className="text-xs font-light py-2">Preserving, teaching and developing the traditional Islamic Arts for contemporary generations.</p>
                        {/* social media */}
                        <div className="flex items-center gap-8">
                            <IconButton href="#"><InstagramIcon></InstagramIcon></IconButton>
                            <IconButton href="#"><Mail size={20} /></IconButton>
                        </div>
                    </div>
                    {/* column 2: studio section */}
                    <div>
                        <h4 className="text-accent-gold uppercase"><Link href="/studio">Studio</Link></h4>
                        <ul className="text-xs font-light py-2">
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/founder">Founder</Link></li>
                        </ul>
                    </div>
                    {/* Column 3: Learn */}
                    <div>
                        <h4 className="text-accent-gold uppercase"><Link href="/learn">Learn</Link></h4>
                        <ul className="text-xs font-light py-2">
                            <li><Link href="/courses">Courses</Link></li>
                            <li><Link href="/workshops">Workshops</Link></li>
                        </ul>
                    </div>
                    {/* Column 4: Community and Shop */}
                    <div>
                        <h4 className="text-accent-gold uppercase"><Link href="/community">Community</Link></h4>
                        <ul className="text-xs font-light py-2">
                            <li><Link href="/event">Events</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                        <h4 className="text-accent-gold uppercase"><Link href="/shop">Shop</Link></h4>
                    </div>
                </div>
            </nav>
        </footer>
    );
}