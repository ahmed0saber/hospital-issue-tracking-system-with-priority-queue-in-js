import Queue from "./queue.js";

const issuesHandler = new Queue()

issuesHandler.enqueue("Water cut in bathroom", 1)
issuesHandler.enqueue("Empty room needs to be cleaned and prepared", 3)
issuesHandler.enqueue("Electricity issue in ground floor", -1)
issuesHandler.enqueue("TV needs to be repaired", 0)
issuesHandler.enqueue("Lost patient file", 5)

console.log("all items in queue: ", issuesHandler.getItems())
console.log("all items in queue sorted by priority: ", issuesHandler.getSortedItems())
console.log("size of queue: ", issuesHandler.size())

console.log("first item to be dequeued: ", issuesHandler.dequeue())
console.log("second item to be dequeued: ", issuesHandler.dequeue())
console.log("third item to be dequeued: ", issuesHandler.dequeue())
console.log("fourth item to be dequeued: ", issuesHandler.dequeue())
console.log("fifth item to be dequeued: ", issuesHandler.dequeue())
console.log("trying to dequeue an empty queue: ", issuesHandler.dequeue())
