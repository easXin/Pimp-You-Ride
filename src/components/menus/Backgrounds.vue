<template>
<div>
    <h1> Backgrounds </h1>
    <v-list>
        <v-list-tile
        v-for="(background, index) in backgrounds"
        :key ="index"
        @click="changeBackground(background)"
        >
        <img :src ="background.path" width="50" height="50">
        {{background.title}}
        <v-icon :id="background+'icon'" class='d-none ml3' color="green">checkmark</v-icon>

        </v-list-tile>
    </v-list>
</div>
    
</template>
<script>

import {BACKGROUNDS} from '../../settings.js'
export default {
    name: "Backgrounds",
    mounted(){
       this.getBackgrounds();
    },
    computed: {
        userId() {
            return localStorage.getItem("userId");
        }
    },
    data(){
        return{
            allBackgrounds: BACKGROUNDS,
            backgrounds: []
        }
    },
    methods: {
        changeBackground: function(selectedBackground){
            this.$emit("changeBackground", selectedBackground);
        },
        getBackgrounds: function(){

            let backgrounds = []
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
                    let userBadges =[]
                    // console.log(userBadgeData);
                    // console.log(userBadgeData.user_badges);
                    let array = userBadgeData.user_badges;
                    //console.log("Array "+ (typeof array));
                    array.forEach((badge)=>{
                        userBadges.push(badge.badge_id);
                    })
                    console.log(userBadges);
                    let systemBadges = badgeData.badges;
                    systemBadges.forEach((badge)=>{
                        if(userBadges.includes(badge.badge_id)){
                            if(this.allBackgrounds[badge.badge_name]){
                                  console.log(this.allBackgrounds[badge.badge_name]);
                                  backgrounds.push(this.allBackgrounds[badge.badge_name]);
                            }
                          
                        }
                    })
                    this.backgrounds = backgrounds;
                    
                });

            });

        
        }
    }
    
}

</script>

<style scoped>

</style>
