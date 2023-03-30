import Head from 'next/head'
import { motion as m } from 'framer-motion'

export default function Experience(){
    return(
        <m.main 
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1, }}
        className='text-grey-900 absolute top-0 left-0 w-full h-full bg-pink-400 lg: px-16'>
            <div className='my-96 p-1 overflow-hidden'>
                <m.h1 animate={{ y: 0 }} 
                    initial={{ y: "100%" }} transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-6xl text-center lg:text-right lg:text 9xl'>
                    Experiences
                </m.h1>
            </div>
        </m.main>
    )
}