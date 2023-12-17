type User = {
  name: string;
  age: number;
  group: string;
};

const persons: User[] = [
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

const logPerson = (user: {name: string, age: number}) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);