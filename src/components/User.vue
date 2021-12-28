<template>
      <div style= 'margin: auto;width: 30%; min-width: fit-content;'>
      <Card style= 'text-align: left;'>
        <template #title>
          User Profile
        </template>
        <template #content>
          <ul>
            <li>First Name: {{$store.state.user.User.first_name}}</li>
            <li>Last Name: {{$store.state.user.User.last_name}}</li>
            <li>Email: {{$store.state.user.User.email}}</li>
            <li>Role: {{$store.state.user.User.role}}</li>
          </ul>
        </template>
      </Card>
    </div> <br>
    <Button @click = '$store.dispatch("logout")'>
      Logout
    </Button>
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

</style>
