import request from '../utils/request';
const api = '/api'

export function query() {
  return request('/api/users');
}
export function fetchLogin(args) {//fetch login
  return request(`${api}/login`, {
    method: 'POST',
    body: JSON.stringify(args),
  })
}

export function fetchInit(args) {//fetch menu data
  return request(`${api}/menu`, {
    method: 'POST',
    body: JSON.stringify(args),
  })
}
// /api/menu
