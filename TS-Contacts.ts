interface User {
  name: string;
  age: number;
  group: string;
};

interface Admin {  
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {    
    name: 'Иван Петров',
    age: 27,
    role: 'Administrator',
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

const isAdmin = (user: Person): user is Admin => {
  return 'role' in user;
}

const isUser = (user: Person): user is User => {
  return 'group' in user
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
