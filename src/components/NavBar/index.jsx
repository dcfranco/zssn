import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@material-ui/icons'

const NavBar = ({ changeMenuVisible }) => {
  return (
    <nav className='navbar navbar-light bg-white fixed-top shadow-sm'>
      <div className='row w-100 no-gutters'>
        <div className='d-flex d-lg-none col-3'>
          <button
            className='navbar-toggler'
            type='button'
            onClick={ changeMenuVisible }
          >
            <Menu />
          </button>
        </div>
        <div className='col'>
          <ul className='nav-options list-unstyled flex-row-reverse h-100 desktop'>
            <li className='border-left border-light align-items-center d-flex system-options'>
              <div className='d-flex flex-row'>
                <div className='align-items-center d-flex'>
                  <div className='text-right'>
                    <span className='system-name text-right text-truncate'>
                      ZSSN
                    </span>
                    <br />
                    <span className='system-perfil text-right text-truncate'>
                      System
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  changeMenuVisible: PropTypes.func.isRequired,
}

export default NavBar
