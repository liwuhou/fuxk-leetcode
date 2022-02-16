import RawListNode from '../structure/linked-list'

type ListNode = RawListNode<number>

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let dump: ListNode = new RawListNode<number>(-1)
  let curr = dump
  let p1 = list1,
    p2 = list2

  while (p1 && p2) {
    if (p1.value < p2.value) {
      curr.next = p1
      p1 = p1.next
    } else {
      curr.next = p2
      p2 = p2.next
    }
    curr = curr.next
  }

  if (p1 !== null) {
    curr.next = p1
  }
  if (p2 !== null) {
    curr.next = p2
  }

  return dump.next
}
