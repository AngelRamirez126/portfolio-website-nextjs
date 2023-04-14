import Head from 'next/head'
import { motion as m } from 'framer-motion';
import {useState} from 'react'
import {SiJavascript, SiPython, SiHtml5, SiTailwindcss} from 'react-icons/si'
import {TbHexagonLetterC} from 'react-icons/tb'

export default function Experience(){
    return(
    <m.main 
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className='text-grey-900 absolute top-0 left-0 w-full h-full bg-pink-400 lg: px-16'>
            <div className='mb-20 mt-60 p-1 overflow-hidden'>
                <m.h1 animate={{ y: 0 }} 
                    initial={{ y: "100%" }} transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-6xl text-center lg:text-right lg:text 9xl'>
                    Experiences
                </m.h1>
            </div>

            <m.div
            class="bg- rounded-md" >
  <m.div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 rounded-md">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
      
      <m.div whileHover={{ scale: 1.1 }} 
             class="bg-gray-100 px-8 py-6 rounded-lg overflow-hidden">
        
        <m.h3 whileHover={{ scale: 1.05 }} 
              class="text-4xl font-bold mb-2">
                <TbHexagonLetterC/>
        </m.h3>
        
        <m.p whileHover={{ backgroundColor: "#fcd34d" }} 
             class="text-gray-600 leading-relaxed mb-4">
                Experience using C to create desktop applications and web applications.
        </m.p>
      </m.div>
      
      <m.div whileHover={{ scale: 1.1 }}
             class="bg-gray-100 px-8 py-6 rounded-lg overflow-hidden">
        
        <m.h3 whileHover={{ scale: 1.05 }} 
              class="text-4xl font-bold mb-2">
                <SiPython/>
        </m.h3>
        
        <m.p whileHover={{ backgroundColor: "#fcd34d" }} 
             class="text-gray-600 leading-relaxed mb-4">
                Experience using Python for data analysis and machine learning projects.
        </m.p>
      </m.div>
      
      <m.div whileHover={{ scale: 1.1 }} 
             class="bg-gray-100 px-8 py-6 rounded-lg overflow-hidden">
        
        <m.h3 whileHover={{ scale: 1.05 }} 
              class="text-4xl font-bold mb-2">
                <SiHtml5/>
              </m.h3>
        
        <m.p whileHover={{ backgroundColor: "#fcd34d" }} 
             class="text-gray-600 leading-relaxed mb-4">
                Experience using HTML for building website layouts.
        </m.p>
      </m.div>
      
      <m.div whileHover={{ scale: 1.1 }} 
             class="bg-gray-100 px-8 py-6 rounded-lg overflow-hidden">
        
        <m.h3 whileHover={{ scale: 1.05 }} 
              class="text-4xl font-bold mb-2">
                <SiJavascript />
        </m.h3>
        
        <m.p whileHover={{ backgroundColor: "#fcd34d" }} 
            class="text-gray-600 leading-relaxed mb-4">
                Experience using JavaScript for web development and building interactive user interfaces.
        </m.p>
      </m.div>
      
      <m.div whileHover={{ scale: 1.1 }} 
             class="bg-gray-100 px-8 py-6 rounded-lg overflow-hidden">
        
        <m.h3 whileHover={{ scale: 1.05 }} 
              class="text-4xl font-bold mb-2">
              <SiTailwindcss/>
        </m.h3>
        
        <m.p whileHover={{ backgroundColor: "#fcd34d" }} 
             class="text-gray-600 leading-relaxed mb-4">
                Experience using CSS and CSS Tailwind for building responsive and user-friendly website designs.
        </m.p>
      </m.div>
      
      <m.div whileHover={{ scale: 1.1 }} 
            class="bg-gray-100 px-8 py-6 rounded-lg overflow-hidden">
        <m.h3 whileHover={{ scale: 1.05 }} 
              class="text-2xl font-bold mb-2">
                UX/UI 
        </m.h3>
        <m.p whileHover={{ backgroundColor: "#fcd34d" }} 
             class="text-gray-600 leading-relaxed mb-4">
            Experience using UX/UI design concepts to create beautiful webagesa
        </m.p>
      </m.div>
    </div>
  </m.div>
</m.div>





            

    </m.main>   
    )
}