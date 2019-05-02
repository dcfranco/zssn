import { Record } from 'immutable'
import Inventory from './Inventory'

const defaultValues = {
  id: '',
  location: '',
  name: '',
  age: '',
  gender: '',
  lonlat: null,
  latitude: null,
  longitude: null,
  created_at: null,
  updated_at: null,
  infected: false,
  inventory: new Inventory(),
}

export default class People extends Record(defaultValues, People) {
  constructor(values) {
    let location = null

    if (values.location && values.location.split('/')) {
      location = values.location.split('/')
    }

    super({
      ...values,
      id: location ? location[location.length - 1] : defaultValues.id,
    })
  }
}
