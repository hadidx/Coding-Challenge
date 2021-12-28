import axios from 'axios'

const api_url = 'http://127.0.0.1:8000/api/'

function authHeader()
{
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token)
  {
    console.log({Authorization: 'Bearer ' + user.token})
    return {Authorization: 'Bearer ' + user.token}
  }
  else{
    return {}
  }
}

class adminServe{
  getCustomerList(entries,page,nameFilter,emailFilter)
  {
    console.log(entries)
    console.log(page)
    let url = api_url+'customers/'+entries+'?page='+page
    url += '&email='+emailFilter
    url += '&first_name='+nameFilter
    console.log(url)
    let data = axios.get(url, {headers:authHeader()})
    console.log(data)
    return data
  }
}

export default new adminServe()
