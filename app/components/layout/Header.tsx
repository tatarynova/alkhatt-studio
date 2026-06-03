'use client';
import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';
import { Search, User, ShoppingCart } from "lucide-react";
import IconButton from '../ui/IconButton';
import { useEffect, useState } from 'react';

// navigation disappears when you scroll down

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 500) {
                setIsVisible(false);
            }
            setLastScrollY(currentScrollY);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
        }, [lastScrollY]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm text-primary-light ${isVisible ? 'translate-y-0' : '-translate-y-full'} `}>
            <nav className='max-w-7xl mx-auto px-8 py-5 flex justify-between items-center'>
                <Logo></Logo>
                <div className='flex gap-12'>
                    <NavLink href='/studio'>Studio</NavLink>
                    <NavLink href='/learn'>Learn</NavLink>
                    <NavLink href='/community'>Community</NavLink>
                    <NavLink href='/shop'>Shop</NavLink>
                    <NavLink href='/contact'>Contact</NavLink>
                </div>
                <div className='flex gap-8'>
                    <IconButton href='/search'>
                        <Search size={20} />
                    </IconButton>
                    <IconButton href='/login'>
                        <User size={20} />
                    </IconButton>
                    <IconButton href='/shop'>
                        <ShoppingCart size={20} />
                    </IconButton>
                </div>
            </nav>
        </header>
    )
}