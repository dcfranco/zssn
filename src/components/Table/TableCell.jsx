import React from 'react'
import PropTypes from 'prop-types'

export const TableCell = ((props) => {
  const { children, className, onClick } = props
  return (
    <td
      className={ className }
      onClick={ onClick }
      role='presentation'
    >
      { children }
    </td>
  )
})

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

TableCell.defaultProps = {
  children: null,
  className: '',
  onClick: null,
}
