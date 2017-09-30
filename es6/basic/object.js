// 属性的简介表示
// 属性名变为变量名，属性值变为变量值
const foo = 'bar';
const baz = {foo};
console.log(baz); // {foo: "bar"}
// 方法也可以
const name = 'xiaojie';
const o = {
    name,
    method() {
        return this.name;
    }
};
console.log(o.method());// 'xiaojie'