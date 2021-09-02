function Node(element) {
  this.element = element;
  this.next = null;
}

function linkedList() {
  this._head = new Node("This is Head Node.");
  this._size = 0;
}

linkedList.prototype.add = function (item) {
  this.insert(item);
};


linkedList.prototype.isEmpty = function () {
  return this._size === 0;
};

linkedList.prototype.size = function () {
  return this._size;
};

linkedList.prototype.getHead = function () {
  return this._head;
};

linkedList.prototype.display = function () {
  var currNode = this.getHead().next;
  while (currNode) {
    console.log(currNode.element);
    currNode = currNode.next;
  }
};

linkedList.prototype.remove = function (item) {
  if (item) {
    var preNode = this.findPre(item);
    if (preNode == null) return;
    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
      this._size--;
    }
  }
};



linkedList.prototype.insert = function (newElement, item) {
  var newNode = new Node(newElement);
  var finder = item ? this.find(item) : null;
  if (!finder) {
    var last = this.findLast();
    last.next = newNode;
  } else {
    newNode.next = finder.next;
    finder.next = newNode;
  }
  this._size++;
};
linkedList.prototype.findLast = function () {
  var currNode = this.getHead();
  while (currNode.next) {
    currNode = currNode.next;
  }
  return currNode;
};
linkedList.prototype.findPre = function (item) {
  var currNode = this.getHead();
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};
linkedList.prototype.find = function (item) {
  if (item == null) return null;
  var currNode = this.getHead();
  while (currNode && currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};
export default  linkedList;
