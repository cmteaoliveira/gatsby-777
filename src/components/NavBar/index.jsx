import clsx from 'clsx'
import * as React from 'react'
import burgerBtn from '../../assets/svg/burger_btn.svg'
import xBtn from '../../assets/svg/x.svg'
import Text from '../Text'
import * as styles from './styles.module.css'

const isOpenReducer = (state) => {
  return !state
}

const NavBar = () => {
  const navContainerRef = React.useRef(null)
  const [isOpen, toggleIsOpen] = React.useReducer(isOpenReducer, false)
  const [hoverEffectParams, setHoverEffectParams] = React.useState({
    positionX: 0,
    opacity: 0,
    width: 0,
  });

  const links = ['about', 'skills', 'projects', 'contact']

  const handleLinkClick = (e) => {
    e.preventDefault()
    const targetId = e.target.parentElement.href.split('#')[1]
    const targetTopPosition = document.getElementById(targetId).getBoundingClientRect().top
    const bodyScrollOffset = document.querySelector(':root').scrollTop
    const scrollOptions = {
      top: targetTopPosition + bodyScrollOffset,
      behavior: 'smooth'
    }

    if (window.innerWidth < 920) {
      toggleIsOpen()
    } else {
      const navBarHeight = navContainerRef.current.offsetHeight
      scrollOptions.top -= navBarHeight
    }

    window.scroll(scrollOptions)
  }

  const handleLinkHover = (e) => {
    const width = e.target.offsetWidth
    const positionX = e.target.getBoundingClientRect().left

    setHoverEffectParams({
      positionX,
      opacity: 1,
      width
    })
  }

  return (
    <nav
      ref={navContainerRef}  
      className={clsx([styles.navContainer, isOpen && styles.open])}
    >
      <button className={styles.navBtn} onClick={toggleIsOpen}>
        <img src={isOpen ? xBtn : burgerBtn} alt="" />
      </button>
      <div
        className={clsx([styles.navBar, isOpen && styles.open])}
        style={{
          '--hover-position-x': `${hoverEffectParams.positionX}px`,
          '--hover-opacity': hoverEffectParams.opacity,
          '--hover-width': `${hoverEffectParams.width}px`
        }}
      >
        {links.map((link) => (
          <a href={`#${link}`}
            key={link}
            onClick={handleLinkClick}
            onMouseOver={handleLinkHover}
            onFocus={handleLinkHover}
            onMouseOut={() => setHoverEffectParams(old => ({...old, opacity: 0}))}
            onBlur={() => setHoverEffectParams(old => ({...old, opacity: 0}))}
          >
            <Text variant="subtitle" color="secondary">
              {link.toUpperCase()}
            </Text>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
