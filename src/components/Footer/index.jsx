import * as React from 'react'
import * as styles from './styles.module.css'
import bohrPowered from '../../assets/svg/bohr_powered.svg'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <img src={bohrPowered} alt="powered by bohr.io logo" />
      </div>
    </footer>  
  )
}

export default Footer
