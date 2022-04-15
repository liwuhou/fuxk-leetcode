export default class Stack<T = any> {
  #stack: Record<number, T>
  length: number

  constructor() {
    this.#stack = {}
    this.length = 0
  }

  getItems() {
    return this.#stack
  }

  push(val: T): number {
    this.#stack[this.length++] = val
    return this.length
  }

  pop(): T {
    const tmp = this.#stack[--this.length]
    delete this.#stack[this.length]
    return tmp
  }

  peek(): T | null {
    return this.#stack?.[this.length - 1] ?? null
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  clear() {
    this.#stack = {}
    this.length = 0
  }
}
