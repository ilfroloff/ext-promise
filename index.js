'use strict';

class ExtPromise extends Promise {
    /**
     * Extended static method Promise.all. New method enters object parameter
     *
     * @param {Iterable.<Promise>|Object} promises
     * @static
     * @return {ExtPromise}
     */
    static all(promises) {
        if(!require('./isPlainObject')(promises)) {
            return super.all(promises);
        }

        let arrayed_promises = [];

        return super
            .all(Object
                .keys(promises)
                .map(key => (arrayed_promises.push(key), promises[key]))
            )
            .then(results => results
                .reduce((restored, result, index) => (restored[arrayed_promises[index]] = result, restored), {})
            );
    }
}

module.exports = ExtPromise;
