'use client';
import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';
import { Search, User, ShoppingCart } from "lucide-react";
import IconButton from '../ui/IconButton';
import { useEffect, useState } from 'react';


export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 600) {
                setIsVisible(false);
            }
            setLastScrollY(currentScrollY);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
        }, [lastScrollY]);

        useEffect(() => {
            if (menuOpen) setMenuOpen(false);
        }, [lastScrollY]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm text-primary-light ${isVisible ? 'translate-y-0' : '-translate-y-full'} `}>
            <nav className='max-w-screen px-6 py-5 flex justify-between items-center'>
                <Logo></Logo>

                {/* Desktop nav links */}
                <div className='hidden md:flex gap-12'>
                    <NavLink href='/studio'>Studio</NavLink>
                    <NavLink href='/learn'>Learn</NavLink>
                    <NavLink href='/community'>Community</NavLink>
                    <NavLink href='/shop'>Shop</NavLink>
                    <NavLink href='/contact'>Contact</NavLink>
                </div>

                {/* Desktop icons */}
                <div className='hidden md:flex gap-8'>
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

                {/* Mobile three dot button */}
                <button 
                className='md:hidden flex fle-col gap-[5px] p-2 text-primary-light'
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label='Open menu'>
                    <span className='w-[4px] h-[4px] rounded-full bg-primary-light block'></span>
                    <span className='w-[4px] h-[4px] rounded-full bg-primary-light block'></span>
                    <span className='w-[4px] h-[4px] rounded-full bg-primary-light block'></span>
                </button>
            </nav>

            {/* Mobile dropdown menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='flex flex-col px-6 pb-6 pt-2 gap-6 br-primary-dark/90 backdrop-blur-sm'>
                    <NavLink href='/studio'>Studio</NavLink>
                    <NavLink href='/learn'>Learn</NavLink>
                    <NavLink href='/community'>Community</NavLink>
                    <NavLink href='/shop'>Shop</NavLink>
                    <NavLink href='/contact'>Contact</NavLink>
                </div>
                <div className='flex gap-6 py-4 px-6'>
                    <IconButton href='/search'>
                        <Search size={18} />
                    </IconButton>
                    <IconButton href='/login'>
                        <User size={18} />
                    </IconButton>
                    <IconButton href='/shop'>
                        <ShoppingCart size={18} />
                    </IconButton>
                </div>
            </div>
        </header>
    )
}