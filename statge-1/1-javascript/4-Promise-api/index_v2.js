


function getValueAsync() {

    // const promise = new Promise((resolve, reject) => {
    //     resolve(100)
    // });
    // return promise;

    // or

    return Promise.resolve(100)

}



let promise = getValueAsync()
promise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});