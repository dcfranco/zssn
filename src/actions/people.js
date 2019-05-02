import { appLoadSpinner, appUnloadSpinner } from 'actions/app'
import { asyncRequest } from 'api'

export const PEOPLE_ASYNC_SUCCESS = 'PEOPLE_ASYNC_SUCCESS'
export const PEOPLE_ASYNC_FAIL = 'PEOPLE_ASYNC_FAIL'
export const PEOPLE_REPORT_INFECTION = 'PEOPLE_REPORT_INFECTION'
export const PEOPLE_REPORT_INFECTION_SUCCESS = 'PEOPLE_REPORT_INFECTION_SUCCESS'
export const PEOPLE_CREATE = 'PEOPLE_CREATE'
export const PEOPLE_CREATE_SUCCESS = 'PEOPLE_CREATE_SUCCESS'
export const PEOPLE_SAVE = 'PEOPLE_SAVE'
export const PEOPLE_SAVE_SUCCESS = 'PEOPLE_SAVE_SUCCESS'
export const PEOPLE_CLEAN_REQUEST = 'PEOPLE_CLEAN_REQUEST'
export const PEOPLE_ID_ASYNC_SUCCESS = 'PEOPLE_ID_ASYNC_SUCCESS'
export const PEOPLE_ID_ASYNC_FAIL = 'PEOPLE_ID_ASYNC_FAIL'
export const PEOPLE_CLEAN_SELECTED = 'PEOPLE_CLEAN_SELECTED'

function peopleAsyncSuccess(people) {
  return {
    type: PEOPLE_ASYNC_SUCCESS,
    people,
  }
}

function peopleIdAsyncSuccess(people) {
  return {
    type: PEOPLE_ID_ASYNC_SUCCESS,
    people,
  }
}

function peopleCreateSuccess(people) {
  return {
    type: PEOPLE_CREATE_SUCCESS,
    people,
  }
}

function peopleReportInfectedSuccess() {
  return {
    type: PEOPLE_REPORT_INFECTION_SUCCESS,
  }
}

function peopleSaveSuccess(people) {
  return {
    type: PEOPLE_SAVE_SUCCESS,
    people,
  }
}

function peopleAsyncFail(errorMessage) {
  return {
    type: PEOPLE_ASYNC_FAIL,
    errorMessage,
  }
}

export function peopleCleanSelected() {
  return {
    type: PEOPLE_CLEAN_SELECTED,
  }
}

export function peopleCleanRequest(){
  return {
    type: PEOPLE_CLEAN_REQUEST,
  }
}

export function peopleAsyncRequest() {
  return async (dispatch) => {
    dispatch(appLoadSpinner())
    try {
      const response = await asyncRequest({
        path: '/people.json',
        method: 'GET',
        body: null,
      })
      dispatch(peopleAsyncSuccess(response))
      return response
    } catch (errorMessage) {
      dispatch(peopleAsyncFail(errorMessage))
      return null
    } finally {
      dispatch(appUnloadSpinner())
    }
  }
}

export function peopleIdAsyncRequest(id) {
  return async (dispatch) => {
    dispatch(appLoadSpinner())
    try {
      const response = await asyncRequest({
        path: `/people/${id}.json`,
        method: 'GET',
        body: null,
      })

      dispatch(peopleIdAsyncSuccess(response))
      return response
    } catch (errorMessage) {
      dispatch(peopleAsyncFail(errorMessage))
      return null
    } finally {
      dispatch(appUnloadSpinner())
    }
  }
}

export function peopleCreate(people) {
  return async (dispatch) => {
    dispatch(appLoadSpinner())
    try {
      const response = await asyncRequest({
        path: '/people.json',
        method: 'POST',
        body: people,
      })

      dispatch(peopleCreateSuccess(response))
      return response
    } catch (errorMessage) {
      dispatch(peopleAsyncFail(errorMessage))
      return null
    } finally {
      dispatch(appUnloadSpinner())
    }
  }
}

export function peopleReportInfected(peopleId, infectedSurvivorId) {
  return async (dispatch) => {
    dispatch(appLoadSpinner())
    try {
      const response = await asyncRequest({
        path: `people/${ peopleId }/report_infection.json`,
        method: 'POST',
        body: {
          infected: infectedSurvivorId,
        },
      })

      dispatch(peopleReportInfectedSuccess(response))
      return response
    } catch (errorMessage) {
      dispatch(peopleAsyncFail(errorMessage))
      return null
    } finally {
      dispatch(appUnloadSpinner())
    }
  }
}

export function peopleSave(people, id) {
  return async (dispatch) => {
    dispatch(appLoadSpinner())
    try {
      const response = await asyncRequest({
        path: `/people/${id}.json`,
        method: 'PATCH',
        body: people,
      })

      dispatch(peopleSaveSuccess(response))
      return response
    } catch (errorMessage) {
      dispatch(peopleAsyncFail(errorMessage))
      return null
    } finally {
      dispatch(appUnloadSpinner())
    }
  }
}
