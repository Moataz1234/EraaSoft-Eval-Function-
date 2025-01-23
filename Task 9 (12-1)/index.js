
function sumNos(x, y) {
    return eval(x + y);
}
function substractNos(x, y) {
    return eval(x - y);
}
function multiplyNos(x, y) {
    return eval(x * y);
}
function divNos(x, y) {
    return eval(x / y);
}

function addingNos() {
    let no1 = +prompt("enter first number");
    let no2 = +prompt("enter secound number");
    let final = sumNos(no1, no2);
    console.log(final);
}

function minusNos() {

    let no1 = +prompt("enter first number");
    let no2 = +prompt("enter secound number");
    let final = substractNos(no1, no2);
    minNo(final);
    console.log(final);

}

function multipicationNos() {

    let no1 = +prompt("enter first number");
    let no2 = +prompt("enter secound number");
    let final = multiplyNos(no1, no2);
    console.log(final);

}
function divisionNos() {

    let no1 = +prompt("enter first number");
    let no2 = +prompt("enter secound number");
    let final = divNos(no1, no2);
    divNo(no1,no2);
    console.log(final);

}
function divNo(x, y) {
    if (x % y) {
        alert("the number has kasr");
    }
}
function minNo(x) {
    if (x < 0) {
        alert("the number is by negative");
    }
}