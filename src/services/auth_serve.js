import axios from 'axios'

const api_url = 'http://127.0.0.1:8000/api/'
class authServe
{
  login(user){
    return axios.post(api_url+'login',{
        email: user.email,
        password: user.password,
      }).then(
        response=>{
          if (response.data.token)
          {
            localStorage.setItem('user',JSON.stringify(response.data));
            console.log(response.data)
          }

          return response.data;
        }
      );
  }

  logout() {
    localStorage.removeItem('user');
  }

  register (user){
    return axios.post(api_url+'register',{
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password:user.password
    })
  }
}

export default new authServe()
