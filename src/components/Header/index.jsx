import * as React from 'react'
import Text from '../Text'
import AnimatedText from '../AnimatedText'
import * as styles from './styles.module.css'
import Particles from 'react-tsparticles'
import particlesOptions from '../../assets/particlesOptions'

const Header = () => {
  
  return (
    <header id="header" className={styles.headerContainer}>
      <Particles canvasClassName={styles.particles} options={particlesOptions} />
      <Text tag="h1" variant='title'>YOUR NAME</Text>
      <AnimatedText text="PORTFOLIO" tag="h2" variant="subtitle" />
    </header>
  )
}

export default Header
