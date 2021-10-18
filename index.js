import { getGreeting } from './getGreeting.js'
import { replaceName } from './replaceName.js'

console.log(getGreeting('Jane Doe'))

console.log(replaceName('Hello Jane', 'Jane', 'John'))
console.log(replaceName('Hello Jane. Goodbye Jane.', 'Jane', 'John'))
