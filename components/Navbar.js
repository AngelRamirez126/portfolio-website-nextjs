import Link from 'next/link';
import { motion as m } from 'framer-motion';

function Navbar() {
    return (
        <nav className='textx-2xl front-medium z-20 relative'>
            <ul className='flex gap-12'>
                <m.li whileHover={{scale: 2}}>
                    <Link href="/">Home</Link>
                </m.li>
                <m.li whileHover={{scale: 2}}>
                    <Link href="/projects">Projects</Link>
                </m.li>
                <m.li whileHover={{scale: 2}}>
                    <Link href="/experience">Experience</Link>
                </m.li>
                <m.li whileHover={{scale: 2}}>
                    <Link href="/contact">Contact</Link>
                </m.li>
            </ul>
        </nav>
    )
  }
  
export default Navbar