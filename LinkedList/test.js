const assert = require('assert');

const LinkedList = require('./LinkedList');

describe('LinkedList', () => {

    describe('size()', () => {

        it('Size should be 0 for the empty LinkedList', () => {
            const linkedList = new LinkedList();
            assert.strictEqual(0, linkedList.size());
        });

        it('Adding 2 items to the LinkedList should increase the size by 2', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(10);
            linkedList.addLast(20);
            assert.strictEqual(2, linkedList.size());
        });

        it('Deleting 1 items from the LinkedList should decrease the size by 1', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(10);
            linkedList.addLast(20);
            linkedList.removeLast()
            assert.strictEqual(1, linkedList.size());
        });

    });

    describe('reverse()', () => {
        it('Reversing empty LinkedList should be []', () => {
            const linkedList = new LinkedList();
            linkedList.reverse();
            assert.deepEqual([], linkedList.print());
        });
        it('Reversing [3, 2, 1] should return [1, 2, 3]', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(3);
            linkedList.addLast(2);
            linkedList.addLast(1);
            linkedList.reverse();
            assert.deepEqual([1,2,3], linkedList.print());
        });
    });

    describe('addLast()', () => {
        it('Should be the recent added item', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(10);
            linkedList.addLast(20);
            linkedList.addLast(30);
            assert.strictEqual(30, linkedList.print()[linkedList.size() - 1]);
        })
    })

    describe('addFirst()', () => {
        it('Should be the least recently added item, if addFirst() is not used', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(10);
            linkedList.addLast(20);
            linkedList.addLast(30);
            assert.strictEqual(10, linkedList.print()[0]);
        })

        it('Should be the item added by addFirst()', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(10);
            linkedList.addLast(20);
            linkedList.addLast(30);
            linkedList.addFirst(99);
            assert.strictEqual(99, linkedList.print()[0]);
        })
    })

    describe('contains()', () => {
        it('Should return true for the item that was added to the list', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(10);
            linkedList.addLast(20);
            linkedList.addLast(30);
            assert.strictEqual(linkedList.contains(20), true);
        })
        it('Should return false for the item that was added to the list', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(10);
            assert.strictEqual(linkedList.contains(99), false);
        })
    })

    describe('indexOf()', () => {
        it('Should return index value for the item that is present', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(10);
            linkedList.addLast(20);
            linkedList.addLast(30);
            assert.strictEqual(linkedList.indexOf(20), 1);
        })
        it('Should return false for the item that was added to the list', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(100);
            assert.strictEqual(linkedList.indexOf(99), -1);
        })
    })

    describe('removeFirst()', () => {
        it('should return undefined for empty LinkedList', () => {
            const linkedList = new LinkedList()
            assert.strictEqual(linkedList.removeFirst(), undefined);
        })
        it('Should remove the first element', () => {
            const linkedList = new LinkedList()
            linkedList.addLast(10);
            linkedList.addLast(20);
            linkedList.removeFirst()
            linkedList.addLast(30);
            assert.strictEqual(linkedList.indexOf(10), -1);
        })
    })

    describe('removeLast()', () => {
        it('should return undefined for empty LinkedList', () => {
            const linkedList = new LinkedList()
            assert.strictEqual(linkedList.removeLast(), undefined);
        })
        it('Should remove the first element', () => {
            const linkedList = new LinkedList()
            linkedList.addLast(10);
            linkedList.addLast(20);
            linkedList.removeLast()
            linkedList.addLast(30);
            assert.strictEqual(linkedList.indexOf(20), -1);
        })
    })

});