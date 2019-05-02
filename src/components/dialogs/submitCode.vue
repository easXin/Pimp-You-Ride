<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">

            <v-btn
              v-if="unlockable"
              
              color="success"
              dark
              id="submit"
              v-on="on"
            >
              Submit
            </v-btn>
            <v-btn
              v-else
              color="success"
              dark
              v-on="on"
              id="submit"
            >
              Run
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
            @click="backToLevels()"
          >
            Back to Levels
          </v-btn>
          <v-btn
            color="primary"
            flat
            @click="dialog= false;"
          >
            Return to IDE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
</template>

<script>
  let $ = require('jquery')
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
    methods: {
      backToLevels(){
        this.$router.push({name: "home", params: {id: localStorage.getItem("userId")}})
      },
      toggleDarkMode(mode){
         let submitButton = document.getElementById("submit");
        if(mode){
        submitButton.setAttribute("style", "background-color: yellow !important;")
        submitButton.style.color = "black";
        
        }
        else{
        submitButton.setAttribute("style", "background-color: #4caf50 !important;")
        submitButton.style.color = "white";
        
        }
        
      }
    },
    watch: {
      dialog: function() {
        if (this.dialog) {
          let randomNumber = Math.random();
          if (randomNumber > .5) {
            this.title = "Good Job!"
            if(this.unlockable){
            this.text = "You unlocked " + this.unlockable + "!!"
            this.success = true
            fetch("http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/badgecontroller.php", {
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
              fetch("http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/ubcontroller.php", {
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
              this.$emit("update")
            });
            })
            }
            else{
              this.success = true
              this.text = "Congratulations, your code compiles correctly!";
            }
  
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