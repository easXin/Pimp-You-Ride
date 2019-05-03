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
             fonts: [],
             fontStyling: FONT_SETTINGS,
             allFonts : FONT_LIST
        }
  
       
        
    },
    mounted(){
        this.getFonts();
    },
    computed: {
        userId(){
            return localStorage.getItem("userId");
        }
    },
    methods: {
        getFonts(){
             let  fonts = []
             fonts.push("Default Font")
            fetch("http://webdev.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/ubcontroller.php" ,{
                method: 'POST', 
                body: JSON.stringify({
                    action: 'getUserBadges',
                    userid: this.userId
                })
            })
            .then((response)=>{
                return response.json();
            })
            .then((userBadgeData)=>{
               
                fetch("http://webdev.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/badgecontroller.php", {
                    method: 'POST',
                    body: JSON.stringify( {
                        action: 'getBadges',
                    })
                })
                .then((response)=>{
                    return response.json();
                })
                .then((badgeData)=>{
                    let userBadges =[];
                    let array = userBadgeData.user_badges;
                    array.forEach((badge)=>{
                        userBadges.push(badge.badge_id);
                    })
                    let systemBadges = badgeData.badges;
                    systemBadges.forEach((badge)=>{
                        if(userBadges.includes(badge.badge_id)){
                            if(this.allFonts.includes(badge.badge_name)){
                                 fonts.push(badge.badge_name);
                            }
                          
                        }
                        
                    })
                    this.fonts = fonts;
                    
                });

            });


        },
        changeFonts(selectedFont) {
            let selectedFontCheckmark = document.getElementById(selectedFont+'icon');
            for(var font of this.fonts){
                let fontCheckmark = $('#'+font+'icon');

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
