import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { RenderError, RenderSuccess } from './FormRender'
import TextArea from './uncontrolled/TextArea'

const ReduxFormTextArea = (props) => {
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
    placeholder,
    successText,
    formClassName,
    labelClassName,
    inputMode,
  } = props

  const { touched, error } = meta

  const inputClassName = classNames('form-control', {
    'is-invalid': (touched && error) || errorText,
    'is-valid': successText,
  })

  const labelClass = classNames(labelClassName, {
    'text-danger': (touched && error) || errorText,
    'text-success': successText,
    'sr-only': !label,
  })

  const formGroupClassName = classNames('form-group', formClassName)

  return (
    <div className={ formGroupClassName }>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={ input.name } className={ labelClass }>{label}</label>
      <TextArea
        id={ id }
        disabled={ disabled }
        name={ input.name }
        onChange={ input.onChange }
        onFocus={ input.onFocus }
        onBlur={ input.onBlur }
        value={ input.value }
        placeholder={ placeholder }
        inputMode={ inputMode }
        className={ classNames(inputClassName, className) }
      />
      {!hideError && <RenderError touched={ touched || errorText } error={ error || errorText } />}
      {!hideSuccess && <RenderSuccess touched={ touched } success={ successText } />}
    </div>
  )
}

ReduxFormTextArea.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  hideError: PropTypes.bool,
  errorText: PropTypes.string,
  successText: PropTypes.string,
  hideSuccess: PropTypes.bool,
  inputMode: PropTypes.string,
  formClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}

ReduxFormTextArea.defaultProps = {
  input: {},
  meta: {},
  placeholder: '',
  disabled: false,
  className: '',
  hideError: false,
  errorText: null,
  hideSuccess: false,
  successText: null,
  label: null,
  formClassName: '',
  labelClassName: '',
  inputMode: 'text',
}

export default ReduxFormTextArea
