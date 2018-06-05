//export const api = "http://localhost:3001";
export const api = "https://ryan-readable-backend.herokuapp.com";

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
