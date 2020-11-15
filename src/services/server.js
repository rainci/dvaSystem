import request from '../utils/request';
const api = '/api'

export function query() {
  return request('/api/users');
}
export function fetchLogin(args) {
  return request(`${api}/login`, {
    method: 'POST',
    body: JSON.stringify(args),
  })
}
