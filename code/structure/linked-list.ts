export default class ListNode<T extends any> {
  value: T
  next: ListNode<T> | null

  constructor(value?: T, next?: ListNode<T> | null) {
    this.value = value
    this.next = next ?? null
  }
}
