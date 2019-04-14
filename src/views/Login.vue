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
        fetch("http://stark.cse.buffalo.edu/cse410/usercontroller.php", {
          // we are making a POST request
          method: 'POST',
          // this is the body of the POST request
          body: JSON.stringify({
            action: "addOrEditUsers",
            username: "james"
          })
        }).then((response) => {
          return response.json()
  
        }).then((data) => {
          console.log(data)
        })
      }
  
    }
  }
</script>

<style scoped>
  
</style>

