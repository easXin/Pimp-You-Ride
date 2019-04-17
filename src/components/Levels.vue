<template>
<div>
    <h1> Levels</h1>
     <v-list>
        <v-list-tile
          v-for="(level, index) in levels"
          :key="index"
          @click="startLevel(level.title)"
        >
         
          <v-list-tile-title>{{ level.title }}</v-list-tile-title>
          
        </v-list-tile>
         <StartLevel v-on:setVisibilityFalse="stopLevel"  
          v-bind:visible="startLevelVisible"
          v-bind:title="title" />

      </v-list>
      
</div>
</template>
<script>
import Level from './Level'
import StartLevel from './dialogs/startLevel.vue'

console.log("hello")

export default {
    name: "Levels",
    components: {
        Level, StartLevel
    },
    data (){
    return {
      levels: [
        {
          number: 1,
          title: "Course Introduction",
          unlockable: "blue"
        },
        {
          number: 2,
          title: "Variables, Datatypes and Operators",
          unlockable: "green",
          unlocked: true
        },
        {
          number: 3,
          title: "Expressions, Statements, Code blocks, Methods and more",
          unlockable: "red"
        },
        {
          number: 4,
          title: "Control Flow Statements",
          unlockable: "red"
        },
        {
           number: 5,
           title: "OOP Part 1 - Classes, Constructors and Inheritance",
           unlockable: "red"
        },
        {
           number: 6,
           title: "OOP Part 2 - Composition, Encapsulation, and Polymorphism",
           unlockable: "red"
        },
        {
           number: 7,
           title: "Arrays, Java inbuilt Lists, Autoboxing and Unboxing",
           unlockable: "red"
        },
        {
           number: 8,
           title: "Inner and Abstract Classes & Interfaces",
           unlockable: "red"
        },
        {
           number: 9,
           title: "Java Generics",
           unlockable: "red"
        },
        {
           number: 10,
           title: "Static and Final Keyword",
           unlockable: "red"
        },
        {
           number: 11,
           title: "Java Collection",
           unlockable: "red"
        },
        {
           number: 12,
           title: "Basic Input & Output",
           unlockable: "red"
        }
        


      ],
      startLevelVisible: false,
      title: ""
    }
  },
  methods: {
    startLevel: function(title){
      this.startLevelVisible = true;
      this.title = title
    },
    stopLevel: function(){
      this.startLevelVisible = false;
    }
  }
}
</script>

