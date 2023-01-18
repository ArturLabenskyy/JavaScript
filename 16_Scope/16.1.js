// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.

function funcA() {
    console.log(a); // no declaration undefined
    console.log(foo()); // 2
    var a = 1; // nothing
    function foo() {
        return 2;
    }
}
funcA();
/////////////////////////////////////////////////
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
// funcC();
//////////////////////////////////////////////
function funcD1() {
    d = 1;
}
funcD1();
console.log(d); //
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e); // 1
