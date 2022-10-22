import { Linked, Node } from '../../../../camh/linked/node5es.js'
let n1 = new Node('a')
let n2 = new Node('b')

let l = new Linked(n1)
l.prepend(n2)
l.append(new Node('c'))
l.traverse(l.getHead())
l.InsertAfter('c', new Node('f'))
l.traverse(l.getHead())

l.InsertBefore('f', new Node('e'))
l.traverse(l.getHead())