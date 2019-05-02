import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import routeCodes from 'constants/routeCodes'

const Errors = ({ code }) => {
  switch (code) {
    case 401:
      return <Redirect to={ routeCodes.ERROR_401 } />
    case 505:
      return <Redirect to={ routeCodes.ERROR_505 } />
    default:
      return <Redirect to={ routeCodes.ERROR_500 } />
  }
}

Errors.propTypes = {
  code: PropTypes.number,
}

Errors.defaultProps = {
  code: null,
}

export default Errors
