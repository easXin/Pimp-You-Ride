<template>

<div>
  <br>
  <div>
    <span id="tab"> Course Content</span>
     <v-list>
        <v-list-tile
          class="title"
          v-for="(level, index) in levels"
          :key="index"
          @click="startLevel(level.title,level.description)"
        > 
 
          <v-list-tile-title style="height=10px; width = 10px;">
              <div id = "layoutContentList" style="font-size: 12px;">
                <div v-if="locked">
                <span style="color:red;">
                  IMCOMPLETED</span>  | Section: {{index+1}}  {{ level.title }} 
                  </div>
                <div v-else>
                 <span style="color:green;">
                  COMPLETED</span>  | Section: {{index+1}}  {{ level.title }} 
                </div>
              </div>
               
          </v-list-tile-title>
        </v-list-tile>
         
         <StartLevel v-on:setVisibilityFalse="stopLevel"  
          v-bind:visible="startLevelVisible"
          v-bind:title="title"
          v-bind:description="description" />   
      </v-list>
  </div>
</div>
</template>

<script>
import Level from './Level'
import StartLevel from './dialogs/startLevel.vue'
import submitCode from './dialogs/submitCode.vue'
export default {
    name: "Levels",
    components: {
        Level, StartLevel, submitCode
    },
    props:['locked'],
    data (){
    return {
       levels: [
       {
          number: 1,
          title: "Course Introduction",
          description:"🐱meow1 Unlocked background: Space, Clouds, Deathstar",
          unlockable: "blue",
          locked : submitCode.locked,
        },
        {
          number: 2,
          title: "Variables, Datatypes and Operators",
          description:"🐱meow2 Unlocked background: Spiderman",
          unlockable: "green",
          locked : submitCode.locked,
        },
        {
          number: 3,
          title: "Expressions, Statements, Code blocks, Methods",
          description:"🐱meow3 Unlocked background:: Spiderverse",
          unlockable: "red",
          locked : submitCode.locked,
        },
        {
          number: 4,
          title: "Control Flow Statements",
          description:"🐱meow4 Unlocked background: Thor",
          unlockable: "red",
          locked : submitCode.locked,
        },
        {
           number: 5,
           title: "Classes, Constructors and Inheritance ",
           description:"🐱meow5 Unlocked background: Avengers Assemble",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 6,
           title: "Composition, Encapsulation, and Polymorphism",
           description:"🐱meow6 Unlocked background: Infinity Wars",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 7,
           title: "Arrays, Lists, Autoboxing and Unboxing",
           description:"🐱meow7 Unlocked background: Darth Vader",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 8,
           title: "Inner and Abstract Classes & Interfaces",
           description:"🐱meow8 Unlocked background: Imperial Ensignia",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 9,
           title: "Java Generics",
           description:"🐱meow9 Unlocked background: StarLord",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 10,
           title: "Static and Final Keyword",
           description:"🐱meow10 Unlocked background: Shield",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 11,
           title: "Java Collection",
           description:"🐱meow11 Unlocked background: Batman",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 12,
           title: "Basic Input & Output",
           description:"🐱meow12 Unlocked background: Deadpool",
           unlockable: "red",
           locked : submitCode.locked,
        }
      ],
      startLevelVisible: false,
      title: "",
      description: "",
    }
  },
  
  methods: {
    startLevel: function(title,description){
      this.startLevelVisible = true;
      this.title = title
      this.description=description;
    },
    stopLevel: function(){
      this.startLevelVisible = false;
    }
  }
}
</script>

<style scoped>
#tab{
  margin-left: 14px;
  margin-top: 10%;
  font-size: 20px;
}
.title{
  background: #F2F3F5;
  text-align: center;
  margin: 2% 25%;
  padding: 15px 15px 0 15px;
  height:88.5px;
  width:570px;
}
</style>