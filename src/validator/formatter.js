
const string = "HeLlO WeLlCoMe To FuNcTiOnUp"

function trim(){
    console.log("after trim", string.trim());
}


function getlowercase(){
    console.log("string is in lowercase", string.toLowerCase());
}

function getUppercase(){
    console.log("string in uppercase", string.toUpperCase())
}

module.exports.trim = trim
module.exports.getlowercase = getlowercase
module.exports.getUppercase = getUppercase











