<template>
<div>
    <h1> Themes </h1>
    <v-list :two-line="true">
        <v-list-tile
        v-for="(theme, index) in themes"
        :key ="index"
        @click="changeTheme(theme)"
        >
       {{ theme}}
       <v-icon :id="theme+'icon'" class='d-none check' color="green">checkmark</v-icon>

        </v-list-tile>
    </v-list>
</div>
    
</template>
<script>
import {THEMES} from '../../settings.js';
export default {
    name: "Themes",
    data(){
        return{
            allThemes: THEMES,
            themes: []
        }
    },
    mounted(){
        this.getThemes();
    },
    methods: {
        changeTheme(theme){
             this.$emit("changeTheme", theme);
            let selectedCheckedItem = document.getElementById(theme+ 'icon');
            for(var theme of this.themes){
                let themeCheck = document.getElementById(theme+'icon');
                if(themeCheck===selectedCheckedItem){
                    themeCheck.className+=" d-inline"
                    themeCheck.classList.remove('d-none');
                }
                else{
                    themeCheck.className+= ' d-none'
                    themeCheck.classList.remove('d-inline');
                }
            }
        },
           getThemes: function(){

            let themes = []
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
                            if(this.allThemes.includes(badge.badge_name)){
     
                                 themes.push(badge.badge_name);
                            }
                          
                        }
                        
                    })
                    this.themes = themes;
                    
                });

            });

        
        }
        
    }
   
    
}
</script>
<style scoped>

</style>
