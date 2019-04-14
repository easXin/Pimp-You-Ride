<template>
<div>
     <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand >Pimp your IDE</b-navbar-brand>
          <b-navbar-nav>
        <b-nav-item ><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item ><router-link to="/ide">IDE</router-link></b-nav-item>
        <b-nav-item ><router-link to="/description">description</router-link></b-nav-item>
        <b-nav-item ><router-link to="/login">Log In</router-link></b-nav-item>
        </b-navbar-nav>
     </b-navbar>

</div>
</template>
<script>



export default {
    name: "Header"
}
</script>

