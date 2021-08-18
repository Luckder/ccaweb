import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={utilStyles.parent}>
      <div className={utilStyles.screen}>
        <Head>
          <title>RI CSS</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>

        <div className={utilStyles.navBar}>
            
            <Link href="/"><a><Image src="/navlogo.jpg" alt="CSS Logo" width = "250px" height = "75px"/></a></Link>
            <Link href="/aboutus"><a>About Us</a></Link>
            
            <div className={utilStyles.dropdown}>
                <a className={utilStyles.dropdownBtn}>2021-2022 Activities/Courses</a>
                <div className={utilStyles.dropdownContent}>
                <Link href="/activities/ui-uxdesign">UI/UX Design </Link>
                <Link href="/activities/webandmobileappdevt">Web and Mobile App Development </Link>
                <Link href="/activities/backenddevt">Backend Development </Link>
                <Link href="/activities/competitiveprogramming">Competitive Programming </Link>
                <Link href="/activities/datasciandmachinelearning">Data Science and Machine Learning </Link>
                <Link href="/activities/incubatorprogramme">Incubator Programmes </Link>
                </div>
            </div>
            <Link href="/competitions"><a>Competitions</a></Link>
        </div>

        <section className={utilStyles.cover}>
<<<<<<< HEAD
          {/* <h1 className={utilStyles.subtitle}>"The ultimate promise of technology is to make us masters of a world that we command by the push of a button"</h1> */}
=======
          <p className={utilStyles.subtitle}><i>"The ultimate promise of technology is to make us masters of a world that we command by the push of a button"</i></p>
>>>>>>> 379b0a946a9c0281db5ad462090c7f677721122a
        </section>
      </div>

      <section className={utilStyles.testimonials}>
        <h2 className={utilStyles.h2}>Testimonials</h2>
        <div className={utilStyles.slider}>
            <Link href="#slide-1" scroll={false}><a>1</a></Link>
            <Link href="#slide-2" scroll={false}><a>2</a></Link>
            <Link href="#slide-3" scroll={false}><a>3</a></Link>
            
            <div className={utilStyles.slides}>
                <div name="slide-1" id="slide-1" className={utilStyles.slide}>
                <blockquote>CSS is love. CSS is life. </blockquote>
                    <p>~ Huang Ziwen</p>
               
                </div>
                
                <div name="slide-2" id="slide-2" className={utilStyles.slide}>
                <blockquote>CSS is a place where you explore new possibilities and expand your creativity.</blockquote>
                <p>~ Lee Baoyu</p>
                </div>
                
                <div id="slide-3" className={utilStyles.slide}>
                    <blockquote>"I love CSS three!"</blockquote>
                    <p>~ Member 3</p>
                </div>
            </div>
        </div>
      </section>

      <section className={utilStyles.footer}>
          <div className={utilStyles.footercontent}>
              <div className={utilStyles.li}>
                <span class="material-icons">place</span>
                <Link href="http://www.ri.edu.sg/visit-us">
                  <a target="_blank" className={utilStyles.link}>Our Location</a>
                </Link>
              </div>

              <div className={utilStyles.li}>
                <span class="material-icons">mail</span>
                <Link href="mailto:cssrjc@gmail.com">
                  <a target="_blank" className={utilStyles.link}>cssrjc@gmail.com</a>
                </Link>
              </div>

              <div className={utilStyles.li}>
                <span class="material-icons">alternate_email</span>
                <Link href="https://www.instagram.com/rafflescss/">
                  <a target="_blank" className={utilStyles.link}>rafflescss</a>
                </Link>
              </div>

              <div className={utilStyles.li}>
                <span class="material-icons">photo_camera</span>
                <Link href="https://www.instagram.com/rafflescss/">
                  <a className={utilStyles.link}>Photos</a>
                </Link>
              </div>
          </div>

          <hr></hr>

          <p>&#169; 2021 Raffles Institution Computer Science Society</p>
      </section>
    </div>
  )
}