/**
 * reverses a linked list in-place.
 * 
 * list nodes take the shape:
 *    {
 *      next: <next node>
 *    }
 * 
 * @param head head of the linked list to reverse
 * @returns the head of the reversed link list
 */
function reverse_linked_list(head) {
  let curr = head;
  let nxt = curr.next;
  curr.next = null;
  while (nxt != null) {
    let tmp = nxt.next;
    nxt.next = curr;
    curr = nxt;
    nxt = tmp;
  }
  return curr;
}