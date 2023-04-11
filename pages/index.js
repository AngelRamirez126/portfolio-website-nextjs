import Head from 'next/head';
import { motion as m } from 'framer-motion';
import { container, item } from '../animations';
import { useRef, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const bg = document.getElementById('bg');

    document.addEventListener('mousemove', e => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      bg.style.backgroundPosition = `${x * 50}% ${y * 50}%`;
    });
  }, []);

  return (
    <m.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="text-grey-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16 bg-orange-100"
    >
      <Head>
        <title>Angel Ramirez | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-96 p-1 overflow-hidden">
          <m.div
            id="bg"
            className="overflow-hidden text-transparent font-extrabold bg-center bg-[url(https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg)] bg-clip-text sm:text-6xl md:text-9xl lg:text-12xl text-center p-2"
            animate={{ y: 0 }}
            initial={{ y: '300%' }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Angel Ramirez
          </m.div>

          <m.div
            className="sm:text-sm text-center md:text-2x1 lg:text-2xl p-2"
            animate={{ y: 0 }}
            initial={{ y: '300%' }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Developer Portfolio
          </m.div>
        </div>

        <div className="flex justify-between">
          <div className="overflow-hidden">
            <m.h3
              animate={{ y: 0 }}
              initial={{ y: '300%' }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Dynamic and interactive content
            </m.h3>

            <m.h3
              animate={{ y: 0 }}
              initial={{ y: '300%' }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Professional grade & quality driven work
            </m.h3>
            <m.h3
              animate={{ y: 0 }}
              initial={{ y: '300%' }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              UI & UX meeting industry standard
            </m.h3>
          </div>
       

        </div>
      </main>
    </m.div>
  );
}
