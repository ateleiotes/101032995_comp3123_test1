const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
// Filter out strings
var filterArray = mixedArray.filter((a) => typeof a === "string" && a !== "");

var lowerArray = filterArray.map(function(l) {
    return l.toLowerCase();
});

// Promise function
function lowerCaseWords(filterArray) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(lowerArray);

            // Create flag
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong!");
            }
        }, 1000);
    });
}

lowerCaseWords()