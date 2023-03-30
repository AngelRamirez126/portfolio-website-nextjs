import Head from 'next/head'
import { motion as m } from 'framer-motion'

export default function Contact(){
    return(
        <main>
            <div className='my-96 p-1'>
                <h1 className='text-6xl text-center lg:text-right lg:text 9xl'>Let's Talk</h1>
            </div>
            <div className='flex gap-40'>
                <div className='lg:text-2xl text-base'>
                    <h4>Find me:</h4>
                </div>
                <div className='lg:text-6xl text-2xl underline'>
                    <ul>
                        <li className='pb-2'>Github</li>
                        <li className='pb-2'>Dribble</li>
                        <li className='pb-2'>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}