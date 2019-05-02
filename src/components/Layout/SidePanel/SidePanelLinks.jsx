import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SidePanelLinks = ({ children, className }) => {
  return (
    <Fragment>
      <div className={ classNames('mx-2 mt-3 sidepanel-links', className) }>
        { children }
      </div>
    </Fragment>
  )
}

SidePanelLinks.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

SidePanelLinks.defaultProps = {
  className: '',
}

export default SidePanelLinks
