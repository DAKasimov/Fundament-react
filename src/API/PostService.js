import axios from "axios"

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos", {
        params :{
          _limit : limit,
          _page : page
        }
      }
    )
    return response
  }

  static async getOne(id){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + id)
    return response
  }

  static async getComments(id){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response
  }


  

}
