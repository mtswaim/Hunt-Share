import axios from 'axios';

const baseUrl = 'http://localhost:3000'
// const baseUrl = 'https://huntshare-api.herokuapp.com/'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const createLand = async (data) => {
  console.log(data)
  const resp = await api.post('/lands', { land: data })
  return resp.data
}

export const readAllLand = async () => {
  const resp = await api.get('/lands')
  return resp.data
}

export const updateLand = async (id, data) => {
  const resp = await api.put(`/lands/${id}`, { land: data })
  return resp.data
}

export const destroyLand = async (id) => {
  const resp = await api.delete(`/lands/${id}`)
  return resp.data
}
export const getHunts = async (landId) => {
  const resp = await api.get(`/lands/${landId}/hunts`)
  return resp.data
}

export const postHunt = async (userId, landId, huntData) => {
  huntData.user_id = userId
  huntData.land_id = landId
  const resp = await api.post(`/lands/${landId}/hunts`, huntData)
  return resp.data
}

export const putHunt = async (huntId, huntData) => {
  const resp = await api.put(`/lands/landId/hunts/${huntId}`, huntData)
  return resp.data
}

export const deleteHunt = async (huntId) => {
  const resp = await api.delete(`/lands/pineapple/hunts/${huntId}`)
  return resp.data
}