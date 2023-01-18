// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.

function funcA() {
    console.log(a); // no declaration
    console.log(foo()); // 2
    var a = 1; // nothing
    function foo() {
        return 2;
    }
}
funcA();
