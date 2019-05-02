import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { RenderError, RenderSuccess } from './FormRender'
import Input from './uncontrolled/Input'

const ReduxFormCheckbox = (props) => {
  const {
    input,
    meta,
    id,
    label,
    disabled,
    className,
    hideError,
    hideSuccess,
    errorText,
    successText,
    formClassName,
  } = props

  const { touched, error } = meta

  const inputClassName = classNames('form-check-input', {
    'is-invalid': (touched && error) || errorText,
    'is-valid': successText,
  })

  const labelClassName = classNames('form-check-label', {
    'text-danger': (touched && error) || errorText,
    'text-success': successText,
    'sr-only': !label,
  })

  const formGroupClassName = classNames('form-check form-checkbox', formClassName)
  return (
    <div className={ formGroupClassName }>
      <Input
        type='checkbox'
        checked={ !!input.value }
        id={ id }
        disabled={ disabled }
        name={ input.name }
        onChange={ () => input.onChange(!input.value) }
        onFocus={ input.onFocus }
        onBlur={ input.onBlur }
        className={ classNames(inputClassName, className) }
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={ input.name } className={ labelClassName }>{label}</label>
      {!hideError && <RenderError touched={ touched || errorText } error={ error || errorText } />}
      {!hideSuccess && <RenderSuccess touched={ touched } success={ successText } />}
    </div>
  )
}

ReduxFormCheckbox.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  hideError: PropTypes.bool,
  errorText: PropTypes.string,
  successText: PropTypes.string,
  hideSuccess: PropTypes.bool,
  formClassName: PropTypes.string,
}

ReduxFormCheckbox.defaultProps = {
  input: {},
  meta: {},
  disabled: false,
  className: '',
  hideError: false,
  errorText: null,
  hideSuccess: false,
  successText: null,
  label: null,
  formClassName: '',
}

export default ReduxFormCheckbox
