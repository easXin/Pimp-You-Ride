<template>
<div>
    <h1> Levels</h1>
    <div v-bind:key="level.number" v-for="level in levels">
        <Level v-bind:level="level"/>
    </div>
</div>
</template>
<script>
import Level from './Level'

export default {
    name: "Levels",
    components: {
        Level
    },
    data (){
    return {
      levels: [
        {
          number: 1,
          title: "Hello World",
          unlockable: "blue"
        },
        {
          number: 2,
          title: "Assigning variables",
          unlockable: "green"
        },
        {
          number: 3,
          title: "If not then else",
          unlockable: "red"
        }

      ]
    }
  }
}
</script>

