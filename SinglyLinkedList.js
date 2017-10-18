function Node(val) {
    this.val = val;
    this.next = null;
}

function SinglyLinkedList() {
    this._length = 0;
    this.head = null;
}

SinglyLinkedList.prototype.add = function (val) {
    var node = new Node(val), current = this.head;

    if (!current) {
        this.head = node;
        this._length++;
        return node;
    } else {
//        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this._length++;
        return node;
    }
};

//http://www.geeksforgeeks.org/data-structures/

SinglyLinkedList.prototype.get = function(val) {
    //TODO
};

SinglyLinkedList.prototype.delete = function(val) {
    //TODO  
};


SinglyLinkedList.prototype.length = function(sll) {
    //TODO
};

function reverseSLL(sll) {
    //TODO
}

function kthFromEnd(sll, k) {
    //TODO
}

function deleteKthFromEnd(sll, k) {
    //TODO
}

function detectLoop(sll) {
    //TODO
}

function findLoopStart(sll) {
    //TODO
}

function findMiddle(sll) {
    //TODO
}

function isPalindrome(sll) {
    //TODO
}

function mergeSLL(sll1, sll2) {
    //TODO merge 2 sorted linked lists
}

function mergeSortSLL() {
    //TODO
}

function addTwoNumbers(sll1, sll2) {
    //TODO
}

function rotate(sll, k) {
    
}


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
