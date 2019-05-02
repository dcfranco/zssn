import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FormWrapper = ({ children, className }) => {
  return (
    <div className={ classNames('w-100 d-block d-lg-flex flex-column bg-white border p-3', className) }>
      { children }
    </div>
  )
}

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

FormWrapper.defaultProps = {
  className: '',
}

export default FormWrapper
