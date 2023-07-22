import { StaticImage } from 'gatsby-plugin-image'
import 'normalize.css'
import * as React from 'react'
import skills from '../assets/skills.json'
import programmingSkillsIcon from '../assets/svg/programming_skills_icon.svg'
import projectsIcon from '../assets/svg/projects_icon.svg'
import softwareSkillsIcon from '../assets/svg/software_skills_icon.svg'
import ContactLinks from '../components/ContactLinks'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import ProjectsDisplay from '../components/ProjectsDisplay'
import SkillsDisplay from '../components/SkillsDisplay'
import Text from '../components/Text'
import '../styles/global.css'
import * as styles from '../styles/HomePage.module.css'

const HomePage = () => {
  return (
    <main>
      <title>Gatsby Portfolio</title>

      <NavBar />
      <Header />

      <section className={styles.aboutSection} id='about'>
        <header className={styles.aboutHeader}>
          <Text tag='h2' color='secondary' variant='subtitle'>ABOUT</Text>
        </header>
        <div className={styles.aboutContent}>
          <StaticImage className={styles.aboutAvatar} src='../assets/images/yourname.png' alt='Your Name' objectFit='contain' />
          <Text tag='p'>
            Describe who you are, where you live, your graduations, preveius jobs, hobbies and whatever you believe is important that employers know about you.
          </Text>
          <StaticImage className={styles.aboutStats} src='../assets/images/github_stats.png' alt='github stats' objectFit='contain' />
        </div>
      </section>

      <section className={styles.skillsSection} id='skills'>
        <div className={styles.programmingSkillsHeader}>
          <img src={programmingSkillsIcon} alt="" />
          <Text tag='h2' color='secondary' variant='subtitle'>PROGRAMMING SKILLS</Text>
        </div>
        <SkillsDisplay skills={skills.programming} />

        <div className={styles.softwareSkillsHeader}>
          <img src={softwareSkillsIcon} alt="" />
          <Text tag='h2' color='secondary' variant='subtitle'>SOFTWARE SKILLS</Text>
        </div>
        <SkillsDisplay skills={skills.software} variant='circle' />
      </section>

      <section className={styles.projectsSection} id='projects'>
        <div className={styles.projectsHeader}>
          <img src={projectsIcon} alt="" />
          <Text tag='h2' color='secondary' variant='subtitle'>PROJECTS</Text>
        </div>
        <ProjectsDisplay />
      </section>

      <section className={styles.contactSection} id='contact'>
        <div className={styles.contactHeader}>
          <Text tag='h2' variant='subtitle'>CONTACT ME FOR MORE INFORMATION AND THANK YOU FOR THE VISIT!</Text>
        </div>
        <ContactLinks />
      </section>

      <Footer />
    </main>
  )
}

export default HomePage
