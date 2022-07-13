import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ScrollDown from '../components/ScrollDown/ScrollDown'
import Sidenav from '../components/Sidenav/Sidenav'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Sidenav/>
        
        <section className="hero">
          <div className="container">
            <div className="loader">
              <h1 className="loader-title">Hey<span className="outline">.</span></h1>
            </div>

            <ScrollDown/>
          </div>
          
        </section>

        <section className="page2">
          <div className="container">
            <div className="page2-loader">
              <h1 className="page2-title">Let's take you brand from bland to<span className="outline">intirguing.</span></h1>
            </div>
          </div>
        </section>

        <section id="projects">
          <h1 className="title">Proj<br/><span className="outline">ects.</span></h1>
        </section>

        <section id="services">
          <h1 className="title">Serv<br/><span className="outline">ices.</span></h1>
        </section>

        <section id="collaborations">
          <h1 className="title">Collab<br/><span className="outline">orations.</span></h1>
        </section>
      </main>
    </>
  )
}

export default Home
