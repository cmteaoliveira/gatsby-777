import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import arrowSvg from '../../../assets/svg/arrow.svg'
import Text from '../../Text'
import * as styles from './styles.module.css'

const MobileDisplay = ({ projects }) => {
  const [onDisplayIndex, setOnDisplayIndex] = React.useState(0);

  const isFirstProject = onDisplayIndex === 0
  const isLastProject = onDisplayIndex === projects.length - 1

  const handlePrev = () => {
    if (isFirstProject) return
    setOnDisplayIndex((old) => old - 1)
  }
  
  const handleNext = () => {
    if (isLastProject) return
    setOnDisplayIndex((old) => old + 1)
  }

  const handleTouchStart = (e) => {
    const startX = e.touches[0].screenX
    const pageStartScrollY = window.scrollY
    function handleTouchEnd (e) {
      if (window.scrollY !== pageStartScrollY) return
      if (e.changedTouches[0].screenX > startX) handlePrev();
      if (e.changedTouches[0].screenX < startX) handleNext();
    }

    window.addEventListener('touchend', handleTouchEnd, { once: true })
  }

  return (
    <div className={styles.projectsContainer}>
      <ul
        className={styles.projectsList}
        style={{ '--on-display-index': onDisplayIndex }}
        onTouchStart={handleTouchStart}
      >
        {projects.map(({ name, image, imageAlt, desc }) => (
          <li key={name}>
            <GatsbyImage image={image} alt={imageAlt} className={styles.projectImg} />
            <Text tag='h3' variant='paragraph'>{name}</Text>
            <MDXRenderer>{desc}</MDXRenderer>
          </li> 
        ))}
      </ul>

      <button
        type='button'
        onClick={handlePrev}
        disabled={isFirstProject}
        className={styles.prevBtn}
        aria-label='previous project'
      >
        <img src={arrowSvg} alt="" />
      </button>
      <button
        type='button'
        onClick={handleNext}
        disabled={isLastProject}
        className={styles.nextBtn}
        aria-label='next project'
      >
        <img src={arrowSvg} alt="" />
      </button>
    </div>
  )
}

export default MobileDisplay
