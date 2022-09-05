import ListNode from '../structure/Linked-List'
import mergeKLists from '.'

const link1 = new ListNode(1, new ListNode(4, new ListNode(5)))
const link2 = new ListNode(1, new ListNode(3, new ListNode(4)))
const link3 = new ListNode(2, new ListNode(6))

const lists: Array<ListNode<number>> = [link1, link2, link3]

const answerLinkList = new ListNode(
  1,
  new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(
        3,
        new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6)))),
      ),
    ),
  ),
)

test('test', () => {
  expect(mergeKLists(lists)).toEqual(answerLinkList)
})
