<template>
  <div id="page">
    <b-container>
      <b-row>
        <b-col>
          <IDEMenu ref="ideMenu" @changeFonts="changeFonts" @changeBackground="changeBackground"/>
        </b-col>
        <b-col id="levelDescription">
          <h3 class="title" v-if="title">{{title}}</h3>
          <h3 class="title" v-else>Welcome to your IDE</h3>

          <div>
            <b-tabs color="purple" content-class="mt-3">
              <b-tab style="color: white;" title="IDE" active>
                <div>
                  <editor @ondragstart="dragstart_handler(event)" draggable="true" id="editor" ref="myEditor"  @init="editorInit" lang="java" theme="chrome" width="500" height="400"></editor>
                </div>
                <SubmitCode ref="submitCode" @update="update" v-bind:unlockable="unlockable"/>
              </b-tab>
              <b-tab title="Level Description" @click="adjustBackground()">{{description}}</b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import IDEMenu from "../components/IDEMenu.vue";
import SubmitCode from "../components/dialogs/submitCode.vue";
import { FONT_SETTINGS } from "../settings.js";
import { BACKGROUNDS } from "../settings.js";
let $ = require("jquery");
export default {
  name: "IDE",
  components: {
    IDEMenu,
    SubmitCode,
    editor: require("vue2-ace-editor")
  },
  props: ["title", "description", "unlockable"],
  data() {
    return {
      fontStylings: FONT_SETTINGS,
      backgrounds: BACKGROUNDS
    };
  },
  mounted(){
    document.getElementById('editor').style.fontSize='16px';
    let editor = this.$refs.myEditor.editor;
    editor.setValue("if(x==3)");
  },
  methods: {
    adjustBackground() {
      $("#page").css("height", $("body").height());
    },
    update() {
      this.$refs.ideMenu.update();
    },
    dragstart_handler(event){

    },
    editorInit: function() {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/html");
      require("brace/mode/javascript"); //language
      require("brace/mode/java");
      require("brace/mode/less");
      require("brace/theme/chrome");
      require("brace/snippets/javascript"); //snippet
    },
    changeFonts(font) {
      let ide = document.getElementById("editor");
      ide.style.fontFamily = this.fontStylings[font];
      console.log(this.fontStylings["dokdo"]);
    },
    changeBackground(background) {
      let page = document.getElementById("page");
      page.style.background = "url(" + background.path + ")";
      $("#page").css("background", "url(" + background.path + ") !important");
      if (background.dark) {
        $(".title").css("color", "white");
        let menuTitle = document.getElementById("menuTitle");
        menuTitle.style.color = "black";
        this.$refs.submitCode.toggleDarkMode(true);
      } else {
        $(".title").css("color", "black");
        this.$refs.submitCode.toggleDarkMode(false);
      }
    },
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Dokdo|Patua+One|Roboto+Condensed");
#ide {
  border: 1px solid blue;
  min-height: 70vh;
  text-align: left;
  padding: 5px;
  background: white;
}
#entireIDEPage {
  background-image: url("../assets/clouds.jpg");
}

h3 {
  color: black;
}
</style>
