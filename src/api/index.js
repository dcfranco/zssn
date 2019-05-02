import { getDispatch } from 'containers/Spy'
import { setError } from 'actions/errors'
import { apiUrl } from 'constants/config'

const customError = (error) => {
  this.error = error
  this.stack = (new Error()).stack
}
const defaultContentType = 'application/json'

const RESPONSE_TYPES = {
  JSON: 'json',
  BLOB: 'blob',
}

const CONTENT_TYPES = {
  JSON: 'application/json',
  MULTIPART: 'multipart/form-data',
}

const asyncRequest = async (payload) => {
  const {
    path,
    method,
    body,
    token,
    cType,
    rType,
    header,
    externalPath,
  } = payload

  const contentType = cType || defaultContentType
  const responseType = rType || RESPONSE_TYPES.JSON

  const headers = { ...header }

  if (contentType !== CONTENT_TYPES.MULTIPART) {
    headers['Content-Type'] = `${ contentType }`
  }

  if (token) {
    headers.Authorization = `Bearer ${ token }`
  }

  let transformedBody = body
  if (contentType === CONTENT_TYPES.JSON) {
    transformedBody = JSON.stringify(body)
  }

  const url = !externalPath ? `${ apiUrl }${ path }` : externalPath
  const response = await fetch(url, {
    method,
    headers,
    body: body ? transformedBody : undefined,
  })

  if (response.status === 200 || response.status === 201) {
    const responseBody = responseType === RESPONSE_TYPES.BLOB ? response.blob() : response.json()
    return responseBody
  }

  if (response.status === 204) {
    return null
  }

  if (response.status === 400) {
    const dispatch = getDispatch()
    const error = await response.json()
    dispatch(setError(400, error))
    throw error
  }

  if (response.status === 422) {
    const dispatch = getDispatch()
    const error = await response.json()
    dispatch(setError(400, error, false))
    throw error
  }

  const connectionError = [502, 503, 504]
  const permissionError = [403, 404]

  if (connectionError.includes(response.status)) {
    const dispatch = getDispatch()
    const error = await response.json()
    dispatch(setError(505, error, true))
    throw error
  }

  if (permissionError.includes(response.status)) {
    const dispatch = getDispatch()
    const error = await response.json()
    dispatch(setError(401, error, true))
    throw error
  }

  const dispatch = getDispatch()
  const error = 'An unexpected error has occured.'
  dispatch(setError(500, error, true))
  throw error
}

export {
  asyncRequest,
  RESPONSE_TYPES,
  CONTENT_TYPES,
}
