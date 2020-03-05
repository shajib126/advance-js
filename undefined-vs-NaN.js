let somthing;// this is undefined
function add(num1, num2){
    console.log(num1 + num2);
    //this is undefined cause there have no return
}
const sum = (14, 12);
function addNumber(num1, num2){
    const sum = num1 + num2;
    return sum;
}
const result = addNumber(14)//this undefined , cause function have two parameter but passing here one
console.log(result)

const details = {
    name:"baby";
    id:241;
    village:"Garadob";
    district:"meherpur"

}
console.log(details.policeStation)//this is undefined cause 'policeStation' is not defined
 null // not existence anything ....its call null;