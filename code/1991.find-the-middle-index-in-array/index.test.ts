import { findMiddleIndex, findMiddleIndexBetter } from './index'

test('test ', () => {
  expect(findMiddleIndex([1, 2, 1])).toBe(1)
})

test('test', () => {
  expect(findMiddleIndex([1, 1, -1])).toBe(0)
})

test('test', () => {
  expect(findMiddleIndexBetter([1, 2, 1])).toBe(1)
})
