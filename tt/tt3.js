/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 const reverseBetween1 = function(head, left, right) {
  const [b] = head.splice(right-1,1)
  const [a] = head.splice(left-1,1)
  head.splice(left-1,0,b)
  head.splice(right-1,0,a)
  return head
};
const reverseBetween2 = function(head, left, right) {
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  let pre = dummy_node;
  for (let i = 0; i < left - 1; ++i) {
      pre = pre.next;
  }
  let cur = pre.next;
  for (let i = 0; i < right - left; ++i) {
      const next = cur.next;
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
  }
  return dummy_node.next;
};
  
  console.log(reverseBetween1([1,2,3,4,5],    2,    4));
  console.log(reverseBetween2([1,2,3,4,5],    2,    4));
  