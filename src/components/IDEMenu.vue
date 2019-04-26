<template>
  <div class="ideMenu">
    <div class="text-xs-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            dark
            v-on="on"
          >
            Dropdown
          </v-btn>
</template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="setComponent(item)"
        >
          <v-list-tile-title id = "menuTitle">{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
    <Backgrounds v-show="items.background.show" @changeBackground="changeBackground" />
    <FontsMenu  v-show="items.fonts.show" @changeFonts="changeFonts" />
    </div>

</template>

<script>
  import Backgrounds from './menus/Backgrounds';
  import FontsMenu from './menus/FontsMenu';
  
  
  export default {
    name: "IDEMenu",
    components: {
      Backgrounds,
      FontsMenu
    },
    data() {
      return {
        items: {
          themes: {
            title: "Themes",
            show: false
          },
          stickers: {
            title: "Stickers",
            show: false
          },
          background: {
            title: "Backgrounds",
            show: false
          },
          fonts: {
            title: "fonts",
            component: FontsMenu,
            show: false
          }
        }
      }
    },
    methods: {
      setComponent: function(item) {
        for (var menu in this.items) {
          this.items[menu].show = false
        }
        item.show = true
      },
      changeFonts(font) {
        this.$emit("changeFonts", font);
      },
      changeBackground(background){
        this.$emit("changeBackground", background);
      }
    }
  
  }
</script>

<style scoped>
  .ideMenu {
    border: solid red 1px;
    background:white;
  }
</style>