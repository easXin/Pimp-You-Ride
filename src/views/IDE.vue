<template>
    <div id="page">
       
        
        <b-container>
             
            <b-row>
                <b-col><IDEMenu @changeFonts="changeFonts" @changeBackground="changeBackground"/></b-col>
                 <b-col >
                     
                    <h3 v-if="title"> {{title}}</h3>
                    <h3 v-else> Welcome to your IDE</h3>
                    <div id="ide" contenteditable="true">
                        
                    </div>
                    <SubmitCode v-bind:unlockable="unlockable"/>
                     </b-col>
            </b-row>
        </b-container>
    
    </div>
</template>
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
            unlockable: "dokdo"
            
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


