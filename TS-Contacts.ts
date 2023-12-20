interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
};

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    type: 'admin',
    name: 'Иван Петров',
    age: 27,
    role: 'Administrator',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    type: 'user',
    name: 'Коля Васильев',
    age: 30,
    group: 'Семья',
},
  {
    type: 'user',
    name: 'Миша Печенькин',
    age: 18,
    group: 'Друзья',
  },
  {
    type: 'user',
    name: 'Оля Борисова',
    age: 25,
    group: 'Друзья',
  }
];

const isAdmin = (user: Person): user is Admin => {
  return user.type === 'admin'
}

const isUser = (user: Person): user is User => {
  return user.type === 'user'
}

const logPerson = (person: Person): void => {
  let information: string;
  if (isAdmin(person)) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${information}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
