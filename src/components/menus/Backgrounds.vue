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
        <v-icon :id="background.title+'icon'" class='d-none check' color="green">checkmark</v-icon>

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
            let selectedCheckedItem = document.getElementById(selectedBackground.title + 'icon');
            console.log(this.allBackgrounds);
            for(var background of this.backgrounds){
                console.log(background.title);
                let backgroundCheck = document.getElementById(background.title+'icon');
                if(backgroundCheck===selectedCheckedItem){
                    backgroundCheck.className+=" d-inline"
                    backgroundCheck.classList.remove('d-none');
                }
                else{
                    backgroundCheck.className+= ' d-none'
                    backgroundCheck.classList.remove('d-inline');
                }
            }
            this.$emit("changeBackground",selectedBackground)
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
                    let userBadges =[];
                    let array = userBadgeData.user_badges;
                    array.forEach((badge)=>{
                        userBadges.push(badge.badge_id);
                    })
                    let systemBadges = badgeData.badges;
                    systemBadges.forEach((badge)=>{
                        if(userBadges.includes(badge.badge_id)){
                            if(this.allBackgrounds[badge.badge_name]){
                                  console.log("Ok something is pushed");
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
