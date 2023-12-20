interface User {
  name: string;
  age: number;
  group: string;
};

interface Admin {
  name: string;
  age: number;
  role: 'admin';
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Петя Главный',
    age: 28,
    role: 'admin',
  },
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Коля Васильев',
    age: 30,
    group: 'Семья',
},
{
    name: 'Миша Печенькин',
    age: 18,
    group: 'Друзья',
},
{
    name: 'Оля Борисова',
    age: 25,
    group: 'Друзья',
}
];

const isRole = (user: Person): user is Admin => {
  return 'role' in user;
}

const logPerson = (person: Person): void => {
  let information: string;
  if (isRole(person)) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
}

persons.forEach(logPerson);