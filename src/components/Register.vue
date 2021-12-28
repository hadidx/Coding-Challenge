<template>
  <div>
    <div style="padding: 10px">
      <label style = 'display: block'>First Name: </label>
      <InputText id="email1" type="text" v-model = 'v$.first_name.$model'/>
      <template  v-for="(error, index) of v$.first_name.$errors" :key="index">
        <div class="error">{{ error.$message }}</div>
      </template>
    </div>
    <div style="padding: 10px">
      <label style = 'display: block'>Last Name: </label>
      <InputText id="email1" type="text" v-model = 'v$.last_name.$model'/>
      <template  v-for="(error, index) of v$.last_name.$errors" :key="index">
        <div class="error">{{ error.$message }}</div>
      </template>
    </div>
    <div style="padding: 10px">
      <label style = 'display: block'>Email: </label>
      <InputText id="email1" type="email" v-model = 'v$.email.$model'/>
      <template  v-for="(error, index) of v$.email.$errors" :key="index">
        <div class="error">{{ error.$message }}</div>
      </template>
    </div>
    <div>
      <label style = 'display: block' for="password">Password: </label>
      <Passwrd :option="true" v-model = 'v$.password.$model'></Passwrd>
      <template  v-for="(error, index) of v$.password.$errors" :key="index">
        <div class="error">{{ error.$message }}</div>
      </template>
    </div>
    <p><Button :disabled="v$.$invalid" label="Register" icon="pi pi-user" @click = 'handleRegistration({first_name,last_name,email,password})'></Button></p>
    <h1>{{message}}</h1>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength} from '@vuelidate/validators'
export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      first_name:"",
      last_name:"",
      email: "",
      password: "",
      message:""
    };
  },
  validations() {
    return {
        first_name: {
           required,
        },
        last_name: {
           required,
        },
        email: {
           required, email
        },
        password: {
            required,
            min: minLength(6)
        },
    }
  },
  methods:{
    handleRegistration(user)
    {
      this.$store.dispatch('register',user).then(
        data=>{
          this.message = data.message
        },
        error=>{
          this.message = error.response.data.message+error.response.data.errors.email
        }
      )
    }
  },

};
</script>

<style>

</style>
