class LinkedList {

    constructor() {
      this.first = null;
      this.last = null;
      this.count = 0;
    }
  
    addFirst(value) {
      const node = {
        value: value,
        next: null
      };
  
      if (this.isEmpty()) {
        this.first = node;
        this.last = node;
      } else {
        node.next = this.first; //set the current to be first
        this.first = node;
      }
  
      this.count++;
    }
  
    addLast(value) {
      const node = {
        value: value,
        next: null
      };
  
      if (this.isEmpty()) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
  
      this.count++;
    }
  
    print() {
      if (this.isEmpty()) {
        return [];
      }
      let current = this.first;
  
      let values = [];
      while (current !== null) {
        values.push(current.value);
        current = current.next;
      }
      return values;
    }
  
    isEmpty() {
      return this.first === null;
    }
  
    indexOf(value) {
      let current = this.first;
      let index = 0;
      while (current !== null) {
        if (current.value === value) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    }
  
    contains(value) {
      return this.indexOf(value) !== -1;
    }
  
    removeFirst() {
      if (this.isEmpty()) {
        return;
      }
  
      this.first = this.first.next;
      this.count--;
    }
  
    removeLast() {
      if (this.isEmpty()) {
        return;
      }
  
      let current = this.first;
      let previous = null;
  
      while (current !== null) {
        if (current === this.last) {
          break;
        }
        previous = current;
        current = current.next;
      }
  
      previous.next = null;
      this.count--;
    }
  
    size() {
      return this.count;
    }
  
    // 10 20 30
    // p  c  n
    reverse() {
      if (this.isEmpty()) {
        return;
      }
  
      let previous = this.first;
      let current = this.first.next;
  
      while (current !== null) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
      }
  
      this.last = this.first;
      this.last.next = null;
      this.first = previous;
    }
  
  }
  
  
  // const list = new LinkedList();
  // list.addLast(2);
  // list.addLast(3);
  // list.addLast(4);
  // list.addFirst(99);
  // list.indexOf(3);
  // console.log('does the LinkedList contain 42? => ', list.contains(42));
  // console.log('values in the LinkedList => ', list.print());
  // list.removeFirst();
  // console.log('values in the LinkedList => ', list.print());
  // list.removeLast();
  // console.log('values in the LinkedList => ', list.print());
  // console.log('the size is ', list.size());
  
  // console.log('the list before reversing ', list.print());
  // list.reverse();
  // console.log('the list after reversing ', list.print());

  module.exports = LinkedList;