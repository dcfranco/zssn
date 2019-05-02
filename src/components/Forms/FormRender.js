import React, { Fragment } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const RenderError = (props) => {
  const { touched, error, className } = props
  return touched && error && error.length > 0 ? (
    <Fragment>
      <small className={ classNames('text-danger form-text', className) }>{error}</small>
    </Fragment>
  ) : null
}

RenderError.propTypes = {
  touched: PropTypes.any,
  error: PropTypes.any,
  className: PropTypes.string,
}

RenderError.defaultProps = {
  className: '',
  error: null,
  touched: false,
}

const RenderSuccess = (props) => {
  const { touched, success, className } = props
  return touched && success && success.length > 0 ? (
    <Fragment>
      <small className={ classNames('text-success form-text position-absolute', className) }>{success}</small>
    </Fragment>
  ) : null
}

RenderSuccess.propTypes = {
  touched: PropTypes.any,
  success: PropTypes.any,
  className: PropTypes.string,
}

RenderSuccess.defaultProps = {
  className: '',
  success: null,
  touched: false,
}

export {
  RenderError,
  RenderSuccess,
}
