class LinkedList {
  _head = null;
  _tail = null;
  _size = 0;

  insertAtFirst(value) {
    if (this._head === null) {
      this._head = new Node(value);
      this._tail = this._head;
      this._size++;
      return this._head;
    }

    const node = new Node(value);
    node.next = [this._head];
    // this._size;
    this._head = node;
  }

  getNode(value, newValue) {
    const node = new Node(newValue);
    console.log(value);
    value.next.push(node);
    // let temp = this._head;
    // console.log(temp);
    // while (temp.value !== value) {
    //   temp =
    //     temp.next?.length === 1
    //       ? temp.next[0]
    //       : temp.next.find((node) => node.value === value);
    // }
    // const node = new Node(newValue);
    // temp.next.push(node);
    return this._head;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || [];
  }
}

export const ll = new LinkedList();
ll.insertAtFirst(6);
ll.insertAtFirst(20);
ll.insertAtFirst(11);

// const getNodeValue = ll.getNode(20, 12);
// const getNodeValue2 = ll.getNode(6, 222);
// console.log(getNodeValue);
