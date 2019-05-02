import { Record } from 'immutable'

const defaultValues = {
  code: null,
  critical: false,
  error: null,
}

export default class Errors extends Record(defaultValues, Errors) {
  constructor(values) {
    super({
      ...values,
    })
  }

  hasError() {
    return this.get('code') !== null
  }

  hasCriticalError() {
    return this.hasError() && this.get('critical')
  }
}
