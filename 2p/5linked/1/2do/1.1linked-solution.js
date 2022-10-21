import Linked from '../../5es/linked5es.js'
function Node(data) {//constructor
  this.data = data
  this.next = null
}
let n1 = new Node('a')
let n2 = new Node('b')

let l = new Linked(n1)
l.prepend(n2)
l.append(new Node('c'))
l.prepend(new Node('d'))
l.traverse(l.getHead())
console.log(l.contains('d'))
console.log(l.contains('f'))
console.log(l.getTail())