import ListNode from '@code/structure/Linked-List'

export function detectCycle<NodeType = number>(
  head: ListNode<NodeType> | null,
): ListNode<NodeType> | null {
  let slow: ListNode<NodeType>, fast: ListNode<NodeType>

  slow = fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      slow = head
      while (true) {
        if (slow === fast) return slow
        slow = slow.next
        fast = fast.next
      }
    }
  }

  return null
}
