
const calc = require('./calc')

// Arrange
test("1+2=3", () => {
    const actual = calc.add(1, 2) // Act
    // Assert
    expect(actual).toBe(3)
})

// Arrange
test("1-2=-1", () => {
    const actual = calc.sub(1, 2) // Act
    // Assert
    expect(actual).toBe(-1)
})


