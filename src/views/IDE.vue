<template>
    <div>
       
        
        <b-container>
             
            <b-row>
                <b-col><IDEMenu @changeFonts="changeFonts"/></b-col>
                 <b-col >
                    <h3> Welcome to your ide </h3>
                    <div id="ide" contenteditable="true">
                        Start typing
                    </div>
                     </b-col>
            </b-row>
        </b-container>
    
    </div>
</template>
<script>
import IDEMenu from '../components/IDEMenu.vue'
import {FONT_SETTINGS} from '../settings.js'
export default {
    name: "IDE",
    components: {
        IDEMenu
    },
    data(){
        return{
            fontStylings: FONT_SETTINGS
        }
    },
    methods: {
        changeFonts(font){
            let ide = document.getElementById("ide")
            ide.style.fontFamily = this.fontStylings[font]
            console.log(this.fontStylings["dokdo"])
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
}
</style>


