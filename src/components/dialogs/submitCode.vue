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
    data: () => {
      return {
        dialog: false,
        title: '',
        text: '',
        success: false,
      }
    },
    computed: {
      userId(){
        return localStorage.getItem("userId");
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
            console.log(this.badge_name)
            fetch("http://stark.cse.buffalo.edu/cse410/badgecontroller.php", {
              // we are making a POST request
              method: 'POST',
              // this is the body of the POST request
              body: JSON.stringify({
                action: "getBadges",
                badgename: this.unlockable
              })
            }).then((response) => {
              return response.json()
  
            }).then((data) => {
              console.log(data)
              fetch("http://stark.cse.buffalo.edu/cse410/ubcontroller.php", {
              // we are making a POST request
              method: 'POST',
              // this is the body of the POST request
              body: JSON.stringify({
                action:  "addOrEditUserBadges",
                badgeid : data["badges"][0].badge_id,
                userid : this.userId
              })
            }).then((response) => {
              return response.json()
  
            }).then((data) => {
              console.log(data);
            });
            })
  
          } else {
            this.title = "Error",
            this.success = false,
            this.text = "Your code was incorrect. Please try again.",
            this.locked = false

            this.locked = true

          }
        }
  
      }
    }
  
  }
</script>

<style scoped>
  
</style>
