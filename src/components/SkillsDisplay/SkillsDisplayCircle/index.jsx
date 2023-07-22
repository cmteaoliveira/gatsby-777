import * as React from 'react'
import * as styles from './styles.module.css'

const SkillsDisplayCircle = ({ skillsArr }) => {
  return (
    <div className={styles.container}>
      {skillsArr.map(([skill, progress]) => (
        <div
          key={skill}
          className={styles.item}
          style={{
            '--progress': `${progress}`
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="
                M50 3
                A1 1 0 0 1 50 97
                A1 1 0 0 1 50 3
              "
              fill="none"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#03DAC6"
            />
            <path
              d="
                M50 3
                A1 1 0 0 1 50 97
                A1 1 0 0 1 50 3
              "
              className={styles.progressBorder}
              fill="none"
              strokeLinecap="round"
              strokeWidth="6"
              stroke="#FF0467"
            />
          </svg>
          <span>
            {skill}
          </span>
          <span>
            {progress}%
          </span>
        </div>
      ))}
    </div>
  )
}

export default SkillsDisplayCircle
