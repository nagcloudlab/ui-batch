const { test, expect } = require("@jest/globals");

const hotel = require('./hotel')


// test("should return biryani", (done) => {

//     hotel.getFood()
//         .then(response => {
//             expect(response).toMatch(/biryani/)
//             done()
//         })

// })


// test("should return biryani", () => {
//     expect.assertions(1);
//     return hotel.getFood()
//         .then(response => {
//             expect(response).toMatch(/biryani/)
//         })

// })




test("should return biryani", async () => {
    await expect(hotel.getFood()).resolves.toMatch(/biryani/)
})
