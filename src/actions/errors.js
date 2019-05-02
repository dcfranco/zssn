export const ERRORS_SET_ERROR = 'ERRORS_SET_ERROR'
export const ERRORS_CLEAR = 'ERRORS_CLEAR'

export function setError(code, error, critical = false) {
  return {
    type: ERRORS_SET_ERROR,
    code,
    error,
    critical,
  }
}

export function clearErrors() {
  return {
    type: ERRORS_CLEAR,
  }
}
