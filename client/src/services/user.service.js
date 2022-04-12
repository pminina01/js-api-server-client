import axios from 'axios'
import authService from './auth.service'

class UserService {
  API_ENDPOINT = 'http://localhost:3003'

  // We will use authService to get saved TOKEN
  constructor(authService) {
    this.authService = authService
  }

  async getUsers() {
    const response = await axios.get(`${this.API_ENDPOINT}/info`, {
      headers: {
         Authorization: authService.TOKEN 
        }
    })

    return response.data
  }

  // async getUserById(id) {
  //   const response = await axios.get(/* TODO implement getUserById if you would implement optional part */)

  //   return response.headers
  // }
}

const userService = new UserService(authService)

export default userService
