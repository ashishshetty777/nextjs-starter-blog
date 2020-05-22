import React from 'react'
import PropTypes from 'prop-types'

function PriorityText({className = '', text = '', clickHandler, ...props}) {
  return (
    <h1 className={`${className}`} onClick={clickHandler} {...props}>
      {text}
    </h1>
  )
}

PriorityText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  clickHandler: PropTypes.func,
}

function MainBrain() {
  const [text, setText] = React.useState('Hello there!')

  const textClickHandler = () => {
    setText(text === 'Hello there!' ? 'Been there!' : 'Hello there!')
  }
  return (
    <div>
      <PriorityText text={text} clickHandler={textClickHandler} />
    </div>
  )
}

export default MainBrain
