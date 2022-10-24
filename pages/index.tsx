import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
     overflow-x-hidden z-0'>
      <Head>
        <title>Prakash Poudel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       {/* {Header} */}
        <Header/>

       {/* {Hero} */}
       <section id="hero" className='snap-start'>
         <Hero/>
       </section>

       {/* {About} */}
       <section id="about" className="snap-start">
        <About/>
       </section>

       {/* experience */}
       <section id="experience" className="snap-start">
        <Experience/>
       </section>

       {/* skills */}
       <section id="skills" className="snap-start">
        <Skills/>
       </section>

       {/* Projects */}
       <section id="projects" className="snap-start">
        <Projects/>
       </section>

       {/* {contact me} */}
       <section id="contact" className="snap-start">
        <Contact/>
       </section>

    </div>
  )
}

export default Home
