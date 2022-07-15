import request from '@/utils/request'
export const login = (username, password) =>
  request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })

export const userInfo = () => {
  return request({
    url: '/user',
    method: 'GET'
  })
}
export const coll = () => {
  return request({
    url: '/user/favorites'
  })
}
