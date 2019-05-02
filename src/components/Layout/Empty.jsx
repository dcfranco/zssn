import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Empty = ({ children, className }) => {
  return (
    <div className={ classNames('d-flex pt-5 align-items-center justify-content-center flex-column empty', className) }>
      { children }
    </div>
  )
}

Empty.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Empty.defaultProps = {
  className: '',
}

export default Empty
