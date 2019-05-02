import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FormData = ({ children, className }) => {
  return (
    <div className={ classNames('row mt-2', className) }>
      { children }
    </div>
  )
}

FormData.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

FormData.defaultProps = {
  className: '',
}

export default FormData
