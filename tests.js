var index = require("./index.js")

if (index.name === "joe") {
    console.log("The name is correct")
} else {
    console.log("Expected: susan, Received: "+index.name)
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
