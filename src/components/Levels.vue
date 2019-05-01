
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
        > 
          <div v-bind:id="'level'+index">
          <v-list-tile-title style="height=10px; width = 10px;">
              <div id = "layoutContentList" style="font-size: 12px;">
                <div v-if="level.unlocked">
                <span style="color:green;">
                  COMPLETE</span>  | Section: {{index+1}}  {{ level.title }} 
                  </div>
                <div v-else>
                 <span style="color:red;">
                  INCOMPLETE</span>  | Section: {{index+1}}  {{ level.title }} 
                </div>
              </div>
               
          </v-list-tile-title>
             
             
             
          </div>
        </v-list-tile>
         
         <StartLevel v-on:setVisibilityFalse="stopLevel"  
          v-bind:visible="startLevelVisible"
          v-bind:title="title"
          v-bind:description="description" 
          v-bind:unlockable="unlockable"/>   
      </v-list>
  </div>
</div>
</template>

<script>

import Level from './Level'
import StartLevel from './dialogs/startLevel.vue'
import submitCode from './dialogs/submitCode.vue'
import {CLOUDS} from '../settings.js'
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
          description:"🐱meow1",
          unlockable: "Clouds",
          unlocked: true
        },
         {
          number: 2,
          title: "If Statements",
          description:"🐱meow1",
          unlockable: "space",
          unlocked: false
        },
        {
          number: 3,
          title: "Assigning Variables",
          description:"🐱meow1",
          unlockable: "deathstar",
          unlocked: false

        }
      ],
      startLevelVisible: false,
      title: "",
      description: "",
      unlockable: ""

    }
  },
  computed: {
      userId(){
        return localStorage.getItem("userId");
      }
    },
  mounted(){
    let firstTile = document.getElementById("level0");
    firstTile.onclick = () => {
                      this.startLevel(this.levels[0].title, this.levels[0].description, this.levels[0].unlockable)};
    firstTile.style.cursor = "pointer";
    this.levels.forEach((level, index)=>{
     
       if(this.levels.length-1!==index){
         this.checkIfLocked(level.unlockable, index+1);
      }
     
    })
  },
  methods: {
    startLevel: function(title,description, unlockable){
      this.startLevelVisible = true;
      this.title = title
      this.description=description;
      this.unlockable=unlockable;
    },
    stopLevel: function(){
      this.startLevelVisible = false;
    },
    
    checkIfLocked: function(unlockable, index){

         
            fetch("http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/badgecontroller.php", {
              // we are making a POST request
              method: 'POST',
              // this is the body of the POST request
              body: JSON.stringify({
                action: "getBadges",
                badgename: unlockable
              })
            }).then((response) => {
              return response.json()
  
            }).then((data)=>{
             fetch("http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/ubcontroller.php", {
               method: 'POST',
               body: JSON.stringify({
                action:  "getUserBadges",
                badgeid : data["badges"][0].badge_id,
                userid : this.userId
              })

             }).then((response)=>{
               return response.json();

             }).then((data)=>{
               if(data.user_badges || index==0){      
                  let levelTile = document.getElementById("level"+index);
                
         
                  levelTile.onclick = () => {
                      this.startLevel(this.levels[index].title, this.levels[index].description, this.levels[index].unlockable)};
                  levelTile.style.cursor = "pointer";
                 this.levels[index].unlocked = true;
               }
               else{
        
                 this.levels[index].unlocked = false;
               }
              
             });
            });
 
      

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
