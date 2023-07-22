import * as React from 'react'
import * as styles from './styles.module.css'
import bohrIcon from '../../assets/svg/bohr_icon.svg'
import emailIcon from '../../assets/svg/email_icon.svg'
import githubIcon from '../../assets/svg/github_icon.svg'
import instagramIcon from '../../assets/svg/instagram_icon.svg'
import phoneIcon from '../../assets/svg/phone_icon.svg'

const links = [
  {
    name: 'bohr',
    url: '/',
    icon: bohrIcon
  },{
    name: 'github',
    url: '/',
    icon: githubIcon
  },{
    name: 'phone',
    url: '/',
    icon: phoneIcon
  },{
    name: 'email',
    url: '/',
    icon: emailIcon
  },{
    name: 'instagram',
    url: '/',
    icon: instagramIcon
  }
]

const ContactLinks = () => {
  return (
    <div className={styles.contactLinksContainer}>
      {links.map(({ name, url, icon }) => (
        <a href={url} key={name} target='_blank' rel='noreferrer'>
          <img src={icon} alt={`${name} icon`} />
        </a>
      ))}
    </div>
  )
}

export default ContactLinks
