import { Record } from 'immutable'

const defaultValues = {
  water: 0,
  food: 0,
  medication: 0,
  ammunition: 0,
}

export default class Inventory extends Record(defaultValues, Inventory) {
  constructor(values) {
    super({
      ...values,
    })
  }
}
