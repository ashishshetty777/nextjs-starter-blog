import React from 'react'
import PropTypes from 'prop-types'

function PriorityText({className = '', text = '', ...props}) {
  return (
    <h1 className={`${className}`} {...props}>
      {text}
    </h1>
  )
}

PriorityText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
}

function MainBrain() {
  return (
    <div>
      <PriorityText text={'Hello there!'} />
    </div>
  )
}

export default MainBrain
