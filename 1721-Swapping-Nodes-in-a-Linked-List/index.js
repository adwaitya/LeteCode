var swapNodes = function(head, k) {
    if (!head || !head.next) return head;
    
    let currNode = head;
    let count = 0;
     while (currNode) {
         count++;
         currNode = currNode.next;
     }
    let first = head;
    let second = head;

        for (let i = 1; i < count; i++) {
            if (i < k) {
                first = first.next;
            }
            if (i < count - k + 1) {
                second = second.next;
            }
        }
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
    return head;
};