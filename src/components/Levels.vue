<template>
  <div>
    <br>
    <div>
      <h1 style="text-align: center;">Course Content</h1>
      <v-list>
        <v-list-tile class="title" v-for="(level, index) in levels" :key="index">
          <div v-bind:id="'level'+index">
            <v-list-tile-title style="height=10px; width = 10px;">
              <div v-if="level.unlocked" class="titleContent" style="color: #4caf50;">
                <i class="material-icons">lock_open</i>
                &nbsp {{index+1}}:&nbsp &nbsp {{ level.title }} 
              
              </div>
              <div v-else>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <div style="color: #f44336;" class="titleContent" v-on="on">
                      <i class="material-icons">lock</i>

                       &nbsp {{index+1}}:&nbsp &nbsp {{ level.title }} 
                    </div>
                  </template>
                  <span>You must pass the current level before playing this level</span>
                </v-tooltip>
              </div>
            </v-list-tile-title>
          </div>
        </v-list-tile>

        <StartLevel
          v-on:setVisibilityFalse="stopLevel"
          v-bind:visible="startLevelVisible"
          v-bind:title="title"
          v-bind:description="description"
          v-bind:unlockable="unlockable"
        />
      </v-list>
    </div>
  </div>
</template>

<script>
import Level from "./Level";
import StartLevel from "./dialogs/startLevel.vue";
import submitCode from "./dialogs/submitCode.vue";
import { CLOUDS } from "../settings.js";
export default {
  name: "Levels",
  components: {
    Level,
    StartLevel,
    submitCode
  },
  props: ["locked"],
  data() {
    return {
      levels: [
        {
          number: 1,
          title: "Hello World!",
          description: "This assignments is an introduction to a useful tool throughout programming. Printing out to the console.\nObjective: Print your first name and last name seperated by a line",
          unlockable: "Clouds",
          startcode: "System.out.print()",
          unlocked: true
      
        },
        {
          number: 2,
          title: "If or else",
          description: "This assignment introduces you to a control statement. A control statement is a code snippet which dictates the flow of a program depending on a condition.\nObjective: Print out either your first name or last name depending if x is larger than 5.",
          unlockable: "If Statements",
          startcode:"if(){}",
          unlocked: false
        },
        {
          number: 3,
          title: "Loops and more loops",
          description: "This assignment introduces you to different kind of loops. loops are based on conditions which dictate if a loop will continue to loop if the condition is true.\nObjective: Use a while, for, and do while loop to iterate through an array and sum up the elements.",
          startcode:"int[] numbers = {26,67,89};",
          unlockable: "twilight",
          unlocked: false
        },
        {
          number: 4,
          title: "Boolean Logic",
          description: "Booleans are a basic but very useful tool in computer science. They can be used as flags, inside if statements, while loops, etc.\nObjective: write a loop that checks students score based on true or false answers.",
          startcode:"boolean[] answers = {true, false, false, false, true};",
          unlockable: "dokdo",
          unlocked: false
        },
        {
          number: 5,
          title: "Assigning Variables",
          description: "Variable assignments are essential in coding. A lot of times you need to store values but where? that's where variables come in!\nObjective: I honestly dont know! woops Easter egg",
          startcode:"System.out.println(ayeeeee)",
          unlockable: "While Loop",
          unlocked: false
        },
        {
          number: 6,
          title: "Intro to Arrays",
          description: "As you probably seen before, arrays are very useful! They basically store many values into a single variable. The catch is that the arrays must be of the same type.\nObjective: Create 5 different types of arrays and loop through each array and print out each element of the same index",
          startcode:"//int[5] numbers = {1,2,3,4,5};",
          unlockable: "merbivore",
          unlocked: false,
          startingCode: "int [] array = [3, 5, 6]"
        },
        {
          number: 7,
          title: " Functions that function",
          description: "Functions are called when you want a specific job done! Instead of writing the code over and over you can use functions!\nObjective: Create a function that prints out every element inside an array.",
          startcode:"void printall(int[] array){}",
          unlockable:"Space",
          unlocked: false
        },
        {
          number: 8,
          title:"Feed the function parameters",
          description:"Some functions take parameters and others dont! it's honestly up to you if you want to feed a function. A parameter is a variable that you can pass into a function and do work.\nObjective: Create a function name power that takes two parameters where the 1st is the base and the 2nd is the power.",
          startcode:"int base = 2;\nint power = 5;",
          unlockable:"kuroir",
          unlocked:false
        },
        {
          number: 9,
          title:"Recursion",
          description:"Some funtions can call themselves! But how can a function end if it keeps calling itself?\nObjective: Recreate the base and power funtion but make but recursive,",
          startcode:"int base = 2;\nint power = 5;",
          unlockable:"padua one",
          unlocked: false
        },
        {
          number: 10,
          title: "Classes",
          description: "A big part of object oriented programming in the use of classes! classes are a good way to create objects that will have similar characteristics and functions.\nObjective: create a class called humans that has a name, last name and age. Give it a function that displays its name. ",
          startcode:"Class Humans{}",
          unlockable:"deathstar",
          unlocked: false
        }
        
      ],
      startLevelVisible: false,
      title: "",
      description: "",
      unlockable: ""
    };
  },
  computed: {
    userId() {
      return localStorage.getItem("userId");
    }
  },
  mounted() {
    let firstTile = document.getElementById("level0");
    console.log("geronimo")
    firstTile.onclick = () => {
      this.startLevel(
        this.levels[0].title,
        this.levels[0].description,
        this.levels[0].unlockable
      );
    };
    firstTile.style.cursor = "pointer";
    this.levels.forEach((level, index) => {
      if (this.levels.length - 1 !== index) {
        this.checkIfLocked(level.unlockable, index + 1);
      }
    });
  },
  methods: {
    startLevel: function(title, description, unlockable) {
      this.startLevelVisible = true;
      this.title = title;
      this.description = description;
      this.unlockable = unlockable;
    },
    stopLevel: function() {
      this.startLevelVisible = false;
    },

    checkIfLocked: function(unlockable, index) {
      fetch(
        "http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/badgecontroller.php",
        {
          // we are making a POST request
          method: "POST",
          // this is the body of the POST request
          body: JSON.stringify({
            action: "getBadges",
            badgename: unlockable
          })
        }
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          fetch(
            "http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/ubcontroller.php",
            {
              method: "POST",
              body: JSON.stringify({
                action: "getUserBadges",
                badgeid: data["badges"][0].badge_id,
                userid: this.userId
              })
            }
          )
            .then(response => {
              return response.json();
            })
            .then(data => {
              if (data.user_badges || index == 0) {
                let levelTile = document.getElementById("level" + index);

                levelTile.onclick = () => {
                  this.startLevel(
                    this.levels[index].title,
                    this.levels[index].description,
                    this.levels[index].unlockable
                  );
                };
                levelTile.style.cursor = "pointer";
                this.levels[index].unlocked = true;
              } else {
                this.levels[index].unlocked = false;
              }
            });
        });
    }
  }
};
</script>

<style scoped>
#tab {
  margin-left: 14px;
  margin-top: 10%;
  font-size: 20px;
}
.title {
  background: #f2f3f5;
  display: inline-block;
  text-align: center;
  width: 80%;
  margin-bottom: 10px;
  clear: left;


}
.v-list__tile__title{
  height: 30px;
}

</style>