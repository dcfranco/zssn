import React from 'react'
import PropTypes from 'prop-types'

export const TableHeader = ((props) => {
  const { children, className, onClick, style } = props
  return (
    <th
      className={ className }
      onClick={ onClick }
      style={ style }
      scope='col'
    >
      { children }
    </th>
  )
})

TableHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
}

TableHeader.defaultProps = {
  children: null,
  className: '',
  onClick: null,
  style: null,
}
