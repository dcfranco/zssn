import React from 'react'
import PropTypes from 'prop-types'

export const TableHead = ((props) => {
  const { children, className } = props
  return (
    <thead className={ className }>
      <tr>
        { children }
      </tr>
    </thead>
  )
})

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

TableHead.defaultProps = {
  className: '',
}
