/**Example 1 */
//Generator function has asterick and the yield keyword.
//.next() will return a generator object.
function* genFunction() {
    yield "hello world";
}

let genObject = genFunction();
// console.log(genObject.next()); // { value: 'hello world', done: false }
// console.log(genObject.next()); // { value: undefined, done: true }

/**Example 2 */
// .next() advances; yield pauses; return stops;
function* logGenerator() {
    console.log('running...');
    yield 'paused';
    console.log('running again...');
    return'stopped';
}

let logger = logGenerator();
// console.log(logger.next()); // { value: 'paused', done: false }
// console.log(logger.next()); // { value: 'stopped', done: true }
//Note: when generator returns, the value is 'stopped'. and done is true.

/**Example 3 */
//Generators is also iterable
function* abcs(){
    yield 'a';
    yield 'b';
    yield 'c';
}

for (let letter of abcs()) {
    console.log(letter);
}

console.log([...abcs()]);