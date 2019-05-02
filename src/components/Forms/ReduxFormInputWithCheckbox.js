import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { RenderError, RenderSuccess } from './FormRender'
import Input from './uncontrolled/Input'

const ReduxFormInputWithCheckbox = (props) => {
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
    onChangeCheckbox,
  } = props
  const [isEnabled, setEnableInput] = useState(false)

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
        <Input
          type={ type }
          id={ id }
          disabled={ !isEnabled || disabled }
          name={ input.name }
          onChange={ input.onChange }
          onFocus={ input.onFocus }
          onBlur={ input.onBlur }
          value={ input.value }
          placeholder={ placeholder }
          inputMode={ inputMode }
          className={ classNames(inputClassName, className) }
        />
        <div className='input-group-append'>
          <span className='input-group-text' style={ { maxWidth: 40 } }>
            <div className='form-check form-checkbox' style={ { width: 0 } }>
              <Input
                type='checkbox'
                checked={ isEnabled }
                id={ `${ id }-checkbox` }
                name={ input.name }
                onChange={ () => {
                  if (onChangeCheckbox) {
                    onChangeCheckbox()
                  }
                  return setEnableInput(!isEnabled)
                } }
                tabIndex={ -1 }
                className={ classNames('form-check-input', inputClassName, className) }
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-for */}
              <label htmlFor={ `${ id }-checkbox` } className={ labelClassName } />
            </div>
          </span>
        </div>
      </div>
      {!hideError && <RenderError touched={ touched || errorText } error={ error || errorText } />}
      {!hideSuccess && <RenderSuccess touched={ touched } success={ successText } />}
    </div>
  )
}

ReduxFormInputWithCheckbox.propTypes = {
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
  onChangeCheckbox: PropTypes.func,
}

ReduxFormInputWithCheckbox.defaultProps = {
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
  onChangeCheckbox: null,
}

export default ReduxFormInputWithCheckbox
