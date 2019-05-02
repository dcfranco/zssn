import PropTypes from 'prop-types'
import React from 'react'

const Select = (props) => {
  const {
    onChange,
    onBlur,
    name,
    id,
    disabled,
    className,
    placeholder,
    value,
    options,
  } = props

  return (
    <select
      id={ id }
      disabled={ disabled }
      name={ name }
      onChange={ onChange }
      onBlur={ onBlur }
      value={ value }
      placeholder={ placeholder }
      className={ className }
    >
      { options.map((option) => (
        <option key={ option.value } value={ option.value }>{ option.label }</option>
      )) }
    </select>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
}

Select.defaultProps = {
  onChange: null,
  onBlur: null,
  value: '',
  placeholder: '',
  disabled: false,
  className: '',
}

export default Select
