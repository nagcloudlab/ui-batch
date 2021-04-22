const hotel = {
    getFood() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("chicken biryani")
            }, 5000);
        });
    }
}

module.exports = hotel;