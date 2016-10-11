var addedWords = [];

var rainbowify = function(word, spc, rnd) {
    if (word === '') {
        console.error('please enter a string (or a string that isnt nothing)');
        return;
    }
    if (addedWords.includes(word) === true){
        console.error('please enter a unique string');
        return;
    }

    wLen = word.length;
    var letters = word.split('');
    var spannify = [];
    var holdIds = [];
    var holdAll = [];
    var resArr = [];

    var spanning = function(ele, ind, arr) {
        if (spc === false) {
            spannify.push("<span id=\"" + ele + "." + ind + "-" + word + "\">" + ele + "</span>");
        }
        if (spc === true) {
            spannify.push("<span id=\"" + ele + "." + ind + "-" + word + "\">" + ele + " " + "</span>");
        }
    };

    var makeId = function(ele, ind, arr) {
        holdIds.push(ele + "." + ind + "-" + word);
        return ele + "." + ind + "-" + word;
    };

    letters.forEach(spanning);
    letters.forEach(makeId);

    var idGrab = function(ele, ind, arr) {
        holdAll.push(ele + "." + ind + "-" + word);
        return ele + "." + ind + "-" + word;
    };

    spannify.forEach(idGrab);

    var docId = function(ele, ind, arr) {
        resArr.push("document.getElementById('" + ele + "')");
        return "document.getElementById('" + ele + "')";
    };

    holdIds.forEach(docId);

    var appending = function(ele, ind, arr) {
        if (ind === word.length - 1) {
            var spanJoin = spannify.join("");
            var holdPara = document.createElement('p');
            holdPara.id = word + "-" + "holder";
            var addMe = holdPara.innerHTML = spanJoin;
            var rainbowHolder = document.getElementById('rainbow-holder');
            rainbowHolder.appendChild(holdPara);
        }
    };

    resArr.forEach(appending);

    //basic roygbiv fun
    var rainbowArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    //pulled from http://www.crockford.com/wrrrld/color.html
    //-> includes all css color values

    var fullColorArray = [
        "aliceblue",
        "antiquewhite",
        "aqua",
        "aquamarine",
        "azure",
        "beige",
        "bisque",
        "black",
        "blanchedalmond",
        "blue",
        "blueviolet",
        "brown",
        "burlywood",
        "cadetblue",
        "chartreuse",
        "chocolate",
        "coral",
        "cornflowerblue",
        "cornsilk",
        "crimson",
        "cyan",
        "darkblue",
        "darkcyan",
        "darkgoldenrod",
        "darkgray",
        "darkgreen",
        "darkkhaki",
        "darkmagenta",
        "darkolivegreen",
        "darkorange",
        "darkorchid",
        "darkred",
        "darksalmon",
        "darkseagreen",
        "darkslateblue",
        "darkslategray",
        "darkturquoise",
        "darkviolet",
        "deeppink",
        "deepskyblue",
        "dimgray",
        "dodgerblue",
        "firebrick",
        "floralwhite",
        "forestgreen",
        "fuchsia",
        "gainsboro",
        "ghostwhite",
        "gold",
        "goldenrod",
        "gray",
        "green",
        "greenyellow",
        "honeydew",
        "hotpink",
        "indianred",
        "indigo",
        "ivory",
        "khaki",
        "lavender",
        "lavenderblush",
        "lawngreen",
        "lemonchiffon",
        "lightblue",
        "lightcoral",
        "lightcyan",
        "lightgoldenrodyellow",
        "lightgray",
        "lightgreen",
        "lightpink",
        "lightsalmon",
        "lightseagreen",
        "lightskyblue",
        "lightslategray",
        "lightsteelblue",
        "lightyellow",
        "lime",
        "limegreen",
        "linen",
        "magenta",
        "maroon",
        "mediumaquamarine",
        "mediumblue",
        "mediumorchid",
        "mediumpurple",
        "mediumseagreen",
        "mediumslateblue",
        "mediumspringgreen",
        "mediumturquoise",
        "mediumvioletred",
        "midnightblue",
        "mintcream",
        "mistyrose",
        "moccasin",
        "navajowhite",
        "navy",
        "oldlace",
        "olive",
        "olivedrab",
        "orange",
        "orangered",
        "orchid",
        "palegoldenrod",
        "palegreen",
        "paleturquoise",
        "palevioletred",
        "papayawhip",
        "peachpuff",
        "peru",
        "pink",
        "plum",
        "powderblue",
        "purple",
        "rebeccapurple",
        "red",
        "rosybrown",
        "royalblue",
        "saddlebrown",
        "salmon",
        "sandybrown",
        "seagreen",
        "seashell",
        "sienna",
        "silver",
        "skyblue",
        "slateblue",
        "slategray",
        "snow",
        "springgreen",
        "steelblue",
        "tan",
        "teal",
        "thistle",
        "tomato",
        "turquoise",
        "violet",
        "wheat",
        "white",
        "whitesmoke",
        "yellow",
        "yellowgreen"
    ];

    var colorify = function(ele, ind, arr) {
        var atId = document.getElementById('' + ele + '');
        if (rnd === false) {
            atId.style.color = rainbowArray[ind % rainbowArray.length];
        }

        if (rnd === true) {
            var randNumCol = Math.floor(Math.random() * fullColorArray.length);
            atId.style.color = fullColorArray[ind % randNumCol];
        }

    };

    holdIds.map(colorify);
    addedWords.push(word);

};

// test cases:
var longStr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

rainbowify('codingRainbow!', false, false);
rainbowify('words are great when they become rainbows!', false, false);
rainbowify('is that the case? i think so!', true, false);
rainbowify('seeing if the randomizer works for a rather large chunk of text. im not sure if this will work...will this work!?', false, true);
rainbowify(longStr, false, true);
