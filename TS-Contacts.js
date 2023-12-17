var persons = [
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
var logPerson = function (user) {
    console.log("".concat(user.name, ", ").concat(user.age));
};
console.log('Users:');
persons.forEach(logPerson);
