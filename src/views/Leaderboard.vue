<template>
<div>
    <h1>Leaderboard</h1>
    <v-container>
        <v-list>
        <v-list-tile class="title" v-for="(leader, index) in leaders" :key="index">
            <v-card class="card">
                {{index+1}}.  {{leader[0]}} <div class="score" >{{leader[1]}}</div>
            </v-card>
        </v-list-tile>
        </v-list>
    </v-container>
</div>
</template>

<script>
    export default {
        name: 'leaderBoard',
        data() {
            return {
                leaders: []
            }
        },
        mounted(){
            this.getLeaders();
        },
        methods: {
            getLeaders() {
                fetch("http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/usercontroller.php", {
    
                    // we are making a POST request
                    method: 'POST',
                    // this is the body of the POST request
                    body: JSON.stringify({
                        action: "getCompleteUsers",
                       
                    })
                }).then((response) => {
                    return response.json()
    
                }).then((data) => {
                    let badgeCounts = []
                    for(let user of data.users){
                        
                        if(user.badges){
                            badgeCounts.push([user.user_name, user.badges.length])
                        }
                     
                    }
                    
                     badgeCounts.sort((a, b)=>{
                        return b[1]-a[1];
                    })
                    

                    this.leaders = badgeCounts.slice(0, 10);

                
                    
                });
    
            }
    
        }
    }
</script>

<style scoped>
h1{
    text-align: center;
    margin-top: 20px;
}
.card{
    font-size: 30px;
    padding: 5px;
    width: 80%;
    display: inline;

}
.score{
    float: right;
}
    
</style>
