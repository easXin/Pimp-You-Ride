<template>
    <div class="level">
       <span class="title">{{level.title}}</span> <span class="unlockable">{{level.unlockable}}</span>
    </div>
</template>
<script>
export default {
    name: "Level",
    props: ["level"]
}
</script>

<style scoped>
.level{
    border: 1px solid  aqua;
    padding: 10px;
}
.title{
    font-size: 20px;
    color: pink;
}
.unlockable{
    float: left;
}
</style>
