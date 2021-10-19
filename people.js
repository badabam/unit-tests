export function getFirstNames(people) {
  return people.map(person => person.firstName)
}

function getFullName(person) {
  return person.firstName + ' ' + person.lastName
}

export function getFullNames(people) {
  return people.map(getFullName)
}

export function getNameAndAge(people) {
  return people.map(person => `${person.lastName} (${person.age})`)
}

export function getAgesOfFriends(people, id) {
  return findPersonById(people, id)
    .friendIds.map(id => findPersonById(people, id))
    .map(person => person.age)
}

export function getFullNamesSortedByAge(people) {
  return people
    .slice()
    .sort((a, b) => (a.age < b.age ? -1 : 1))
    .map(getFullName)
}

export function getPeopleByAge(people, age) {
  return people.filter(person => person.age === age)
}

export function getPeopleNamesOlderThan(people, age) {
  return people.filter(person => person.age > age).map(getFullName)
}

export function getPeopleByLastName(people, lastName) {
  return people.filter(person => person.lastName === lastName)
}

export function findPersonById(people, id) {
  return people.find(person => person.id === id)
}

export function findPeopleByIds(people, ids) {
  return ids.map(id => findPersonById(people, id))
}

export function getFriendsOfPersonById(people, id) {
  return findPersonById(people, id).friendIds.map(id =>
    findPersonById(people, id)
  )
}

export function isAnyoneOlderThan(people, age) {
  return people.some(person => person.age > age)
}

export function getPeople() {
  return [
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 21,
      email: 'jane@doe.com',
      friendIds: [2, 3, 4],
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      age: 18,
      email: 'john@doe.com',
      friendIds: [1, 3, 5],
    },
    {
      id: 3,
      firstName: 'Max',
      lastName: 'Mustermann',
      age: 32,
      email: 'max@mustermann.de',
      friendIds: [1, 2, 4, 5],
    },
    {
      id: 4,
      firstName: 'Erika',
      lastName: 'Musterfrau',
      age: 38,
      email: 'erika.musterfrau@gmail.com',
      friendIds: [2, 5],
    },
    {
      id: 5,
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 23,
      email: 'luke@tatooine-mail.com',
      friendIds: [1, 2],
    },
  ]
}
