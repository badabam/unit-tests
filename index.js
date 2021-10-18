function getGreeting(name = 'you') {
  return `Hello ${name}!` // template literal
}

console.log(getGreeting('Jane Doe'))

function replaceName(text, name, newName) {
  return text.replaceAll(name, newName)
}

console.log(replaceName('Hello Jane', 'Jane', 'John'))
console.log(replaceName('Hello Jane. Goodbye Jane.', 'Jane', 'John'))
