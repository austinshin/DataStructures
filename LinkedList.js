function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this._length = 1;
    this.head = null;
}

SinglyLinkedList.prototype.add = function (val) {
    var node = {
        value: val,
        next: null
    }

    if (!this.head) {
        this.head = node;
    } else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this._length++;

};

var sll = new SinglyLinkedList();
sll.add(1);
sll.add(2);
sll.add(3);
console.log(sll);
// 1->2->3

//methods to implement
//remove(position)
//searchNodeAt(position)



//doublylinkedlist
