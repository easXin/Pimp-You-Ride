<template>
    <div id="page">
       
        
        <b-container>
             
            <b-row>
                <b-col><IDEMenu @changeFonts="changeFonts" @changeBackground="changeBackground"/></b-col>
                 <b-col >         
                    <h3 v-if="title"> {{title}} </h3>
                    <h3 v-else> Welcome to your IDE</h3>
                    
                    <div>
                    <b-tabs content-class="mt-3">
                        <b-tab title="IDE" active>
                            <div>
                             <div id="ide" contenteditable="true"></div>
                            </div>
                            <SubmitCode v-bind:unlockable="unlockable"/> 
                        </b-tab>
                        <b-tab title="Level Description">  {{description}}</b-tab>
                        <b-tab title="..." disabled><p>reserved room for furture tabs</p></b-tab>
                    </b-tabs>
                    </div>        
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
    props: ["title","description"],
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
            console.log(this.backgrounds[background].dark);
            if(this.backgrounds[background].dark){
                let title = document.getElementById("title")
                title.style.color = "white";
                let menuTitle = document.getElementById("menuTitle")
                menuTitle.style.color = "black"
                console.log("Change to white")
            }
            else{
                page.color = "black"
                console.log("has to execute");
            }
            let ide = document.getElementById("ide")
            ide.style.background =  "white"
            if(this.backgrounds[background].dark){
                page.style.color = "white";
                ide.style.color = "black";
            }
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
<style>
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
