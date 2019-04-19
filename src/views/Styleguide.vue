<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12 ma-5>
    
                <h1> Styleguide for Pimp your IDE </h1>
            </v-flex>
            <v-flex xs12>
    
                <h3> Fonts </h3>
                <v-layout row wrap>
                    <v-flex xs4>
                        <h4> Main Font </h4>
                        <p> The main font of this website is roboto, which is being used for this styleguide </p>
                    </v-flex>
                    <v-flex xs4>
    
                    </v-flex>
    
                    <v-flex xs4>
                        <h4> Secondary Font</h4>
                        <p id="secondary"> Any text that requires an alternative font should be written in Noto Serif, and only used in select situations</p>
                    </v-flex>
    
                </v-layout>
            </v-flex>
            <v-flex xs12 ma-3 fill-height>
    
                <h3> Colors</h3>

                <v-container grid-list-md fill-height>
                    <v-layout row wrap align-center>
                        <v-flex xs3>
                            <v-card width="100" height="100" color="primary">
                            </v-card>
                        </v-flex>
                        <v-flex xs9>
                            <h5> PRIMARY BLUE</h5>
                           Vuetify's default primary blue should be used for all buttons which have a neutral purpose, the header, and as the primary color for the site
                        </v-flex>
                    </v-layout>
                </v-container>
    
                <v-container grid-list-md fill-height>
                    <v-layout row wrap align-center>
                        <v-flex xs3>
                            <v-card width="100" height="100" color="success">
                            </v-card>
                        </v-flex>
                        <v-flex xs9>
                            <h5> SUCCESS GREEN </h5>
                            The success flavor of the color green should be used for any submit, login, or other buttons that signal an affirmative action
                        </v-flex>
                    </v-layout>
                </v-container>
                 
                   <v-container grid-list-md fill-height>
                    <v-layout row wrap align-center>
                        <v-flex xs3>
                            <v-card width="100" height="100" color="red">
                            </v-card>
                        </v-flex>
                        <v-flex xs9>
                            <h5> ERROR  RED </h5>
                           Any error messages should be associated with this color red
                        </v-flex>
                    <v-flex xs12 ma-5>
                        <h3 style="margin-bottom: 40px;"> Headers</h3> 
                        <h1 style="margin-bottom: 20px;"> Main Headers should be displayed using the h1 header</h1>
                        <h3 style="margin-bottom: 20px;"> Secondary Headers should be displayed using the h3 header </h3>
                        <h5 style="margin-bottom: 20px;"> Tertiary Headers should be displayed using the h5 header </h5>
                    </v-flex>
                     <v-flex xs12 ma-5>
                        <h3 style="margin-bottom: 40px;"> IDE Theme Styles</h3> 
                        <v-layout row wrap>
                            <v-flex xs12>
                            <h5> Light Theme </h5>
                            <p> Light theme should be used when backgrounds in the IDE are lighter in nature. In this case the font on the page should be the color black </p>
                          
                            </v-flex>

                        </v-layout>

                         <v-layout row wrap>
                             <v-flex xs12 >
                                 <v-card color='black' id="darkTheme">
                             <h5 style="color: white;"> Dark Theme </h5>
                             <p> Light theme should be used when backgrounds in the IDE are lighter in nature. In this case the font on the page should be the color black </p>
                                 <v-btn color="yellow"> Click me </v-btn> <span> In dark mode, traditional blue mode buttons shousld be in yellow</span>
                                 </v-card>
                             </v-flex>

                        </v-layout>
                       
                    </v-flex>
                        
                    </v-layout>
                </v-container>
                
            
            </v-flex>
    
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "StyleGuide"
    
    }
</script>

<style scoped>
    #secondary {
        font-family: 'Noto Serif', serif;
    }
    #darkTheme {
        color: white;
    }
</style>
