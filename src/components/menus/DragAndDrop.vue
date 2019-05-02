<template>
<div>
     <h1> Drag and Drop Code </h1>
      <v-list :two-line="true">
        <v-list-tile
        v-for="(dragItem, index) in dragComponents"
        :key ="index"
        > 

        <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <div v-on="on">
        <Drag class="drag" :transfer-data="dragItem.code" >{{ dragItem.title }}</drag>
            </div>
        </template>
        
        <span> Drag me to your IDE to make your coding easier! </span>
        </v-tooltip>
        </v-list-tile>
    </v-list>
</div>
</template>
<script>
import {DRAG_COMPONENTS} from '../../settings.js';
import { Drag} from 'vue-drag-drop';
 

 
export default {
    name: "DragAndDrop",
    components: {
        Drag
    },
    data(){
        return{
            dragComponents: DRAG_COMPONENTS
        }
    },
    
}
</script>
<style scoped>

</style>
