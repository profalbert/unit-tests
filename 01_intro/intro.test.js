const { sum, nativeNull } = require('./intro')

describe('Sum function:', () => {
  test('should return sum of two values', () => {
    // toBe - сравнивает примитивные значения (числа, строки и тд)
    expect(sum(1, 3)).toBe(4)
    // toEqual - сравнивает как простые, так и сложные значения (массивы, объекты и тд)
    expect(sum(1, 3)).toEqual(4)
  })

  test('should return value correctly comparing to other values', () => {
    expect(sum(2, 3)).toBeGreaterThan(4)
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
    expect(sum(2, 3)).toBeLessThan(6)
    expect(sum(2, 3)).toBeLessThanOrEqual(5)
  })

  test('should sum 2 float values correctly', () => {
    expect(sum(0.3, 0.6)).toBeCloseTo(0.9)
  })
})

describe('Native null function:', () => {
  test('should return false value null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy() // falsy values: undefined, null, 0, '', NaN, false и др
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
})
