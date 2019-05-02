<template>
<div>
     <h1> Drag and Drop Code </h1>
      <v-list :two-line="true">
        <v-list-tile
        v-for="(dragItem, index) in dragComponents"
        :key ="index"
        >
        {{dragItem.title}}

        </v-list-tile>
    </v-list>
</div>
</template>
<script>
import DRAG_COMPONENTS from '../../settings.js';
export default {
    name: "DragAndDrop",
    data(){
        return{
            dragComponents: DRAG_COMPONENTS
        }
    }

    
}
</script>
<style scoped>

</style>
