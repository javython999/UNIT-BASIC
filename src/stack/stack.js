class Stack {

  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }


  push(item) {
    const node = {item: item, next: this.head};
    this.head = node;
    this._size ++;
  }

  pop() {
    if (this.head === null) {
      throw new Error('Stack is empry');
    }

    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }


  peek() {
    if (this.head === null) {
      throw new Error('Stack is empry');
    }
    return this.head.item;
  }

}

module.exports = Stack;