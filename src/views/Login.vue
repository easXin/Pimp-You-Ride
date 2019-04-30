<template>
  <div class="container">
    <v-form ref="form" lazy-validation>
      <v-text-field v-model="name" label="User Name" required></v-text-field>
  
      <v-text-field label="Password" required></v-text-field>
  
  
  
  
      <v-btn color="success" @click="submit">
        Log In
      </v-btn>
  
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: () => {
      return {
        name: ''
      }
    },
    methods: {
      submit() {
        fetch("http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/usercontroller.php", {
          // we are making a POST request
          method: 'POST',
          // this is the body of the POST request
          body: JSON.stringify({
            action: "getUsers",
            username: this.name
          })
        }).then((response) => {
          return response.json()
  
        }).then((data) => {
          console.log(data)
          localStorage.setItem("userId", data["users"][0].user_id)
          this.$bus.$emit('loggedIn');
          this.$router.push({name: 'home', params: {id: data["Record Id"]}})
        })
      }
  
    }
  }
</script>

<style scoped>
  
</style>

