<template>
  <v-container grid-list-md text-xs-center>
    <v-flex xs12 ma-5>
      <h1>Styleguide for Pimp your IDE</h1>
    </v-flex>
    <v-flex xs12>
      <h2>Fonts</h2>
      <v-layout row wrap>
        <v-flex xs4>
          <h4>Main Font</h4>
          <p>The main font of this website is roboto, which is being used for this styleguide</p>
        </v-flex>
        <v-flex xs4></v-flex>

        <v-flex xs4>
          <h4>Secondary Font</h4>
          <p
            id="secondary"
          >Any text that requires an alternative font should be written in Noto Serif, and only used for level descriptions 
          and to emphasize a paragraph</p>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 ma-3 fill-height>
      <h2>Colors</h2>

      <v-container grid-list-md fill-height>
        <v-layout row wrap align-center>
          <v-flex xs3>
            <v-card width="100" height="100" color="primary"></v-card>
          </v-flex>
          <v-flex xs9>
            <h5>PRIMARY BLUE</h5>Vuetify's default primary blue should be used for all buttons which have a neutral purpose, the header, and as the primary color for the site
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md fill-height>
        <v-layout row wrap align-center>
          <v-flex xs3>
            <v-card width="100" height="100" color="success"></v-card>
          </v-flex>
          <v-flex xs9>
            <h5>SUCCESS GREEN</h5>The success flavor of the color green should be used for any submit, login, or other buttons that signal an affirmative action
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md fill-height>
        <v-layout row wrap align-center>
          <v-flex xs3>
            <v-card width="100" height="100" color="red"></v-card>
          </v-flex>
          <v-flex xs9>
            <h5>ERROR RED</h5>Any error messages should be associated with this color red
          </v-flex>
          <v-flex xs12 ma-5>
            <h2 style="margin-bottom: 40px;">Headers</h2>
            <h1 style="margin-bottom: 20px;">Main Headers should be displayed using the h1 header</h1>
            <h2
              style="margin-bottom: 20px;"
            >Secondary Headers should be displayed using the h2 header</h2>
            <h3
              style="margin-bottom: 20px;"
            >Tertiary Headers should be displayed using the h3 header</h3>
          </v-flex>
          <v-flex xs12 ma-5>
            <h3 style="margin-bottom: 40px;">IDE Theme Styles</h3>
            <v-layout row wrap>
              <v-flex xs12>
                <h5>Light Theme</h5>
                <p>Light theme should be used when backgrounds in the IDE are lighter in nature. In this case the font on the page should be the color black</p>
              </v-flex>
            </v-layout>
            <v-flex xs12>
              <v-layout row wrap ma-5>
                <v-card color="black" id="darkTheme">
                  <h5 style="color: white;">Dark Theme</h5>
                  <p>Light theme should be used when backgrounds in the IDE are lighter in nature. In this case the font on the page should be the color black</p>
                  <v-btn color="yellow">Click me</v-btn>
                  <span>In dark mode, traditional blue mode buttons shousld be in yellow</span>
                </v-card>
              </v-layout>
            </v-flex>

            <v-flex xs12 ma-5>
              <h2>Navigation</h2>
              <v-layout row wrap>
                <v-flex xs12>
                  <b-navbar toggleable="lg" type="dark" variant="info" id="navbar">
                    <b-navbar-brand>Pimp your IDE</b-navbar-brand>
                    <b-navbar-nav>
                      <b-nav-item id="home" @click="highlight('home')">Home</b-nav-item>
                      <b-nav-item id="idetab" @click="highlight('idetab')">IDE</b-nav-item>
                      <b-nav-item id="description" @click="highlight('description')">Description</b-nav-item>
                    </b-navbar-nav>
                  </b-navbar>
                </v-flex>

                <p>
                  The navigation bar should be styled with Vuetify's primary blue, with a white
                  background. Text should be in white. When an item is selected it should turn white with a black backround.
                  All pages should be accessible from the navigation bar given that there
                  are fewer than 6 pages on the website.
                </p>
              </v-layout>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 ma-3>
      <h2>Error Messages</h2>
      <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">

            <v-btn
              color="primary"
              dark
              id="submit"
              v-on="on"
            >
              Click to see Error
            </v-btn>
</template>

      <v-card>
        <v-card-title
          class=" red headline lighten-2"
          primary-title
        >
          Error
        </v-card-title>

        <v-card-text>
         This is supposed to be an error message
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false;"
          >
            Back to Styleguide
          </v-btn>
        
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-flex>
  </v-container>
</template>

<script>
let $ = require("jquery");
export default {
  name: "StyleGuide",
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    highlight: id => {
      let ids = ["home", "description", "idetab"];
      ids.forEach(id => {
        let tab = document.getElementById(id).childNodes[0];
        tab.setAttribute("style", "color: white !important;");
        tab.style.background = "#1976d2";
      });
      let selectedTab = document.getElementById(id).childNodes[0];
      selectedTab.setAttribute("style", "color: black !important;");
      selectedTab.style.background = "white";
    }
  }
};
</script>

<style scoped>
#secondary {
  font-family: "Noto Serif", serif;
}
#darkTheme {
  color: white;
}
</style>
