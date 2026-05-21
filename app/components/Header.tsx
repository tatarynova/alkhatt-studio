import Logo from './Logo';
import NavLink from './NavLink';

export default function Header() {
    return (
        <header className='fixed top-0 left-0 right-0 z-50'>
            <nav className='max-w-7xl mx-auto px-8 py-5 flex justify-between items-center'>
                <Logo></Logo>
                <div className='flex gap-12'>
                    <NavLink href='/about'>About</NavLink>
                    <NavLink href='/courses'>Courses</NavLink>
                    <NavLink href='/shop'>Shop</NavLink>
                    <NavLink href='/events'>Events</NavLink>
                    <NavLink href='/contact'>Contact</NavLink>
                </div>
            </nav>
        </header>
    )
}