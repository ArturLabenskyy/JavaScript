letterGrade = function(scoreGrade) {
    let grade;
    if (0 <= scoreGrade && scoreGrade <= 64) {
        grade = "F";
    } else if (64 < scoreGrade && scoreGrade <= 69) {
        grade = "D";
    } else if (69 < scoreGrade && scoreGrade <= 79) {
        grade ="C";
    } else if (79 < scoreGrade && scoreGrade <= 89) {
        grade = "B";
    } else if (89 < scoreGrade && scoreGrade <= 100) {
        grade = "A";
    } else {
        console.log(`Invalid input`);
        return;
    }
    console.log(`Your grade is: ${grade}`);
}

letterGrade(0);
letterGrade(64);
letterGrade(65);
letterGrade(70);
letterGrade(80);
letterGrade(90);
letterGrade(100);
letterGrade(-1);
letterGrade(1000);