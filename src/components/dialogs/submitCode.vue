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
    props: ["unlockable"],
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
            this.title = "Good Job!"
            this.text = "You unlocked " + this.unlockable + "!!"
            this.success = true
  
            fetch("http://stark.cse.buffalo.edu/cse410/usercontroller.php", {
              // we are making a POST request
              method: 'POST',
              // this is the body of the POST request
              body: JSON.stringify({
                action: "getBadges",
                badge_name: this.username
              })
            }).then((response) => {
              return response.json()
  
            }).then((data) => {
              localStorage.setItem("userId", data["Record Id"])
              this.$bus.$emit('loggedIn');
              this.$router.push({
                name: 'home',
                params: {
                  id: data["Record Id"]
                }
              })
            })
  
          } else {
            this.title = "Error"
            this.success = false
            this.text = "Your code was incorrect. Please try again."
          }
        }
  
      }
    }
  
  }
</script>

<style scoped>
  
</style>
