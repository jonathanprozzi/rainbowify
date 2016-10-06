var rainbowify = function() {

var rainbow = function (word) {
    if (word === '') {
        console.error('please enter a string (or a string that isnt nothing)');
    }

    wLen = word.length;
    var letters = word.split('');
    var spannify = [];
    var holdIds = [];
    var holdAll = [];
    var resArr = [];
    var resId;
    var colPos;

    //<span id ="unique-id">h</span>
        //need to append a unique id to each letter after spanning it
    //this places each letter inside a span and then pushes to an array

    var spanning = function(ele, ind, arr) {
        spannify.push("<span id=\"" + ele + "." + ind + "-" + word  + "\">" + ele + "</span>");
    };

    letters.forEach(spanning);

    var makeId = function(ele, ind, arr) {
        holdIds.push(ele + "." + ind + "-" + word);
        return ele + "." + ind + "-" + word;
    };

    letters.forEach(makeId);

    var idGrab = function(ele, ind, arr) {
        holdAll.push(ele + "." + ind + "-" + word);
        return ele + "." + ind + "-" + word;
    };

    //an array that holds each of these unique id values
    letters.forEach(idGrab);

    var docId = function(ele, ind, arr) {
        resArr.push("document.getElementById('" + ele + "')");
        return "document.getElementById('" + ele + "')";
    };

    var appending = function(ele, ind, arr) {
        if (ind === word.length-1) {
            var spanJoin = spannify.join("");
            var holdPara = document.createElement('p');
            holdPara.id = word + "-" + "holder";
            holdIds.push(ele);
            var addMe = holdPara.innerHTML = spanJoin;
            document.body.appendChild(holdPara);
        }
    };

    resArr.forEach(appending);

    var rainbowArray = ['', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    var colorify = function(ele, ind, arr) {
        var atId = document.getElementById('' + ele + '');
        atId.style.color = rainbowArray[ind % rainbowArray.length + 1];
    };

    holdIds.map(colorify);
};
rainbow('codingrainbow');
/*
function randomize(word, amt) {
    if (word === '') {
        console.error('please enter a string (or a string that isnt nothing)');
    }

    wLen = word.length;
    var letters = word.split('');
    var spannify = [];
    var holdIds = [];
    var resArr = [];
    var resId;

    for (var i = 0; i < letters.length; i++) {

    //    var spanning = "<span id=\"" + letters[i] + "-" + word + "-" +  Math.random() + "\">" + letters[i] + "</span>";
        var idHash = letters[i] + "-" + word + "-" +  Math.floor(Math.random() * wLen);

        var spanning = "<span id=\"" + idHash + "\">" + letters[i] + "</span>";
        // var spanning = "<span id=\"" + letters[i] + "-" + word + "\">" + letters[i] + "</span>";


        spannify.push(spanning);
        //pulled from http://www.crockford.com/wrrrld/color.html
            //includes all css color values

        var colArr = [
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
        //idx = letters[i] + "-" + word ;
        holdIds.push(idHash); //an array that holds each of these values
        resId = "document.getElementById('" + idHash +"')";
        // console.log(idHash);
        resArr.push(resId);

        if (i === letters.length-1){
            //console.log('this is the final iteration...appending');
            spanning = spannify.join("");
            var holdHead = document.createElement('h3');
            holdHead.id = word + "-" + "holder";
            var addMe = holdHead.innerHTML = spanning;
            document.body.appendChild(holdHead);

            for (k = 0; k < holdIds.length; k++) { //iterate through each id and do stuff
                var atId = document.getElementById('' + holdIds[k] + '');
                var randNum = Math.floor(Math.random() * colArr.length);
        //        console.log('random: ' + randNum);
                atId.style.color = colArr[randNum];
            }
        }
    }
}

randomize('abcdefghijklmnopqrstuvwxyz');
var longStr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
randomize(longStr);
*/
}();
