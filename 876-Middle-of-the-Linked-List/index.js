var middleNode = function(head) {
    let slow = head;
          let fast = head;
 
          while (slow && fast && fast.next) {
              slow = slow.next;
              fast = fast.next.next;
          }
     
          return slow;  
 };