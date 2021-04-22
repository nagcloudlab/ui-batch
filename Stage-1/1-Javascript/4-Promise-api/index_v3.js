



function getValueAsync() {
    return Promise.resolve(100)
}


// callback

function doSomething_v1() {
    const promise = getValueAsync()
    promise
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
}
doSomething_v1()


// Async & Await
async function doSomething_v2() {
    try {
        let value = await getValueAsync()
        console.log(value)
    } catch (err) {
        console.log(err)

    }
}
doSomething_v2()
