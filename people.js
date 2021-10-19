export function getFirstNames(people) {}

function getFullName(person) {}

export function getFullNames(people) {}

export function getNameAndAge(people) {}

export function getAgesOfFriends(people, id) {}

export function getFullNamesSortedByAge(people) {}

export function getPeopleByAge(people, age) {}

export function getPeopleNamesOlderThan(people, age) {}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function findPeopleByIds(people, ids) {}

export function getFriendsOfPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

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
