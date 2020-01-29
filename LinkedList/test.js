const assert = require('assert');

const LinkedList = require('./LinkedList');

describe('LinkedList', () => {

    describe('size()', () => {

        it('Empty LinkedList should have size 0', () => {
            const linkedList = new LinkedList();
            assert.strictEqual(0, linkedList.size());
        });

        it('Adding 10, 20 to the LinkedList should increment the size by 2', () => {
            const linkedList = new LinkedList();
            linkedList.addLast(10);
            linkedList.addLast(20);
            assert.strictEqual(2, linkedList.size());
        });

    });

    describe('reverse()', () => {
        it('Reversing empty LinkedList should be []', () => {
            const linkedList = new LinkedList();
            linkedList.reverse();
            assert.deepEqual([], linkedList.print());
        });
    });

});