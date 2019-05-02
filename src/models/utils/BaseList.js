import { Record, List, Map } from 'immutable'

const defaultValues = {
  count: 0,
  next: null,
  previous: null,
  results: new List(),
  options: new Map(),
  filters: new Map(),
  errorMessage: '',
}

export default class BaseList extends Record(defaultValues, BaseList) {
  constructor(values) {
    super({
      ...values,
      filters: values && values.filters ? values.filters : defaultValues.filters,
      options: values && values.options ? values.options : defaultValues.options,
    })
  }

  static findIndexByKey(items, key, value) {
    return items.findIndex((item) => {
      return `${ item.get(`${ key }`) }` === `${ value }`
    })
  }
}

export const toEntityList = (data, Entity) => {
  let entityItems = new List()
  if (data) {
    data.forEach((value) => {
      entityItems = entityItems.push(new Entity(value))
    })
  }
  return entityItems
}
