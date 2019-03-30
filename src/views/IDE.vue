<template>
    <div>
        <b-container>
            <b-row>
                <b-col></b-col>
                 <b-col >
                    <h3> Welcome to your ide </h3>
                    <div class="ide" contenteditable="true">
                        Start typing
                    </div>
                     </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    name: "IDE"
}
</script>
<style scoped>
.ide{
    border: 1px solid blue;
    min-height: 70vh;
    text-align: left;
    padding: 5px;
}
</style>


