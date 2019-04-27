<template>

<div>
  <br>
  <div>
    <span id="tab"> Course Content</span>
     <v-list>
        <v-list-tile
          class="title"
          v-for="(level, index) in levels"
          :key="index"
          @click="startLevel(level.title,level.description)"
        > 
 
          <v-list-tile-title style="height=10px; width = 10px;">
              <div id = "layoutContentList" style="font-size: 12px;">
                <div v-if="locked">
                <span style="color:red;">
                  IMCOMPLETED</span>  | Section: {{index+1}}  {{ level.title }} 
                  </div>
                <div v-else>
                 <span style="color:green;">
                  COMPLETED</span>  | Section: {{index+1}}  {{ level.title }} 
                </div>
              </div>
               
          </v-list-tile-title>
        </v-list-tile>
         
         <StartLevel v-on:setVisibilityFalse="stopLevel"  
          v-bind:visible="startLevelVisible"
          v-bind:title="title"
          v-bind:description="description" />   
      </v-list>
  </div>
</div>
</template>

<script>
import Level from './Level'
import StartLevel from './dialogs/startLevel.vue'
import submitCode from './dialogs/submitCode.vue'
export default {
    name: "Levels",
    components: {
        Level, StartLevel, submitCode
    },
    props:['locked'],
    data (){
    return {
       levels: [
       {
          number: 1,
          title: "Hello Word",
          description:"In the first session, we will assume that you have a little bit of or no programming experience, because of that we are going to use Hello World as our very first programm to kickoff our first milestone of learning programming langauge, completion of different session would unlocked different backgrounds, so no more talking and let's get to work!   Unlocked Background: Space, Clouds, Deathstar ",
          unlockable: "blue",
          locked : submitCode.locked,
        },
        {
          number: 2,
          title: "Variables, Datatypes and Operators",
          description:"In the second session, we are going to cover variable, datatype and operator. So let's begin, operator is a symbol that operates on one or more operands to produce a result. Variables includes instance variable, class Variables, local variables, parameters, and we two categories of data type in the Java, which known as primitive type and non-primitive type, we will go over more example of how to use them as we follow along the tutorial. Unlocked Background: Spiderman",
          unlockable: "green",
          locked : submitCode.locked,
        },
        {
          number: 3,
          title: "Expressions, Statements, Code blocks",
          description:"Code block is a group of statements between balanced braces, it can be used anywhere of script , a single statement is allowed, and statement are roughly equivalent to sentences in natural languages. And for statement, statement forms a complete unit of expression and terminating wiht a semicolon. Expressions are used to compute and to assign values to variables and to help control the execution flow of a program. The job of an expression is to perform the computation indicated by the elements of the expression and to return a value that is the result of the computation. Unlocked background:: Spiderverse",
          unlockable: "red",
          locked : submitCode.locked,
        },
        {
          number: 4,
          title: "Control Flow Statements",
          description:"In this section, we will cover control flow statements. This topic contains four different types, they are looping type (eg. while, do-while, for ) , decision making type (eg. if-else, switch-case ) , exception handling type (eg. try-catch-finally, throw ) ,and branching type (eg. break, continue, label:, return ) respectively. With using control flow statements in your programs to conditionally execute statements, you can repeatedly execute same block of statements with least amount of code, so let's get start it. Unlocked background: Thor",
          unlockable: "red",
          locked : submitCode.locked,
        },
        {
           number: 5,
           title: "Classes, Constructors and Inheritance ",
           description:"🐱meow5 Unlocked background: Avengers Assemble",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 6,
           title: "Composition, Encapsulation, and Polymorphism",
           description:"🐱meow6 Unlocked background: Infinity Wars",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 7,
           title: "Arrays, Lists, Autoboxing and Unboxing",
           description:"🐱meow7 Unlocked background: Darth Vader",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 8,
           title: "Inner and Abstract Classes & Interfaces",
           description:"🐱meow8 Unlocked background: Imperial Ensignia",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 9,
           title: "Java Generics",
           description:"Generics allow you to customize a method or class to whatever type you're working with. Suppose you have a method that adds two numbers together. In order to work with the types themselves, you may have to create multiple versions of this method. So basically, generics allow you to create a single method that is customized for the type that invokes it, so let's get start it. Unlocked background: StarLord",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 10,
           title: "Static and Final Keyword",
           description:"When the object is defined with static keyword, that means it belongs to the class not an instance, this means that there is only one copy of that variable/method shared between all instances of a particular Class, Another way to defined an object is to using final keyword,final is entirely unrelated, it is a way of defining a once only initialization................... Unlocked background: Shield",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 11,
           title: "Java Collection",
           description:"🐱meow11 Unlocked background: Batman",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 12,
           title: "Basic Input & Output",
           description:"🐱meow12 Unlocked background: Deadpool",
           unlockable: "red",
           locked : submitCode.locked,
        }
      ],
      startLevelVisible: false,
      title: "",
      description: "",
    }
  },
  
  methods: {
    startLevel: function(title,description){
      this.startLevelVisible = true;
      this.title = title
      this.description=description;
    },
    stopLevel: function(){
      this.startLevelVisible = false;
    }
  }
}
</script>

<style scoped>
#tab{
  margin-left: 14px;
  margin-top: 10%;
  font-size: 20px;
}
.title{
  background: #F2F3F5;
  text-align: center;
  margin: 2% 25%;
  padding: 15px 15px 0 15px;
  height:88.5px;
  width:570px;
}
</style>