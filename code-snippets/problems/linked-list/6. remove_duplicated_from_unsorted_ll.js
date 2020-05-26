//https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/?ref=lbp

// It can be achieved using 3 methods:
// 1. using 2 loops
// 2. sort the list using merge sort (most efficient)
// 3. Hashing

// attempting method 2 with merge sort

function MergeSort(ll) {
  if (ll.head === null || ll.head.next.next) { return ll; } 
  
  const left, right;
  
  const middle = getMiddle(ll.head);

  merge(
    left,
    right
  )
}