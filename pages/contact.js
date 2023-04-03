import Head from 'next/head';
import { motion as m } from 'framer-motion';
import { container, item } from '../animations';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

export default function Contact(){
    return(
        <m.main 
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1, }}
        className='text-grey-900 absolute top-0 left-0 w-full h-full bg-red-400 lg: px-16'>
            <div className='my-96 p-1 overflow-hidden'>
                <m.h1 animate={{ y: 0 }} 
                    initial={{ y: "100%" }} transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-6xl text-center lg:text-right lg:text 9xl'>
                    Let's Talk
                </m.h1>
            </div>
            <div className='flex gap-20'>
                <div className='lg:text-2xl text-base'>
                    <h4>Find me:</h4>
                </div>
                <div className='lg:text-6xl text-2xl'>
                    
                    <m.ul variants={container} initial="hidden" animate="show">
                      
                      <div className='overflow-hidden'>
                        <m.li variants={item}
                            className='pb-5 hover:text-orange-100'>
                            <a href="https://www.linkedin.com/in/angel-ramirez-54b8851b0/"
                               target ="__blank">
                                <BsLinkedin/>
                            </a>
                        </m.li>
                      </div>
                      
                      <div className='overflow-hidden wd-auto'>
                        <m.li variants={item} 
                            className='pb-5 hover:text-orange-100'>
                            <a href="https://dribbble.com/Angel_Ramirez?onboarding=true" 
                                target ="_blank">
                                    <BsDribbble/>
                            </a>
                        </m.li>
                      </div>
                      <div className='overflow-hidden'>
                        <m.li variants={item} 
                            className='pb-5 hover:text-orange-100'>
                            <a href="https://github.com/AngelRamirez126" 
                                target ="_blank">
                                    <BsGithub/>
                            </a>
                        </m.li>
                      </div>
                    </m.ul>
                </div>
            </div>
        </m.main>
    )
}