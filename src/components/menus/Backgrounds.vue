<template>
<div>
    <h1> Backgrounds </h1>
    <v-list>
        <v-list-tile
        v-for = "temp in backgrounds"
        :key ="temp"
        >
        <img :src = "temp.path" width="200" height="50">
        {{temp.title}}
        <v-icon :id="temp+'icon'" class='d-none' color="green">checkmark</v-icon>

        </v-list-tile>
    </v-list>
</div>
    
</template>
<script>

import {Backgrounds} from '../../settings.js'
export default {
    name: "Backgrounds",
    data(){
        return{
            backgrounds: Backgrounds
        }
    }
    
}

</script>

<style scoped>

</style>
