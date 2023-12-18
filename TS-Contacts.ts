type User = {
  name: string;
  age: number;
  group: string;
};

type Admin = {
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

const logPerson = (user: Person): void => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:', persons);
persons.forEach(logPerson);