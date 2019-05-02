import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import SidePanelLinks from './SidePanelLinks'

export { SidePanelLinks }

const SidePanelLayout = ({ title, children }) => {
  return (
    <Fragment>
      <div className='d-flex flex-column' style={ { height: '100%' } }>
        <div className='mx-2 pt-4 pl-2 border-bottom border-light'>
          <h2 className='p-0'>{ title }</h2>
        </div>
        { children }
      </div>
    </Fragment>
  )
}

SidePanelLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SidePanelLayout
