const lowerCaseWords = (inputArray) => {
    return new Promise((resolve, reject) => {
        console.log(typeof inputArray);
        if (!Array.isArray(inputArray))
            reject("Rejected: input is not an array");
        else {
            resolve(filterArray(inputArray));
        }
    });
}

const filterArray = (inputArray) => {
    return inputArray
        .filter(item => typeof item === 'string')
        .map(item => item.toLowerCase());
}

lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings']).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});