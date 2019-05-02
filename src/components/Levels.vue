<template>
  <div>
    <br>
    <div>
      <h1 style="text-align: center;"> Course Content </h1>
      <v-list>
        <v-list-tile class="title" v-for="(level, index) in levels" :key="index">
          <div v-bind:id="'level'+index">
            <v-list-tile-title style="height=10px; width = 10px;">
            
                <div v-if="level.unlocked" style="color: #4caf50;">
              
                    <i class="material-icons">lock_open</i>
                
                  &nbsp  {{index+1}}:&nbsp &nbsp  {{ level.title }}
                </div>
                <div v-else>
                <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                <div style="color: #f44336;" v-on="on">
                  
                    <i class="material-icons">lock</i>
              
                  | &nbsp {{index+1}}:&nbsp &nbsp  {{ level.title }}

              
              </div>
              </template>
              <span>You must pass the current level before playing this level</span>
                </v-tooltip>
                </div>
            </v-list-tile-title>
          </div>
        </v-list-tile>

        <StartLevel
          v-on:setVisibilityFalse="stopLevel"
          v-bind:visible="startLevelVisible"
          v-bind:title="title"
          v-bind:description="description"
          v-bind:unlockable="unlockable"
        />
      </v-list>
    </div>
  </div>
</template>

<script>
import Level from "./Level";
import StartLevel from "./dialogs/startLevel.vue";
import submitCode from "./dialogs/submitCode.vue";
import { CLOUDS } from "../settings.js";
export default {
  name: "Levels",
  components: {
    Level,
    StartLevel,
    submitCode
  },
  props: ["locked"],
  data() {
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
           title: "Class, Constructors and Inheritance ",  
           description:"In this section, we'll be going over the class, constructor and inheritance in OOP. When we talk about class, the best approach to understand is to think the class as the container that contains all the method and methods and variables, and whenever the class is called, the constructor will be called by default, and when we talk about the inheriatance in terms of class and constructor, we mean the current class contains different type of constructors, different constructors is called based on how we initializes the objects of the class. It is kind of confused now, but as you move along the sections, you will find these concepts are actually easier than you think. Unlocked Background: Avengers Assemble",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 6,
           title: "Composition, Encapsulation, and Polymorphism",
           description:"In this section, we'll conver composition, encapsulation, and polymorphism. Composition is very similar to the inheritance, inheritance has is-a relationship andcomposition has a has-a relationshiop. For encapsulation, it keeps the data safe from external interference, it binds to the data with the code that manipulates it. For polymorphism, we mean that we want to process the objects differently based on their data. Unlocked background: Infinity Wars",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 7,
           title: "Autoboxing and Unboxing",
           description:"In this session, we'll be talk about autoboxing and unboxing. Autoboxing is converting the primitive value into an object of the corresponding wrapper class and unboxing is converting an object of a wrapper type to its corresponding primitive value, we'll talk more about it as we move into code.  Unlocked background: Darth Vader",
           unlockable: "red",
           locked : submitCode.locked,
        },
        {
           number: 8,
           title: "Abstract Classes & Interfaces",
           description:"In this section, we'll talk about the abstract class and interface. So abstract class and interface is very similar, they all cannot be instantiated, you can think them as a blueprint that can be used to implement a class. We will go more example about it as we move into the tutorial. So let's get start it Unlocked background: Imperial Ensignia",
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
           description:"Collection is a base interface for most collection classes, whereas Collections is a utility class, we'll talk more about it as we move into code. Unlocked background: Batman, Deadpool",
           unlockable: "red",
           locked : submitCode.locked,
        },
      ],
      startLevelVisible: false,
      title: "",
      description: "",
      unlockable: ""
    };
  },
  computed: {
    userId() {
      return localStorage.getItem("userId");
    }
  },
  mounted() {
    let firstTile = document.getElementById("level0");
    firstTile.onclick = () => {
      this.startLevel(
        this.levels[0].title,
        this.levels[0].description,
        this.levels[0].unlockable
      );
    };
    firstTile.style.cursor = "pointer";
    this.levels.forEach((level, index) => {
      if (this.levels.length - 1 !== index) {
        this.checkIfLocked(level.unlockable, index + 1);
      }
    });
  },
  methods: {
    startLevel: function(title, description, unlockable) {
      this.startLevelVisible = true;
      this.title = title;
      this.description = description;
      this.unlockable = unlockable;
    },
    stopLevel: function() {
      this.startLevelVisible = false;
    },

    checkIfLocked: function(unlockable, index) {
      fetch(
        "http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/badgecontroller.php",
        {
          // we are making a POST request
          method: "POST",
          // this is the body of the POST request
          body: JSON.stringify({
            action: "getBadges",
            badgename: unlockable
          })
        }
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          fetch(
            "http://stark.cse.buffalo.edu/cse410/oobexception/index-out-of-bounds/hci-gamify/ubcontroller.php",
            {
              method: "POST",
              body: JSON.stringify({
                action: "getUserBadges",
                badgeid: data["badges"][0].badge_id,
                userid: this.userId
              })
            }
          )
            .then(response => {
              return response.json();
            })
            .then(data => {
              if (data.user_badges || index == 0) {
                let levelTile = document.getElementById("level" + index);

                levelTile.onclick = () => {
                  this.startLevel(
                    this.levels[index].title,
                    this.levels[index].description,
                    this.levels[index].unlockable
                  );
                };
                levelTile.style.cursor = "pointer";
                this.levels[index].unlocked = true;
              } else {
                this.levels[index].unlocked = false;
              }
            });
        });
    }
  }
};
</script>

<style scoped>
#tab {
  margin-left: 14px;
  margin-top: 10%;
  font-size: 20px;
}
.title {
  background: #f2f3f5;
  text-align: center;
  margin: 2% 25%;
  padding: 15px 15px 0 15px;
  height:88.5px;
  width:570px;
}
</style>