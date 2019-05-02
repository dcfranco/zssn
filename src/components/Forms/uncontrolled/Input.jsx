import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const Input = (props) => {
  const {
    onChange,
    onBlur,
    name,
    id,
    disabled,
    className,
    placeholder,
    type,
    value,
    checked,
    inputMode,
    tabIndex,
  } = props


  return (
    <Fragment>
      <input
        type={ type }
        id={ id }
        disabled={ disabled }
        name={ name }
        onChange={ onChange }
        onBlur={ onBlur }
        value={ value }
        placeholder={ placeholder }
        className={ className }
        checked={ checked }
        inputMode={ inputMode }
        tabIndex={ tabIndex }
      />
    </Fragment>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.any,
  inputMode: PropTypes.string,
  tabIndex: PropTypes.number,
}

Input.defaultProps = {
  onChange: null,
  onBlur: null,
  value: '',
  placeholder: '',
  disabled: false,
  className: '',
  type: 'text',
  checked: false,
  inputMode: 'text',
  tabIndex: null,
}

export default Input
