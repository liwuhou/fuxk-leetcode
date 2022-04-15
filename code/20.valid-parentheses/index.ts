import { Stack } from '@structure'

export default function validParentheses(str: string): boolean {
  const stack = new Stack<string>()
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
    '>': '<',
  }

  for (let i = 0; i < str.length; i++) {
    if (stack.peek() === bracketMap[str[i]]) {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }

  return stack.isEmpty()
}
