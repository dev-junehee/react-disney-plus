import axios from 'axios'

export default const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2384e62d35f10c3a52cebab508968631",
    language: "ko-KR"
  }
  
})