import clsx from 'clsx';
import PropTypes from 'prop-types'
import * as React from 'react'
import * as styles from './styles.module.css'

const AnimatedText = ({tag, text, variant }) => {
  const Tag = tag;
  const lettersArr = text.split('')

  return (
    <Tag
      className={clsx([styles.container, styles[variant]])}
    >
      {lettersArr.map((letter, i) => (
        <span
          key={letter + i}
          className={styles.letters}
          style={{
            '--letter-position': i
          }}
        >
          {letter}
        </span>
      ))}
    </Tag>
  )
}

AnimatedText.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p']),
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['title', 'subtitle', 'paragraph'])
}

AnimatedText.defaultProps = {
  tag: 'h1',
  variant: 'paragraph',
}

export default AnimatedText
