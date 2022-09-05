import ListNode from '../structure/Linked-List'

export default function mergeKLists<NodeType = number>(
  lists: Array<ListNode<NodeType> | null>,
): ListNode<NodeType> | null {
  const dummy: ListNode<NodeType> = new ListNode<NodeType>(
    -1 as any as NodeType,
  )
  let p: ListNode<NodeType> | null = dummy

  while (lists.length) {
    let minIdx: number = 0
    let minListNode: ListNode<NodeType> | null = null

    lists.forEach((linkList, idx) => {
      if (!minListNode || (linkList && linkList.value <= minListNode.value)) {
        minListNode = linkList
        minIdx = idx
      }
    })

    if (!minListNode) {
      break
    }
    lists[minIdx] = lists[minIdx].next
    p.next = minListNode
    p = p.next
    minListNode.next = null
    lists.filter((item) => item)
  }

  return dummy.next
}
