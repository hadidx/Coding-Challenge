<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <TabView :activeIndex="activeIndex">
    <template  v-if = '$store.state.status.loggedIn == false'>
      <TabPanel header="Login">
        <Login></Login>
      </TabPanel>
      <TabPanel header="Register">
        <Register></Register>
      </TabPanel>
    </template>
    <template v-if = '$store.state.status.loggedIn'>
      <TabPanel header="User">
      <User></User>
      </TabPanel>
      <template v-if = '$store.state.user.User.role=="admin"'>
        <TabPanel header="Admin">
          <Admin></Admin>
        </TabPanel>
      </template>
    </template>
  </TabView>
</template>

<script>
export default {
  data() {
    return { activeIndex: 0 };
  },
  methods:{
    setIndex(i)
    {
      this.activeIndex = i;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
