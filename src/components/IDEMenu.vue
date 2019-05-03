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
              Menu <i class="material-icons">
  arrow_drop_down
  </i>
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
    <Backgrounds ref="background" v-show="items.background.show" @changeBackground="changeBackground" />
    <FontsMenu  v-show="items.fonts.show" @changeFonts="changeFonts" />
    <DragAndDrop v-show="items.draganddrop.show" />
    <Themes ref="themes" v-show="items.themes.show" @changeTheme="changeTheme"/>
    </div>

</template>

<script>
  import Backgrounds from './menus/Backgrounds';
  import FontsMenu from './menus/FontsMenu';
  import DragAndDrop from './menus/DragAndDrop';
  import Themes from './menus/Themes';
  
  
  export default {
    name: "IDEMenu",
    components: {
      Backgrounds,
      FontsMenu,
      DragAndDrop,
      Themes
    },
    data() {
      return {
        items: {
          themes: {
            title: "Themes",
            show: false
          },
          draganddrop: {
            title: "Drag and Drop Code",
            show: false
          },
          background: {
            title: "Backgrounds",
            show: true
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
      changeBackground(background) {
        this.$emit("changeBackground", background);
      },
      changeTheme(theme){
        this.$emit("changeTheme", theme);
      },
      update() {
        this.$refs.background.getBackgrounds();
        this.$refs.themes.getThemes()
      }
    }
  
  }
</script>

<style scoped>
  .ideMenu {
    background: white;
  }
</style>