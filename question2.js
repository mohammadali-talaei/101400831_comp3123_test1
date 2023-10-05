const reslovedPromise = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve("Resolved");
        }, 500);
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            reject("Rejected");
        }, 500);
    })
}


reslovedPromise().then((result) => {
    console.log(result);
}).catch(() => {
    console.log("This catch will never run");
});

rejectedPromise().then(() => {
    console.log("This function will never run.");
}).catch((errr) => {
    console.log(errr);
});