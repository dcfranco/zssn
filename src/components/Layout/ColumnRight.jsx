import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ColumnRight = ({ children, className }) => {
  return (
    <div className={ classNames('ml-auto', className) }>
      { children }
    </div>
  )
}

ColumnRight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

ColumnRight.defaultProps = {
  className: '',
}

export default ColumnRight
