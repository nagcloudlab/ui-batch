
// e-shop for books

/*

problem statement:
 i need all books writen by author 'Nag'

*/

function getAuthorIdAsync(authorName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123)
        }, 2000)
    })
}

function getBooksByAuthorIdAsync(authorId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let books = ['java', "javascript"]
            resolve(books)
        }, 3000)
    })
}


//---------------------------------------------

function getBooksByAuthorName_v1(authorName) {
    getAuthorIdAsync(authorName)
        .then(authorId => {
            getBooksByAuthorIdAsync(authorId)
                .then(books => {
                    console.log(books)
                })
        })
}

//---------------------------------------------


//---------------------------------------------

async function getBooksByAuthorName_v2(authorName) {
    try {
        let authorId = await getAuthorIdAsync(authorName);
        let books = await getBooksByAuthorIdAsync(authorId);
        console.log(books)
    } catch (err) {
        console.log(err);
    }

}

//---------------------------------------------

getBooksByAuthorName_v2("Nag")