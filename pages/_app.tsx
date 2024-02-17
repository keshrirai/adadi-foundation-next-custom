import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { Head } from 'next/document';
 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
function MyApp({ Component, pageProps }: AppProps) {
  
  return <>
   {/* <Head>
      <title>Daikicoin</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
  <main className={`${inter.variable} font-sans`}>
    
    {/* <Header/> */}
 
    <Component {...pageProps} />
    {/* <Footer/> */}
  </main>
  </>
}

export default MyApp