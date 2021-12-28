import {createStore} from 'vuex'
import authServe from '../services/auth_serve'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
const auth = {
  state:
    initialState,

  mutations:
  {
    loginSuccess(state, user) {
        state.status.loggedIn = true;
        state.user = user;
    },
    loginFailure(state) {
        state.status.loggedIn = false;
        state.user = null;
    },
    loggedOut(state) {
        state.status.loggedIn = false;
        state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  },

  actions:
  {
    login({commit},user)
    {
      return authServe.login(user).then(
        user=>
        {
          commit('loginSuccess', user)
          return Promise.resolve(user)
        },
        error=>
        {
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },

    logout({ commit }) {
        authServe.logout();
        commit('loggedOut');
      },
    register({commit},user)
    {
      return authServe.register(user).then(
        response=>{
          commit('registerSuccess')
          return Promise.resolve(response.data)
        },
        error=>{
          commit('registerFailure')
          return Promise.reject(error)
        }
      )
    }
  }
}


/*const auth = {
  state,
  mutations,
  getters,
  actions
}*/

const store = createStore(auth)

export default store
