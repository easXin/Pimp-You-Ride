<template>
<div>
    <h1> Code Blocks </h1>
    <v-list>
        <v-list-tile
        v-for="(background, index) in backgrounds"
        :key ="index"
        @click="changeBackground(background.title)"
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
    data(){
        return{
            backgrounds:BACKGROUNDS
        }
    },
    methods: {
        changeBackground(selectedBackground){
            this.$emit("changeBackground", selectedBackground);
        }
    }
    
}
</script>
    
<style scoped>
</style>