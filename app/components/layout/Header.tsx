import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';
import { Search, User, ShoppingCart } from "lucide-react";
import IconButton from '../ui/IconButton';

// navigation disappears when you scroll down

export default function Header() {
    return (
        <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-teal/10 text-primary-light'>
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