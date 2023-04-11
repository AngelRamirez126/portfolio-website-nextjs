import '../styles/globals.css';
import Navbar from '../components/Navbar.js';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { Fragment } from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }) {
  return(
    <div className='py-24 px-12 lg:px-48 font-latoBold'>
      <Navbar />
      <AnimatePresence >
      <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}

export default MyApp;
