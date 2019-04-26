<template>
<div>
     <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand >Pimp your IDE</b-navbar-brand>
          <b-navbar-nav>
        <b-nav-item ><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item ><router-link to="/ide">IDE</router-link></b-nav-item>
        <b-nav-item ><router-link to="/description">description</router-link></b-nav-item>
        <b-nav-item v-if="loggedIn" @click="logout">Log Out</b-nav-item>
        <template v-else>
        <b-nav-item ><router-link to="/login">Log In</router-link></b-nav-item>
        <b-nav-item ><router-link to="/signup">Sign Up</router-link></b-nav-item>
        </template>
        <b-nav-item ><router-link to="/styleguide">Styleguide</router-link></b-nav-item>
        </b-navbar-nav>
     </b-navbar>

</div>
</template>
<script>



export default {
    name: "Header",
    data: function(){
         return {
             loggedIn: this.checkloggedIn()
         }
    },
    created: function() {
         this.$bus.$on('loggedIn', function(){
              
             this.loggedIn = true
             console.log(this.loggedIn);
         }.bind(this))
     },
     
    methods: {
         logout: function(){
              localStorage.removeItem("userId")
              this.loggedIn = false;
              this.$router.push({name: 'home'})
         },
         checkloggedIn : function(){
              if(localStorage.getItem("userId")){
                   return true;
              }
              else{
                   return false;
              }
         }
         
    }
}
</script>

