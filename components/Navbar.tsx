import Link from 'next/link';
import styles from './Navbar.module.css';
import ActiveLink from './ActiveLink';

export default function Navbar() {

    return(
        <nav>
            <ActiveLink href='/' children='Home' />
            <ActiveLink href='/about' children='About' />
            <ActiveLink href='/contact' children='Contact' />
        </nav>
    )
}