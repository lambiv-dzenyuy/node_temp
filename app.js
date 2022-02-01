const _ = require('lodash')

const items = [2, [5,[7,[10]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);