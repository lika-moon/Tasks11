// 1.	Фильтрация продуктов по категориям и цене: Дан массив продуктов, где каждый продукт 
// описывается объектом с полями name, category, и price. Напишите функцию, которая возвращает
//  новый массив продуктов, относящихся к категории "электроника" или "продукты питания", 
//  и имеющих цену меньше 500.
let products = [
    { name: "Ноутбук", category: "электроника", price: 450 },
    { name: "Яблоки", category: "продуктыпитания", price: 50 },
    { name: "Клавиатура", category: "электроника", price: 700 },
    { name: "Бананы", category: "продуктыпитания", price: 30 },
    { name: "Телевизор", category: "электроника", price: 800 },
    { name: "Хлеб", category: "продуктыпитания", price: 40 }
];

const filter = (products, category, price) => {
    return products.filter(product => product.category === category && product.price < price)

};
filter(products, "электроника", 500);
console.log(filter(products, "электроника", 500))

// 2.	Поиск студентов по оценкам и курсу: Дан массив объектов, представляющих студентов с полями 
// name, grade (оценка), и year (курс). Напишите функцию, которая возвращает имена студентов 2-го 
// и 3-го курса, у которых оценка выше 4.
const students = [
    { name: "Иван", grade: 5, year: 2 },
    { name: "Светлана", grade: 4.5, year: 3 },
    { name: "Алексей", grade: 3, year: 1 },
    { name: "Мария", grade: 5, year: 3 },
    { name: "Дмитрий", grade: 2, year: 4 }
];

const study = (student, firstYear, secondYear, grade) => {
    let studentName = [];
    student
        .filter(human => (human.year === firstYear || human.year === secondYear) && human.grade > grade)
        .map(humanName => studentName.push(humanName.name))
    return studentName
}
study(students, 2, 3, 4)
console.log(study(students, 2, 3, 4))

// 3.	Фильтрация и группировка книг по авторам и жанрам: имеется массив книг, каждая книга 
// описывается объектом с полями title, author, и genre. Напишите функцию, которая возвращает 
// объект, где ключи — это имена авторов, а значения — массивы книг данного автора в жанрах 
// "фантастика" или "мистика".

const books = [
    { title: "Книга 1", author: "Автор 1", genre: "фантастика" },
    { title: "Книга 2", author: "Автор 2", genre: "мистика" },
    { title: "Книга 3", author: "Автор 1", genre: "история" },
    { title: "Книга 4", author: "Автор 3", genre: "фантастика" },
    { title: "Книга 5", author: "Автор 2", genre: "мистика" }
];

const filterBoks = (books, author, genre) => {
    let ObjBook = [];
    let bookAutor = [];
    let finishObj = {};
    books
        .filter(book => book.author === author && book.genre === genre)
        .map(elem => ObjBook.push(elem.title))
    bookAutor.push(author)   
    finishObj[bookAutor] = ObjBook
    return finishObj
}
filterBoks(books, "Автор 1", "фантастика")
console.log(filterBoks(books, "Автор 1", "фантастика"))

// 4.	Сортировка пользователей по возрасту и фильтрация по стране: Дан массив объектов,
//  представляющих пользователей с полями name, age, и country. Напишите функцию, которая
//   возвращает новый массив пользователей, живущих в "Канаде" или "Мексике",
//    отсортированный по возрасту в порядке убывания.

const users = [
    { name: "Анна", age: 25, country: "Канада" },
    { name: "Боб", age: 30, country: "Мексика" },
    { name: "Карл", age: 19, country: "США" },
    { name: "Диана", age: 22, country: "Мексика" },
    { name: "Елена", age: 29, country: "Канада" }
];

const usersSort = (user, country) => {
    return user
        .filter(human => human.country === country)
        .sort(function (a, b) {
            return b.age - a.age
        })
}
usersSort(users, "Канада");
console.log(usersSort(users, "Канада"))

// 5.	Фильтрация задач по статусу выполнения и сложности: имеется массив задач,
//  каждая задача описывается объектом с полями title, completed (булево значение), 
//  и difficulty. Напишите функцию, которая возвращает названия невыполненных задач 
//  с уровнем сложности выше 3.

const tasks = [
    { title: "Задача 1", completed: false, difficulty: 4 },
    { title: "Задача 2", completed: true, difficulty: 5 },
    { title: "Задача 3", completed: false, difficulty: 2 },
    { title: "Задача 4", completed: false, difficulty: 5 }
];
const task = (tasks, completed, difficulty) => {
    let newTitleTask = []
    tasks
        .filter(task => task.difficulty > difficulty && task.completed === completed)
        .map(newTask => newTitleTask.push(newTask.title))
    return newTitleTask
}
task(tasks, 3)
console.log(task(tasks, false, 3))

// 6.	Поиск и фильтрация событий по дате и типу: Дан массив событий, где каждое событие 
// описывается объектом с полями name, date (строка в формате YYYY-MM-DD), и type. Напишите
//  функцию, которая возвращает массив событий, происходящих после заданной даты и относящихся
//   к типу "конференция" или "выставка".

const events = [
    { name: "Событие 1", date: "2024-01-01", type: "конференция" },
    { name: "Событие 2", date: "2024-02-15", type: "выставка" },
    { name: "Событие 3", date: "2024-03-01", type: "семинар" },
    { name: "Событие 4", date: "2024-04-20", type: "конференция" }
];

const filtrEvent = (events, data, type) => {
    const newEventName = [];
    events
        .filter(eventFilter => eventFilter.type === type || eventFilter.data >= data)
        .map(eventName => newEventName.push(eventName.name))
    return newEventName
}
filtrEvent(events, "2024-01-01", "конференция")
console.log(filtrEvent(events, "2024-01-01", "конференция"))

// 7.	Фильтрация чисел по нескольким условиям: Напишите функцию, которая принимает массив 
// чисел и возвращает новый массив, содержащий числа, которые делятся 
// на 2 или 3, но не на 5.
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25];

const filterNumb = (numbers, divisibleOne, divisibleTwo, notDivisible) => {
    return numbers.filter(numb => (numb % divisibleOne == 0 || numb % divisibleTwo == 0) && (numb % notDivisible))
}
filterNumb(numbers, 2, 3, 5)
console.log(filterNumb(numbers, 2, 3, 5))


// 8.	Поиск автомобилей по марке и году выпуска:
//  Дан массив автомобилей, каждый автомобиль описывается объектом с полями model,
//   make (марка), и year. Напишите функцию, которая возвращает модели автомобилей
//    марки "Toyota" или "Ford", выпущенные после 2010 года.

const cars = [
    { model: "Camry", make: "Toyota", year: 2015 },
    { model: "Focus", make: "Ford", year: 2013 },
    { model: "Civic", make: "Honda", year: 2012 },
    { model: "Fiesta", make: "Ford", year: 2014 },
    { model: "Accord", make: "Honda", year: 2009 }
];

const car = (cars, make, year) => {
    let modelCar = [];
    cars
        .filter(car => car.make === make && car.year > year)
        .map(carModel => modelCar.push(carModel.model))
    return modelCar
}
car(cars, "Toyota", 2010)
console.log(car(cars, "Ford", 2010));

// 9.	Фильтрация и суммирование значений: имеется массив транзакций, каждая транзакция 
// описывается объектом с полями amount и type ("income" для доходов и "expense" для расходов).
//  Напишите функцию, которая возвращает сумму доходов, превышающих 1000, или расходов, 
//  не превышающих 500.

const transactions = [
    { amount: 1500, type: "income" },
    { amount: 2000, type: "income" },
    { amount: 800, type: "expense" },
    { amount: 300, type: "expense" },
    { amount: 450, type: "expense" }
];

const sumTransaction = (transactions, type, exceeding, notExceeding) => {

    return transactions
        .filter(transaction => transaction.type === type && (transaction.amount > exceeding || transaction.amount < notExceeding))
        .map(amountTransaction => amountTransaction.amount)
        .reduce(function (sum, elem) {
            return sum + elem;
        }, 0)
}
sumTransaction(transactions, "expense", 1000, 500)
console.log(sumTransaction(transactions, "expense", 1000, 500))

// 10.	Фильтрация массива объектов по дополнительным критериям: 
// Дан массив сотрудников, каждый сотрудник описывается объектом с полями name,
//  department, и salary. Напишите функцию, которая возвращает новый массив сотрудников
//   из отделов "маркетинг" или "продажи", чья зарплата находится в диапазоне от 3000 до 5000.

const employees = [
    { name: "Иван", department: "маркетинг", salary: 4000 },
    { name: "Светлана", department: "продажи", salary: 3500 },
    { name: "Алексей", department: "разработка", salary: 5000 },
    { name: "Мария", department: "маркетинг", salary: 3200 },
    { name: "Дмитрий", department: "продажи", salary: 4500 }
];

const employee = (employees, department, from, before) => {
    let newMassEmployees = [];
    employees
        .filter(employee => employee.department === department && (employee.salary > from || employee.salary < before))
        .map(humans => newMassEmployees.push(humans))
    return newMassEmployees
}
employee(employees, "маркетинг", 3000, 5000)
console.log(employee(employees, "маркетинг", 3000, 5000))






