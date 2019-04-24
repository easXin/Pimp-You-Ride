<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
          <v-btn
            color="success"
            dark
            v-on="on"
          >
            Submit
          </v-btn>
</template>

      <v-card>
        <v-card-title
          v-bind:class ='{red : !success, green: success}'
          class="headline lighten-2"
          primary-title
        >
          {{title}}
        </v-card-title>

        <v-card-text>
         {{text}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
</template>

<script>
  export default {
    name: "SubmitCode",
    props: ["unlockable","locked"],
    data() {
      return {
        dialog: false,
        title: '',
        text: '',
        success: false
      }
    },
    watch: {
      dialog: function() {
        if (this.dialog) {
          let randomNumber = Math.random();
          if (randomNumber > .5) {
            this.title = "Good Job!",
            this.text = "You unlocked "+this.unlockable +"!!",
            this.success = true,
            this.locked = false
          } else {
            this.title = "Error",
            this.success = false,
            this.text = "Your code was incorrect. Please try again.",
<<<<<<< HEAD
            this.locked = false
=======
            this.locked = true
>>>>>>> ac0687c3ca36f530196cdc38631cee200c264800
          }
        }
  
      }
    }
  
  }
</script>

<style scoped>
  
</style>
