import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { RenderError, RenderSuccess } from './FormRender'
import Select from './uncontrolled/Select'

const ReduxFormSelect = (props) => {
  const {
    input,
    meta: { touched, error },
    id,
    label,
    disabled,
    className,
    hideError,
    hideSuccess,
    errorText,
    placeholder,
    labelClassName,
    successText,
    options,
  } = props

  const inputTouched = touched

  const selectClassName = classNames('form-control', {
    'is-invalid': (error && inputTouched) || errorText,
    'is-valid': successText,
  })

  const labelClass = classNames(labelClassName, {
    'text-danger': (error && inputTouched) || errorText,
    'text-success': successText,
    'sr-only': !label,
  })

  return (
    <div className={ classNames('form-group', className) }>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={ input.name } className={ labelClass }>{ label }</label>
      <Select
        id={ id }
        disabled={ disabled }
        name={ input.name }
        onChange={ input.onChange }
        onBlur={ input.onBlur }
        value={ input.value }
        placeholder={ placeholder }
        className={ selectClassName }
        options={ options }
      />
      {!hideError && (
        <RenderError touched={ inputTouched || errorText } error={ error || errorText } />
      ) }
      {!hideSuccess && <RenderSuccess touched={ inputTouched } success={ successText } /> }
    </div>
  )
}

ReduxFormSelect.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  hideError: PropTypes.bool,
  errorText: PropTypes.string,
  successText: PropTypes.string,
  hideSuccess: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
}

ReduxFormSelect.defaultProps = {
  input: {},
  meta: {},
  placeholder: '',
  disabled: false,
  className: '',
  labelClassName: '',
  hideError: false,
  errorText: null,
  hideSuccess: false,
  successText: null,
  label: null,
}

export default ReduxFormSelect
