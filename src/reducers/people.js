import { Record } from 'immutable'
import BaseList, { toEntityList } from 'models/utils/BaseList'
import People from 'models/People'

import {
  PEOPLE_ASYNC_SUCCESS,
  PEOPLE_REPORT_INFECTION_SUCCESS,
  PEOPLE_CREATE_SUCCESS,
  PEOPLE_SAVE_SUCCESS,
  PEOPLE_CLEAN_REQUEST,
  PEOPLE_ID_ASYNC_SUCCESS,
  PEOPLE_CLEAN_SELECTED,
} from 'actions/people'

const PeopleFilters = new Record({
  name: null,
})

const Options = new Record({
  selectedPeople: null,
  successRequest: false,
})

const initialState = new BaseList({
  errorMessage: '',
  results: toEntityList([], People),
  options: Options(),
  filters: PeopleFilters(),
})

const actionsMap = {
  [PEOPLE_ASYNC_SUCCESS]: (state, action) => {
    const { people } = action
    return state.merge({
      results: toEntityList(people, People),
    })
  },
  [PEOPLE_REPORT_INFECTION_SUCCESS]: (state) => {
    return state
  },
  [PEOPLE_CREATE_SUCCESS]: (state, action) => {
    const { people: peopleCreated } = action
    const results = state.get('results')
    const options = state.get('options')

    return state.merge({
      results: results.push(peopleCreated),
      options: options.merge({
        successRequest: true,
      }),
    })
  },
  [PEOPLE_SAVE_SUCCESS]: (state, action) => {
    const { people: peopleSaved } = action
    const options = state.get('options')
    const results = state.get('results')
    return state.merge({
      results: results.map((peopleIn) => {
        if (peopleIn.get('id') === peopleSaved.get('id')) {
          return peopleSaved
        }
        return peopleIn
      }),
      options: options.set('successRequest', true)
    })
  },
  [PEOPLE_CLEAN_REQUEST]: (state) => {
    const options = state.get('options')
    return state.set('options', options.merge({
      successRequest: false,
    }))
  },
  [PEOPLE_ID_ASYNC_SUCCESS]: (state, action) => {
    const { people } = action
    const options = state.get('options')
    return state.set('options', options.set('selectedPeople', new People(people)))
  },
  [PEOPLE_CLEAN_SELECTED]: (state, action) => {
    const options = state.get('options')
    return state.set('options', options.set('selectedPeople', null))
  }
}

export default function people(state = initialState, action = {}) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
