var assert = require('../')
var nanoerror = require('nanoerror')

test('test that it doesnt throw', () => {
  // eslint-disable-next-line
  expect(() => assert(true === true)).not.toThrow()
})

test('throws on falsy', () => {
  expect(() => assert(false)).toThrow()
})

test('default message', () => {
  try {
    assert(false)
  } catch (e) {
    expect(e.message).toBe('')
  }
})

test('custom message', () => {
  try {
    assert(false, 'hello world')
  } catch (e) {
    expect(e.message).toBe('hello world')
  }
})

test('custom error constructor', () => {
  class MyError extends Error {
    constructor (message) {
      super()
      this.message = message
    }
  }
  try {
    assert(false, MyError, 'hello')
  } catch (e) {
    expect(e.message).toBe('hello')
    expect(e instanceof MyError).toBe(true)
  }
})

test('custom nanoerror', () => {
  const MyError = nanoerror('MY_ERROR', '%s world')
  try {
    assert(false, MyError, 'hello')
  } catch (e) {
    expect(e.message).toBe('hello world')
    expect(e instanceof MyError).toBe(true)
  }
})
