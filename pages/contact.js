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
        exit={{ opacity: 1 }}
        className='text-grey-900 absolute top-0 left-0 w-full h-full bg-red-400 lg: px-16'>
            <div className='mt-60 mb-40 p-1 overflow-hidden'>
                <m.h1 animate={{ y: 0 }} 
                    initial={{ y: "100%" }} transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-6xl text-center lg:text-right lg:text 9xl'>
                    Let's Talk
                </m.h1>
            </div>

            <m.form
            action="#" 
            method="POST" 
            class="max-w-lg mx-auto bg-slate-400 px-5 py-6 rounded-lg">
  <div class="mb-4">
    <label for="name" class="block text-black-900 font-bold mb-2">Name</label>
    <input type="text" id="name" name="name" class="border rounded-lg py-2 px-3 w-full bg-orange-100"/>
  </div>

  <div class="mb-4">
    <label for="email" class="block text-black-900 font-bold mb-2">Email</label>
    <input type="email" id="email" name="email" class="border rounded-lg py-2 px-3 w-full bg-orange-100"/>
  </div>

  <div class="mb-4">
    <label for="message" class="block text-black-900 font-bold mb-2">Message</label>
    <textarea id="message" name="message" rows="5" class="border rounded-lg py-2 px-3 w-full bg-orange-100"></textarea>
  </div>

  <div class="mb-4">
    <m.button whileHover={{scale: 1.2}} type="submit" class="bg-black hover:bg-orange-100 hover:text-black text-orange-100 font-bold py-2 px-4 rounded">Submit</m.button>
  </div>
</m.form>

            <div className='flex gap-20'>
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