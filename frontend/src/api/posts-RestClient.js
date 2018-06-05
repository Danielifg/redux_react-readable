const api = "http://localhost:3001";

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(posts =>  posts.filter(post => !post.deleted))


export const getPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
      .then(res => res.json())
