'use strict';
let should = require('should');
let ExtPromise = require('./..');

describe('ExtPromise', function() {
    it('::all', () => ExtPromise
        .all({
            result1: 1,
            result2: Promise.resolve(2),
            result3: new ExtPromise(resolve =>
                setTimeout(() => resolve(3), 100)
            )
        })
        .should.be.fulfilledWith({
            result1: 1,
            result2: 2,
            result3: 3
        })
    );
});
