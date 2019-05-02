import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import MENU_LINKS from 'constants/menu'
import { Link } from 'react-router-dom'

const SideBar = ({ location, menuVisible }) => {
  return (
    <div
      className={ classNames('sidebar', {
        'active': menuVisible,
      }) }
    >
      <div className='sidebar-brand text-center'>
        ZSSN
      </div>
      <div
        role='presentation'
        className='sidebar-links'
      >
        { MENU_LINKS.map((menu) => {
          return (
            <Link
              to={ menu.route }
              key={ menu.route }
              className={ classNames({
                'active': menu.isActive(location),
              }) }
            >
              { menu.icon() }
              <span>{ menu.name }</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

SideBar.propTypes = {
  location: PropTypes.object.isRequired,
  menuVisible: PropTypes.bool.isRequired,
}

export default SideBar
