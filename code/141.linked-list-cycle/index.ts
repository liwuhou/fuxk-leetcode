import ListNode from '../structure/Linked-List'

export default function hasCycle<NodeType = number>(
  head: ListNode<NodeType> | null,
): boolean {
  if (!head || !head.next) return false

  let slow: ListNode<NodeType> = head
  let fast: ListNode<NodeType> = head.next
  let isCycle = false

  while (slow && fast) {
    if (slow === fast) {
      isCycle = true
      break
    }

    slow = slow?.next ?? null
    fast = fast.next?.next ?? null
  }

  return isCycle
}
