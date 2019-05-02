import { createNumberMask, createTextMask } from 'redux-form-input-masks'

export const normalizeAll = (normalizers) => {
  return (value, previousValue, allValues, previousAllValues) => {
    let i = 0
    const normalizersLength = normalizers.length
    let currentValue = value
    while (i < normalizersLength) {
      const currentNormalizer = normalizers[i]
      if (typeof currentNormalizer === 'function') {
        currentValue = currentNormalizer(currentValue, previousValue, allValues, previousAllValues)
      }
      i++
    }

    return currentValue
  }
}

export const currencyMask = createNumberMask({
  prefix: 'R$ ',
  decimalPlaces: 2,
  locale: 'pt-BR',
})

export const currencyMaskWithoutPrefix = createNumberMask({
  decimalPlaces: 2,
  locale: 'pt-BR',
})

export const phoneMask = createTextMask({
  pattern: '(99) 999 999 999',
  guide: false,
})

// TODO: Change to datepicker
export const dateMask = createTextMask({
  pattern: '99/99/9999',
  guide: false,
  stripMask: false,
})

export const cepMask = createTextMask({
  pattern: '99999-999',
  guide: false,
  stripMask: false,
})

export const onlyNumbers = (value) => {
  if (value) {
    const onlyNums = value.replace(/[^\d]/g, '')
    return onlyNums
  }
  return value
}

export const cepNormalizer = (value) => {
  if (value) {
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 5) {
      return onlyNums
    }
    return `${ onlyNums.slice(0, 5) }-${ onlyNums.slice(5, 8) }`
  }
  return value
}

export const maxLength = (max) => (value) => {
  if (value) {
    const onlyNums = value.slice(0, max)
    return onlyNums
  }
  return value
}

export const cpfNormalizer = (value) => {
  if (value) {
    const onlyNums = value.replace(/[^\d]/g, '')

    if (onlyNums.length <= 3) {
      return onlyNums
    }
    if (onlyNums.length <= 6) {
      return `${ onlyNums.slice(0, 3) }.${ onlyNums.slice(3, 6) }`
    }
    if (onlyNums.length <= 9) {
      return `${ onlyNums.slice(0, 3) }.${ onlyNums.slice(3, 6) }.${ onlyNums.slice(6, 9) }`
    }

    return `${ onlyNums.slice(0, 3) }.${ onlyNums.slice(3, 6) }.${ onlyNums.slice(6, 9) }-${ onlyNums.slice(9, 11) }`
  }
  return value
}
