import Link from 'next/link'

function Navbar() {
    return (
        <nav className='textx-2xl front-medium'>
            <ul className='flex gap-12'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Projects</Link>
                </li>
                <li>
                    <Link href="/experience">Experience</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
  }
  
export default Navbar