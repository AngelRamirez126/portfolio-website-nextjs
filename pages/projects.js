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
        exit={{ opacity: 1 }}
        className="text-grey-900 absolute top-0 left-0 w-full h-full bg-black">  
            <div>          
            <div className='mt-60 mp-20 sm:pb-26 text-gradient pb-12'>
                <h1 
                    className='title font-clip text-9xl text-pink-600 text-center p-2'>
                    Projects
                </h1>
            </div>
            </div>
            
            
            
            <section>
            <m.div class="container mx-auto px-4 py-16">
                
                <div class="grid grid-cols-3 gap-10">

                <div className='relative group'>  
                <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to bg-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-200'></div>            
                <div class="relative bg-black rounded-lg shadow-lg overflow-hidden leading-none">
                  <a href="#" class="block relative h-48 rounded overflow-hidden">
                      <img alt="Project 1" class="object-cover object-center w-full h-full block" src="https://via.placeholder.com/640x360.png"/>
                  </a>
                
                <div class="p-6">
                   <h3 class="font-semibold text-lg mb-2 text-orange-50">
                        Project 1
                   </h3>
                      <p class="text-gray-700 leading-relaxed mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante in ante, eget lacinia turpis.
                      </p>
                      <a href="#" class="text-blue-500 inline-flex items-center">
                        Learn More
                      </a>
                </div>
                </div>
                </div>

                <div className='relative group'>  
                <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to bg-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-200'></div>            
                <div class="relative bg-black rounded-lg shadow-lg overflow-hidden leading-none">
                  <a href="#" class="block relative h-48 rounded overflow-hidden">
                      <img alt="Project 1" class="object-cover object-center w-full h-full block" src="https://via.placeholder.com/640x360.png"/>
                  </a>
                
                <div class="p-6">
                   <h3 class="font-semibold text-lg mb-2 text-orange-50">
                        Project 2
                   </h3>
                      <p class="text-gray-700 leading-relaxed mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante in ante, eget lacinia turpis.
                      </p>
                      <a href="#" class="text-blue-500 inline-flex items-center">
                        Learn More
                      </a>
                </div>
                </div>
                </div>

                <div className='relative group'>  
                <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to bg-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-200'></div>            
                <div class="relative bg-black rounded-lg shadow-lg overflow-hidden leading-none">
                  <a href="#" class="block relative h-48 rounded overflow-hidden">
                      <img alt="Project 1" class="object-cover object-center w-full h-full block" src="https://via.placeholder.com/640x360.png"/>
                  </a>
                
                <div class="p-6">
                   <h3 class="font-semibold text-lg mb-2 text-orange-50">
                        Project 3
                   </h3>
                      <p class="text-gray-700 leading-relaxed mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante in ante, eget lacinia turpis.
                      </p>
                      <a href="#" class="text-blue-500 inline-flex items-center">
                        Learn More
                      </a>
                </div>
                </div>
                </div>
                
                </div>
                
            </m.div>
            </section>    
                
        
  </m.main>
    )
}