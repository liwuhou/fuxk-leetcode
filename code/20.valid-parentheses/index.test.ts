import validParentheses from './index'

test('test', () => {
  expect(validParentheses('{}')).toBeTruthy()
})

test('test', () => {
  expect(validParentheses('{)')).toBeFalsy()
})
