


const { test, expect } = require('@jest/globals')
// const util = require('./util')

// test('test1', () => {
//     const mockFn = jest.fn(ele => console.log(ele))
//     let myArray = [1, 2, 3]
//     util.forEach(myArray, mockFn)
//     expect(mockFn.mock.calls.length).toBe(myArray.length)
//     expect(mockFn.mock.calls[0][0]).toBe(myArray[0])
// })



test('test2', () => {

    const myMock = jest.fn();

    myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce(20)
        .mockReturnValueOnce(30)

    expect(myMock()).toBe(10)
    expect(myMock()).toBe(20)
    expect(myMock()).toBe(30)
})
