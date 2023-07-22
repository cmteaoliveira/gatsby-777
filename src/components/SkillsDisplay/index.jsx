import PropTypes from 'prop-types';
import SkillsDisplayCircle from './SkillsDisplayCircle';
import SkillsDisplayLine from './SkillsDisplayLine';

const skillsDisplayVariants = {
  line: SkillsDisplayLine,
  circle: SkillsDisplayCircle
}

const SkillsDisplay = ({ skills, variant }) => {
  const skillsArr = Object.entries(skills)
  return skillsDisplayVariants[variant]({ skillsArr })
}

SkillsDisplay.propTypes = {
  skills: PropTypes.shape({
    String: Number
  }).isRequired,

  variant: PropTypes.oneOf(Object.keys(skillsDisplayVariants))
}

SkillsDisplay.defaultProps = {
  variant: 'line'
}

export default SkillsDisplay
