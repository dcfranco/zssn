import React from 'react'
import PropTypes from 'prop-types'

export const CheckboxWrapper = ({ title, children }) => {
  return (
    <div className='mx-3 w-100'>
      <label>{title}</label>
      <div className='w-100 border border-blue-light px-3 py-1 rounded' style={ { backgroundColor: '#eceeef' } }>
        { children }
      </div>
    </div>
  )
}

CheckboxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

CheckboxWrapper.defaultProps = {
  title: '',
}

export default CheckboxWrapper
