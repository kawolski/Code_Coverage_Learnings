const sum = require('./sum')

test('Properly Adds 2 Numbers', () => {
    expect(sum(1,2)).toBe(3)
})