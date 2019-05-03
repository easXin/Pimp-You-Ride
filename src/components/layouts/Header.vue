<template>
  <div>
       <b-navbar toggleable="lg" type="dark" variant="info" id="navbar">
    <b-navbar-brand href="#">PIMP YOUR IDE</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
           <b-nav-item>
            <router-link to="/" class="navtext">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/ide" class="navtext">IDE</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/description" class="navtext">Description</router-link>
          </b-nav-item>
          
          <b-nav-item>
            <router-link to="/leaderboard" class="navtext">Leaderboard</router-link>
          </b-nav-item>
          <template style="float: right; display: inline;">
          <b-nav-item v-if="loggedIn" @click="logout">Log Out</b-nav-item>
          <template v-else>
            <b-nav-item >
              <router-link to="/login" class="navtext">Log In</router-link>
            </b-nav-item>
            <b-nav-item >
              <router-link to="/signup" class="navtext">Sign Up</router-link>
            </b-nav-item>
          </template>
          </template>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
    
    
    </b-collapse>
  </b-navbar>

   
  </div>
</template>
<script>
export default {
  name: "Header",
  data: function() {
    return {
      loggedIn: this.checkloggedIn()
    };
  },
  created: function() {
    this.$bus.$on(
      "loggedIn",
      function() {
        this.loggedIn = true;
        console.log(this.loggedIn);
      }.bind(this)
    );
  },

  methods: {
    logout: function() {
      localStorage.removeItem("userId");
      this.loggedIn = false;
      this.$router.push({ name: "login" });
    },
    checkloggedIn: function() {
      if (localStorage.getItem("userId")) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style>
#navbar {
  background-color: #1976d2 !important;
}
.navtext {
  color: white;
  margin-left: 10px;
}
</style>

