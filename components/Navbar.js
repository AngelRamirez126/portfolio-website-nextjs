import Link from 'next/link';
import { motion as m } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';


function Navbar() {
  return (
        <nav className='sm:text-sm lg:text-2xl front-medium z-20 relative'>
            <ul className=' flex gap-16 pl-50'>
                <m.li animate={{ y: "0%" }} 
                      initial={{ y: "-200%" }} 
                      whileHover={{scale: 2}}>
                    <Link href="/">Home</Link>
                </m.li>
                
                <m.li whileHover={{scale: 2}}
                      animate={{ y: "0%" }} 
                      initial={{ y: "-200%" }}>
                    <Link href="/projects">Projects</Link>
                </m.li>
                
                <m.li whileHover={{scale: 2}}
                      animate={{ y: "0%" }} 
                      initial={{ y: "-200%" }}>
                    <Link href="/experience">Experience</Link>
                </m.li>
                
                <m.li whileHover={{scale: 2}}
                      animate={{ y: "0%" }} 
                      initial={{ y: "-200%" }}>
                    <Link href="/contact">Contact</Link>
                </m.li>
            </ul>
        </nav>
    )
  }
  
export default Navbar