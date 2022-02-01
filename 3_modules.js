//modules - Encapsulate code 

const {john, peter}= require('./4_names')
const sayHi= require('./5_utils')

require('./7_mind_grenade')
sayHi('Susan')
sayHi(peter)
sayHi(john)