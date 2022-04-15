import Stack from './index'

const stack = new Stack<number>()

test('test', () => {
  expect(stack.isEmpty()).toBeTruthy()
  expect(stack.length).toBe(0)
  expect(stack.getItems()).toEqual({})
  expect(stack.peek()).toBeNull()
})

test('test', () => {
  stack.push(0)
  expect(stack.isEmpty()).toBeFalsy()
  expect(stack.length).toBe(1)
  expect(stack.getItems()).toEqual({ '0': 0 })
})

test('test', () => {
  stack.push(1)
  expect(stack.getItems()).toEqual({ '0': 0, '1': 1 })
  expect(stack.peek()).toBe(1)
})

test('test', () => {
  expect(stack.pop()).toBe(1)
  expect(stack.getItems()).toEqual({ '0': 0 })
  expect(stack.peek()).toBe(0)
})

test('test', () => {
  stack.clear()
  expect(stack.isEmpty()).toBeTruthy()
  expect(stack.getItems()).toEqual({})
})
