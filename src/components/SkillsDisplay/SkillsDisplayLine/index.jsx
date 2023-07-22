import * as React from 'react'
import * as styles from './styles.module.css'

const SkillsDisplayLine = ({ skillsArr }) => {
  const bigestSkillName = skillsArr.reduce((held, cur) => {
    return held > cur[0].length ? held : cur[0].length
  }, 0)  

  const labelWidth = bigestSkillName * 0.55

  return (
    <div className={styles.skillsContainer}>
      {skillsArr.map(([skill, progress]) => (
        <div
          key={skill}
          className={styles.item}
          style={{
            '--progress': `${progress}`,
            '--label-width': `${labelWidth}em`
          }}
        >
          <span>
            {skill}
          </span>
        </div>
      ))}
    </div>
  )
}

export default SkillsDisplayLine
