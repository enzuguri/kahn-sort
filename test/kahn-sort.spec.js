describe('kahn-sort', function() {
    var assert = require('assert');
    var fixtures = require('./fixtures');
    var kSort = require('../kahn-sort');

    Object.keys(fixtures).forEach(function(suiteName) {
        var tests = fixtures[suiteName];
        describe(suiteName, function() {
            Object.keys(tests).forEach(function(testName) {
                var testParams = tests[testName];
                var execute = function() {
                    return kSort(testParams.input);
                }
                it(testName, function() {
                    if (testParams.output === Error) {
                        assert.throws(execute, Error);
                    } else {
                        assert.deepEqual(execute(), testParams.output);
                    }
                });
            }, this);
        });
    }, this);
});
