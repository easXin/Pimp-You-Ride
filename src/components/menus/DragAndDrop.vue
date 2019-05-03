<template>
    <div>
        <h1> Drag and Drop Code </h1>
        <v-list :two-line="true">
            <v-list-tile v-for="(dragItem, index) in dragComponents" :key="index">
    
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
    import {
        DRAG_COMPONENTS
    } from '../../settings.js';
    import {
        Drag
    } from 'vue-drag-drop';
    
    
    
    export default {
        name: "DragAndDrop",
        components: {
            Drag
        },
     
        data() {
            return {
                dragComponents: [],
                allDragComponents: DRAG_COMPONENTS
            }
        },
           mounted() {
            this.getDragAndDrops()
        },
        methods: {
            getDragAndDrops() {
                let dAndD = []
                fetch("http://webdev.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/ubcontroller.php", {
                        method: 'POST',
                        body: JSON.stringify({
                            action: 'getUserBadges',
                            userid: this.userId
                        })
                    })
                    .then((response) => {
                        return response.json();
                    })
                    .then((userBadgeData) => {
                         console.log(this.allDragComponents);
    
                        fetch("http://webdev.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/badgecontroller.php", {
                                method: 'POST',
                                body: JSON.stringify({
                                    action: 'getBadges',
                                })
                            })
                            .then((response) => {
                                return response.json();
                            })
                            .then((badgeData) => {
                                let userBadges = [];
                                let array = userBadgeData.user_badges;
                                array.forEach((badge) => {
                                    userBadges.push(badge.badge_id);
                                })
                                let systemBadges = badgeData.badges;
                                systemBadges.forEach((badge) => {
                                    if (userBadges.includes(badge.badge_id)) {
                                       console.log(badge.badge_name);
                                        if (this.allDragComponents[badge.badge_name]) {
                                            dAndD.push(this.allDragComponents[badge.badge_name]);
                                        }
    
                                    }
    
                                })
                                this.dragComponents = dAndD;
    
                            });
                    });
            }
        }
    
    
    }
</script>

<style scoped>
    
</style>
