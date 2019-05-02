import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { RenderError, RenderSuccess } from './FormRender'
import Input from './uncontrolled/Input'

const ReduxFormInputButton = (props) => {
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
    buttonType,
    buttonText,
    onButtonClick,
    buttonDisabled,
  } = props

  const { touched, error } = meta

  const inputClassName = classNames('form-control', {
    'is-invalid': (touched && error) || errorText,
    'is-valid': successText,
  })

  const labelClassName = classNames({
    'text-danger': (touched && error) || errorText,
    'text-success': successText,
    'sr-only': !label,
  })

  const buttonClassNames = classNames('btn px-sm-5 font-weight-light', {
    'btn-primary': !error && !errorText && !successText,
    'btn-danger': error || errorText,
    'btn-success': successText,
  })

  return (
    <Fragment>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={ input.name } className={ labelClassName }>{ label }</label>
      <div className={ classNames('input-group', className) }>
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
          className={ classNames(inputClassName, className) }
        />
        <div className='input-group-append'>
          {/* eslint-disable-next-line react/button-has-type */}
          <button
            disabled={ buttonDisabled || error }
            className={ buttonClassNames }
            type={ buttonType }
            onClick={ onButtonClick }
          >
            { buttonText }
          </button>
        </div>
      </div>
      {!hideError && <RenderError touched={ touched || errorText } error={ error } /> }
      {!hideSuccess && !error && <RenderSuccess touched={ touched } success={ successText } /> }
      <div className='pb-3' />
    </Fragment>
  )
}

ReduxFormInputButton.propTypes = {
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
  onButtonClick: PropTypes.func,
  buttonType: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
}

ReduxFormInputButton.defaultProps = {
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
  buttonType: 'button',
  buttonDisabled: false,
  onButtonClick: () => {},
}

export default ReduxFormInputButton
