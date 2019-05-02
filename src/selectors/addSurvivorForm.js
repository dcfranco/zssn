import { createSelector } from 'reselect'
import Inventory from 'models/Inventory'

const getPeople = (state) => state.people.get('options').get('selectedPeople')

export const getSearchFormValues = createSelector(
  getPeople,
  (people) => {
    let lonlat = null
    let newPeople = people

    if (!people) {
      return {
        gender: 'M',
        inventory: new Inventory(),
      }
    }

    lonlat = (people.get('lonlat') || '').replace('POINT (', '').replace(')', '')
    lonlat = lonlat.split(' ')

    if (lonlat.length > 1) {
      newPeople = newPeople.set('longitude', lonlat[0])
      newPeople = newPeople.set('latitude', lonlat[1])
    }
    
    return newPeople
  }
)
