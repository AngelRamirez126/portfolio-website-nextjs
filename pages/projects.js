import Head from 'next/head'
import { motion as m } from 'framer-motion'
import { Container } from 'postcss'
import '../public/Assets/download.png'

export default function Projects(){
    return(
        <m.main 
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1, }}
        className='text-grey-900 absolute top-0 left-0 w-full h-full bg-orange-400 lg: px-16'>
            <div className='my-96 p-1 overflow-hidden'>
                <m.h1 animate={{ y: 0 }} 
                    initial={{ y: "100%" }} transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-6xl text-center lg:text-right lg:text 9xl'>
                    Projects
                </m.h1>
                </div>

                <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
                    <section>
                        <h2>My Work</h2>
                        <p>Proident proident commodo veniam sint non enim quis magna minim. Exercitation Lorem aute enim sit. Consequat consectetur irure anim pariatur consequat nisi incididunt ea ipsum proident. Esse exercitation velit veniam deserunt labore dolore ad voluptate minim incididunt. Ea occaecat dolor cillum anim culpa.</p>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                            <ul>
                                
                            </ul>
                        </div>
                    </section>
                </div>
        </m.main>
    )
}