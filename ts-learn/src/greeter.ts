class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'hello,' + person.firstName + ' ' + person.lastName;
}

// let user = 'Jane User';
// let user = {firstName: 'Jane', lastName: 'User'};
let user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);

let isDone: boolean = false;
let decLiteral: number = 6;
let name: string = 'jie';

let list_a: number[] = [1, 2, 3]; // 元素类型[]
let list_b: Array<number> = [1, 2, 3]; // 数组泛型 Array<元素类型>

// 元组 tuple
// 允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let x: [string, number];
x = ['hello', 1]; // correct
x = [1, 'hello']; // error


