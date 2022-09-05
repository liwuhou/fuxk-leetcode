import hasCycle from '.'
import ListNode from '../structure/Linked-List'

const normalList: ListNode<string> = new ListNode(
  'a',
  new ListNode('b', new ListNode('c')),
)
const cycleList: ListNode<number> = new ListNode(
  0,
  new ListNode(1, new ListNode(2)),
)

// make a cycle
cycleList.next.next = cycleList.next

test('test a cycle list', () => {
  expect(hasCycle(cycleList)).toBeTruthy()
})

test('test a not cycle list', () => {
  expect(hasCycle(normalList)).toBeFalsy()
})
