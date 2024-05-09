import axios from '../utils/axiosCustomize'

const postCreateUser = (email, password, username, role, image) => {
  const data = new FormData()
  data.append('email', email)
  data.append('password', password)
  data.append('username', username)
  data.append('role', role)
  data.append('userImage', image)
  return axios.post('api/v1/participant', data)
}

const getAllUser = () => {
  return axios.get('api/v1/participant/all')
}

const putUpdateUser = (id, email, password, username, role, image) => {
  const data = new FormData()
  data.append('id', id)
  data.append('email', email)
  data.append('password', password)
  data.append('username', username)
  data.append('role', role)
  data.append('userImage', image)
  return axios.put('api/v1/participant', data)
}

const deleteUser = (userId) => {
  return axios.delete('api/v1/participant', { data: { id: userId } })
}

const getUserPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (email, password) => {
  return axios.post('api/v1/login', { email, password })
}

export {
  postCreateUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getUserPaginate,
  postLogin,
}
