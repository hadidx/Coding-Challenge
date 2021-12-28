<template>
  <div>
    <div style="padding: 10px">
      <label style = 'display: block'>Email: </label>
      <InputText v-model = 'v$.email.$model' name = 'email' id="email" type="email" />
      <template  v-for="(error, index) of v$.email.$errors" :key="index">
        <div class="error">{{ error.$message }}</div>
      </template>
    </div>
    <div>
      <label style = 'display: block' for="password">Password: </label>
      <Passwrd v-model = 'v$.password.$model' name='password' :option="false"></Passwrd>
      <template v-for="(error, index) of v$.password.$errors" :key="index">
        <div class="error">{{ error.$message }}</div>
      </template>
    </div>
    <p><Button :disabled="v$.$invalid" label="Login" icon="pi pi-user" @click = 'handleLogin({email,password})'></Button></p>
    <h1>{{message}} </h1>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
        email: "",
        password: "",
        message: "",
    };
  },
  validations() {
    return {
        email: {
           required, email
        },
        password: {
            required,
        },
    }
  },
  methods:
  {
    handleLogin(user)
    {
      this.$store.dispatch("login", user).then(
        ()=>{this.message =  ""},
        (error)=>{ this.message = error.response.data.error }
      )
    }
  },
};
</script>

<style>
.error{
			color: #D8000C;
      width: fit-content;
      text-align: center;
      margin: auto;
    }
</style>
