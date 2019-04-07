<template>
<div>
    <h1> Fonts </h1>
    <v-list>
         <v-list-tile
            v-for="font in fonts"
            :key="font"
            @click="changeFonts(font)"
            avatar
          >
            <v-list-tile-content :id="font" >
              <v-list-tile-title v-bind:style="{fontFamily: fontStyling[font]}" v-text="font">
        </v-list-tile-title>
       
      
            </v-list-tile-content>
              <v-icon :id="font+'icon'" class='d-none' color="green">checkmark</v-icon>
         </v-list-tile>
    </v-list>
</div>
</template>
<script>
import {FONT_LIST, FONT_SETTINGS} from '../../settings.js'
let $ = require('jquery')

export default {
    name: "FontsMenu",
    data (){
        return{
             fonts: FONT_LIST,
             fontStyling: FONT_SETTINGS

        }
  
       
        
    },
    methods: {
        changeFonts(selectedFont) {
            let selectedFontCheckmark = document.getElementById(selectedFont+'icon');
            for(var font of this.fonts){
                let fontCheckmark = $('#'+font+'icon')
                 console.log(font+'icon')
                if(fontCheckmark.is(selectedFontCheckmark)){
                    fontCheckmark.addClass('d-inline')
                }
                else{
                    fontCheckmark.addClass('d-none')
                    fontCheckmark.removeClass('d-inline')
                }
            }
            this.$emit("changeFonts", selectedFont)
        }
    }
    
}
</script>

<style scoped>

</style>
