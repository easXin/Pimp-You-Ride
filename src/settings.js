let DOKDO = "dokdo"
let ROBOTO = "roboto"
let PATUA_ONE = "patua_one"

let DEFAULT = "default";
let SPACE = "space"
let CLOUDS = "clouds"
let DEATHSTAR = "deathstar"
let SPIDERMAN = "Spiderman"
let SPIDERVERSE = "Spiderverse"
let THOR = "Thor"
let Avengers_Assemble = "Avengers Assemble"
let INFINITY_WARS = "Infinity Wars"
let DARTH_VADER = "Darth Vader"
let IMPERIAL = "Imperial Ensignia"
let STARLORD = "StarLord"
let SHIELD = "Shield"
let BATMAN = "Batman"
let DEADPOOL = "Deadpool"


export const FONT_LIST = [DOKDO, ROBOTO, PATUA_ONE];

export const FONT_SETTINGS = {
    [DOKDO]: "'Dokdo', cursive",
    [ROBOTO]: "'Roboto Condensed', sans-serif",
    [PATUA_ONE]: "'Patua One', cursive"
}

export const BACKGROUNDS = {
    [DEFAULT]: {
      title: 'Default',
      dark: false
    },
    [SPACE]: {
    title: 'Space',
    dark: true,
    path: 'http://i65.tinypic.com/hwmwdw.jpg'
},
[CLOUDS]:{
    title: 'Clouds',
    dark: false,
    path: 'https://3yecy51kdipx3blyi37oute1-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/bg-clouds.jpg'
},
[DEATHSTAR]: {
    title: 'Deathstar',
    dark: true,
    path: 'http://i65.tinypic.com/2m5jyc6.jpg'
},
[SPIDERMAN]:{
    title:'Spiderman',
    dark:true,
    path:'http://hdqwalls.com/download/spiderman-abstract-u3-1280x720.jpg'
},
[SPIDERVERSE]:{
    title:'Spiderverse',
    dark:true,
    path:'https://initiate.alphacoders.com/images/980/cropped-1440-900-980843.jpg?2259'
},
[THOR]:{
    title:'Thor',
    dark:false,
    path:'https://wall.alphacoders.com/wallpaper.php?i=973877&w=1920&h=1080&type=crop'
},
[Avengers_Assemble]:{
    title:'Avengers Assemble',
    dark:false,
    path:'https://initiate.alphacoders.com/images/312/cropped-1600-900-312095.jpg?882'
},
[INFINITY_WARS]:{
    title:'Infinity Wars',
    dark:true,
    path:'https://initiate.alphacoders.com/images/909/cropped-1440-900-909746.png?8020'
},
[DARTH_VADER]:{
    title:'Darth Vader',
    dark:false,
    path:'https://initiate.alphacoders.com/images/667/cropped-1920-1080-667417.jpg?4822'
},
[IMPERIAL]:{
    title:'Imperial Ensignia',
    dark:true,
    path:'https://initiate.alphacoders.com/images/581/cropped-1920-1080-58118.jpg?2859'
},
[STARLORD]:{
    title:'StarLord',
    dark:true,
    path:'https://initiate.alphacoders.com/images/675/cropped-1600-900-675273.jpg?5855'
},
[SHIELD]:{
    title:'Shield',
    dark:true,
    path:'https://initiate.alphacoders.com/images/419/cropped-1600-900-419225.jpg?4976'
},
[BATMAN]:{
    title:'Batman',
    dark:true,
    path:'https://initiate.alphacoders.com/images/435/cropped-1600-900-435371.jpg?6917'
},
[DEADPOOL]:{
    title:'Deadpool',
    darkt:false,
    path:'https://images4.alphacoders.com/743/74366.jpg'
}
}

const WHILE = "while";
const IF = "if";
const FOR = "for";

export const DRAG_COMPONENTS = {
    [WHILE] :{
        code: "while(true){\n //insert while body here \n}",
        title: "while loop"
    } ,
    [IF] : {
        code: "if(true){\n //insert if body here \n}",
        title: "if statement"
    },
    [FOR]: {
        code: "for(int i=0; i< 10; i++){\n  //insert for body here\n }",
        title: "for loop"
    }
}

const TWILIGHT = "twilight";
const MERBIVORE = "merbivore";
const KUROIR = "kuroir";

export const THEMES = [TWILIGHT, MERBIVORE, KUROIR]