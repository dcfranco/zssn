import React from 'react'
import PropTypes from 'prop-types'

export const TableRow = ((props) => {
  const { children, className, onClick } = props
  return (
    <tr
      className={ className }
      onClick={ onClick }
      role='presentation'
    >
      { children }
    </tr>
  )
})

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

TableRow.defaultProps = {
  className: '',
  onClick: null,
}
