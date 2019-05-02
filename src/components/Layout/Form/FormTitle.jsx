import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FormTitle = ({ children, className }) => {
  return (
    <div className={ classNames('d-block', className) }>
      <h3 className='text-primary'>{ children }</h3>
    </div>
  )
}

FormTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

FormTitle.defaultProps = {
  className: '',
}

export default FormTitle
