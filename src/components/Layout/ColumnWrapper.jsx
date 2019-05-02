import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ColumnWrapper = ({ children, className }) => {
  return (
    <div className={ classNames('d-block d-lg-flex align-items-center', className) }>
      { children }
    </div>
  )
}

ColumnWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

ColumnWrapper.defaultProps = {
  className: '',
}

export default ColumnWrapper
