
const util = {
    forEach(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            let ele = arr[i]
            callback(ele)
        }
    }
}

module.exports = util;