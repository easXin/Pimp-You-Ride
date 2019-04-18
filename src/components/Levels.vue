<template>
<div>
    <h1> ID  {{id}}</h1>
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


export default {
    name: "Levels",
    components: {
        Level, StartLevel
    },
    props: ["id"],
    data (){
    return {
      levels: [
        {
          number: 1,
          title: "Hello World",
          unlockable: "blue"
        },
        {
          number: 2,
          title: "Assigning variables",
          unlockable: "green"
        },
        {
          number: 3,
          title: "If not then else",
          unlockable: "red"
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

