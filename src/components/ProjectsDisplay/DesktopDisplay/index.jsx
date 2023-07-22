import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import arrowSvg from '../../../assets/svg/arrow.svg'
import Text from '../../Text'
import * as styles from './styles.module.css'

const DesktopDisplay = ({ projects }) => {
  const [projectPage, setProjectPage] = React.useState(0)
  const [selectedProject, setSelectedProject] = React.useState(0)
  const [isDetailing, setIsDetailing] = React.useState(false)
  const detailedProject = projects[selectedProject]
  const projectList = React.useRef(null)
  
  const isFirstPage = projectPage <= 0
  const isLastPage = projectPage >= (projects.length % 3 === 0 ?
                                      Math.floor(projects.length / 3) - 1 :
                                      Math.floor(projects.length / 3))

  const handlePrevPage = () => setProjectPage((old) => old - 1)
  const handleNextPage = () => setProjectPage((old) => old + 1)
  const handleProjectFocus = (projectIndex) => {
    projectList.current.scroll({ left: 960 * projectPage })
    if (projectIndex % 3 === 0) setProjectPage(projectIndex / 3)
    if (projectIndex % 3 === 2) setProjectPage((projectIndex - 2) / 3)
  }
  
  React.useEffect(() => {
    if (!projectList.current) return
    projectList.current.scroll({
      left: 960 * projectPage,
      behavior: 'smooth'
    })
  }, [projectPage])

  const handleSelectProject = (projectIndex) => {
    setSelectedProject(projectIndex)
    setIsDetailing(true)
  }

  const handleCloseDetail = () => setIsDetailing(false)

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsList} ref={projectList}>
        {projects.map(({id, name, image, imageAlt }, i) => (
          <button
            key={id}
            className={styles.selectionBtn}
            onClick={() => handleSelectProject(i)}
            onFocus={(e) => handleProjectFocus(e, i)}
          >
            <GatsbyImage image={image} alt={imageAlt} className={styles.projectImg} />
            <Text
              variant='paragraph'
              color={isDetailing && i === selectedProject ? 'secondary' : 'primary'}
            >
              {name}
            </Text>
          </button>
        ))}
      </div>

      <button
        type='button'
        onClick={handlePrevPage}
        disabled={isFirstPage}
        className={styles.prevBtn}
        aria-label='previous project'
        tabIndex={-1}
      >
        <img src={arrowSvg} alt="" />
      </button>
      <button
        type='button'
        onClick={handleNextPage}
        disabled={isLastPage}
        className={styles.nextBtn}
        aria-label='next project'
        tabIndex={-1}
      >
        <img src={arrowSvg} alt="" />
      </button>   

      {isDetailing && <div className={styles.projectDetail}>
        <GatsbyImage image={detailedProject.image} alt={detailedProject.imageAlt} className={styles.detailedProjectImg} objectFit='scale-down' />
        <div>
          <Text tag='h3' variant='paragraph'>{detailedProject.name}</Text>
          <MDXRenderer>{detailedProject.desc}</MDXRenderer>
          <button
            className={styles.closeDetailBtn}
            onClick={handleCloseDetail}
          >
            <img src={arrowSvg} alt="" />
          </button>
        </div>
      </div>}
    </div>
  )
}

export default DesktopDisplay
