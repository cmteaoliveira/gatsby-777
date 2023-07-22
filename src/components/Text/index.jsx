import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import * as styles from './styles.module.css';

const Text = ({ children, color, tag, transform, variant }) => {
  const Tag = tag;

  return (
    <Tag
      className={
        clsx([
          styles.text,
          styles[`${color}Color`],
          styles[transform],
          styles[variant]
        ])
      }
    >
      {children}
    </Tag>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  transform: PropTypes.oneOf(['uppercase', '']),
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p']),
  variant: PropTypes.oneOf(['title', 'subtitle', 'paragraph'])
}

Text.defaultProps = {
  color: 'primary',
  tag: 'span',
  transform: '',
  variant: 'paragraph',
}

export default Text
