
<template>

<div>
  <br>
  <div>
    <span id="tab"> Course Content</span>
     <v-list >
     <v-list>
        <v-list-tile
          class="title"
          v-for="(level, index) in levels"
          :key="index"
          @click="startLevel(level.title)"
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
          v-bind:title="title" />   
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
          unlockable: "blue",
          locked : submitCode.locked,
        },
        {
          number: 2,
          title: "Variables, Datatypes and Operators",
          unlockable: "green",
          locked : submitCode.locked,
        },
        {
          number: 3,
          title: "Expressions, Statements, Code blocks, Methods",
          unlockable: "red",
          locked : submitCode.locked,
        },
        {
          number: 4,
          title: "Control Flow Statements",
          unlockable: "red",
          locked : submitCode.locked,
        },
        {
           number: 5,
           title: "Classes, Constructors and Inheritance",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 6,
           title: "Composition, Encapsulation, and Polymorphism",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 7,
           title: "Arrays, Lists, Autoboxing and Unboxing",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 8,
           title: "Inner and Abstract Classes & Interfaces",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 9,
           title: "Java Generics",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 10,
           title: "Static and Final Keyword",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 11,
           title: "Java Collection",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 12,
           title: "Basic Input & Output",
           unlockable: "red",
           locked : submitCode.locked,
        }
      ],
      startLevelVisible: false,
      title: "",

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

<style scoped>
#tab{
  margin-left: 14px;
  margin-top: 10%;
  font-size: 20px;
}
.title{
  background: #F2F3F5;
  text-align: center;
  /* top right buttom left */
  margin: 2% 9%;
  padding: 15px 15px 0 15px;
  /* size: 88.5px 570px; */
  height:88.5px;
  width:570px;
}

</style>
