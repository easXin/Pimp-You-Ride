<template>
    <div id="page">

        <b-container>
             
            <b-row>
                <b-col><IDEMenu @changeFonts="changeFonts" @changeBackground="changeBackground"/></b-col>
                 <b-col >
                     
                    <h3 v-if="title"> {{title}}</h3>                 
                    <h3 v-else> Welcome to your IDE.....</h3>
                    <div class="tab">
                        <button class="tabInfo" >Home</button>
                        <button class="tabInfo" >Hint</button>
                        <button class="tabInfo" >...</button>
                        <button class="tabInfo" >...</button>
                        <button class="tabInfo" >...</button>
                        <button class="tabInfo" >...</button>
                    </div>
                    <br>
                    <!-- add attribute to the tab if there is needed -->
                        <div id="addAttributeToTab1" class="tabcontent"></div>
                        <div id="addAttributeToTab2" class="tabcontent"></div>
                    <!-- add attribute to the tab if there is needed -->

                    <div id="ide" contenteditable="true">
                        
                    </div>
                    <SubmitCode v-bind:unlockable="unlockable"/>
                     </b-col>
            </b-row>
        </b-container>
    
    </div>
</template>

<style scoped>
/* styling the tabs */
.tab {
  overflow: hidden;
  border: 1px solid #cccccc;
  background-color: #f1f1f1;
}

.tab button {
  background-color: inherit;
  border: none;
  outline: none;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 14px;
}

.tab button:hover {
  background-color: #dddddd;
}

.tab button:active {
  background-color: #cccccc;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
}

</style>

<script>
import IDEMenu from '../components/IDEMenu.vue'
import SubmitCode from '../components/dialogs/submitCode.vue'
import {FONT_SETTINGS} from '../settings.js'
import {BACKGROUNDS} from '../settings.js'
export default {
    name: "IDE",
    components: {
        IDEMenu, SubmitCode
    },
    props: ["title"],
    data(){
        return{
            fontStylings: FONT_SETTINGS,
            backgrounds: BACKGROUNDS,
            unlockable: "Star Wars Theme"
            
        }
    },
    methods: {
        changeFonts(font){
            let ide = document.getElementById("ide")
            ide.style.fontFamily = this.fontStylings[font]
            console.log(this.fontStylings["dokdo"])
        },
        changeBackground(background){
            let page = document.getElementById("page")
            page.style.background = "url("+this.backgrounds[background].path + ")";
            let ide = document.getElementById("ide")
            ide.style.background =  "white"

        },
        submit(){
            let randomNumber = Math.random();
            if(randomNumber<0.5){
                console.log("correct");
            }
            else{
                console.log("wrong");
            }
        }
    }
}
</script>
<style >
@import url('https://fonts.googleapis.com/css?family=Dokdo|Patua+One|Roboto+Condensed');
#ide{
    border: 1px solid blue;
    min-height: 70vh;
    text-align: left;
    padding: 5px;
    background: white;
    

}

#entireIDEPage {
    background-image: url('../assets/clouds.jpg') ;
}

h3{
    color: black;
}
</style>


