import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Container = ({ children, className }) => {
  return (
    <div className={ classNames('bg-container-light p-4', className) }>
      { children }
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Container.defaultProps = {
  className: '',
}

export default Container