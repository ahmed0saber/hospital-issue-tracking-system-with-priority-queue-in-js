class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item, priority) {
        if (priority < 1) {
            priority = 1
        }

        this.items.push({ item, priority })
    }

    dequeue() {
        if (this.items.length === 0) {
            return null
        }

        let highestPriority = 0
        let itemToDequeueIndex = -1

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > highestPriority) {
                highestPriority = this.items[i].priority
                itemToDequeueIndex = i
            }
        }

        return this.items.splice(itemToDequeueIndex, 1)[0]
    }

    getItems() {
        return this.items
    }

    getSortedItems() {
        return [...this.items].sort((a, b) => b.priority - a.priority)
    }

    size() {
        return this.items.length
    }
}

export default Queue
