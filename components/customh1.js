import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import utilStyles from '../styles/utils.module.css'

const MyH1 = styled.h1(
  {
    fontSize: '5em',
  },
  ({theme}) => ({
    color: theme.displayTextColor,
    background: theme.displayBackgroundColor,
  }),
)

export default function CustomH1({name}) {
  return <MyH1 className={utilStyles.heading2Xl}>{name}</MyH1>
}

CustomH1.propTypes = {
  name: PropTypes.string.isRequired,
}
