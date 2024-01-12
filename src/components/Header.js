import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/"><a>Startsida</a></Link>
                <Link href="/about"><a>Om Oss</a></Link>
                <Link href="/contact"><a>Kontakt</a></Link>
            </nav>
        </header>
    );
}

export default Header;