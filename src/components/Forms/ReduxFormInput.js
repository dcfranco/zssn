import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { RenderError, RenderSuccess } from './FormRender'
import Input from './uncontrolled/Input'

const ReduxFormInput = (props) => {
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
    type,
    successText,
    formClassName,
    labelClassName,
    inputMode,
    addonText,
    addonDirection,
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
      <div className='input-group'>
        {
          addonText && addonDirection === 'left' && (
            <div className='input-group-prepend'>
              <span className='input-group-text'>{addonText()}</span>
            </div>
          )
        }
        <Input
          type={ type }
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
          addonText={ addonText }
        />
        {
          addonText && addonDirection === 'right' && (
            <div className='input-group-append'>
              <span className='input-group-text'>{addonText()}</span>
            </div>
          )
        }
      </div>
      {!hideError && <RenderError touched={ touched || errorText } error={ error || errorText } />}
      {!hideSuccess && <RenderSuccess touched={ touched } success={ successText } />}
    </div>
  )
}

ReduxFormInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  hideError: PropTypes.bool,
  errorText: PropTypes.string,
  successText: PropTypes.string,
  hideSuccess: PropTypes.bool,
  inputMode: PropTypes.string,
  formClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  addonText: PropTypes.func,
  addonDirection: PropTypes.string,
}

ReduxFormInput.defaultProps = {
  input: {},
  meta: {},
  placeholder: '',
  disabled: false,
  className: '',
  type: 'text',
  hideError: false,
  errorText: null,
  hideSuccess: false,
  successText: null,
  label: null,
  formClassName: '',
  labelClassName: '',
  inputMode: 'text',
  addonText: null,
  addonDirection: 'left',
}

export default ReduxFormInput
