const people = [`Greg`, `Mary`, `Devon`, `James`];
//1
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
//2
people.shift();
console.log(people);
people.pop();
console.log(people);
people.unshift(`Matt`);
console.log(people);
people.push(`Artur`);
console.log(people);
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === `Mary`) {
        break;
    }
}
