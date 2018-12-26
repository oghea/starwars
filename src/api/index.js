import axios from 'axios'
import { baseUri } from '@/lib/config'
import store from '@/store'

const config = {
  baseURL: baseUri
}

function getHeader (addtionalHeaders = {}) {
  const tokenFromStore = store.getters.token
  return {
    Authorization: `Bearer ${tokenFromStore}`,
    ...addtionalHeaders
  }
}

export const get = async (url, options = {}) => {
  const { params, needToken, headers, ...others } = options
  config.params = params || undefined

  if (needToken) {
    config.headers = getHeader(headers)
  } else {
    config.headers = { ...headers || undefined }
  }

  try {
    const response = await axios.get(url, { ...config, ...others })
    return response
  } catch (error) {
    return error.response
  }
}

export const post = async (url, body, options = {}) => {
  const { params, needToken, headers, ...others } = options
  config.params = params || undefined

  if (needToken) {
    config.headers = getHeader(headers)
  } else {
    config.headers = { ...headers || undefined }
  }

  try {
    const response = await axios.post(url, body, { ...config, ...others })
    return response
  } catch (error) {
    return error.response
  }
}

export const put = async (url, body = {}, options = {}) => {
  const { params, needToken, headers, ...others } = options
  config.params = params || undefined

  if (needToken) {
    config.headers = getHeader(headers)
  } else {
    config.headers = { ...(headers || undefined) }
  }

  try {
    const response = await axios.put(url, body, { ...config, ...others })
    return response
  } catch (error) {
    return error.response
  }
}

export const patch = async (url, body = {}, options = {}) => {
  const { params, needToken, headers, ...others } = options
  config.params = params || undefined

  if (needToken) {
    config.headers = getHeader(headers)
  } else {
    config.headers = { ...(headers || undefined) }
  }

  try {
    const response = await axios.patch(url, body, { ...config, ...others })
    return response
  } catch (error) {
    return error.response
  }
}

export const destroy = async (url, options = {}) => {
  const { params, needToken, headers, ...others } = options
  config.params = params || undefined

  if (needToken) {
    config.headers = getHeader(headers)
  } else {
    config.headers = { ...(headers || undefined) }
  }

  try {
    const response = await axios.delete(url, { ...config, ...others })
    return response
  } catch (error) {
    return error.response
  }
}

const api = {
  get,
  post,
  put,
  patch,
  destroy
}
export default api
