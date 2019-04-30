<template>
<v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        {{title}}
      </v-card-title>

      <v-card-text>
        {{description}}
      </v-card-text>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="dialog= false">
          Stay here
        </v-btn>
        <v-btn color="primary" flat @click="goToLevel(title,description, unlockable)">
          Go to Level 
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


    
<script>
  export default {
    name: "StartLevel",
    props: ["levelTitle", "visible", "title","description", "unlockable"],
    data() {
      return {
        dialog: false
  
      }
    },
    watch: {
      visible: function() {
        this.dialog = this.visible
  
  
      },
      dialog: function() {
        if (this.dialog == false) {
          this.$emit("setVisibilityFalse")
        }
      }
    },
    methods: {
      goToLevel: function(title,description, unlockable) {
        this.$router.push({name: 'ide', params: {title: title , description:description, unlockable: unlockable}})        
      }
    }
  
  }
</script>

<style scoped>
  
</style>
