const student = [
    {id:21, name : 'omor Sunny'},
    {id:31, name : 'Manna'},
    {id:41, name : 'Moyuri'},
    {id:71, name : 'Deepjol'}
];
// const result = [];
// for(let i = 0; i < student.length; i++){
//     const element = student[i];
//     const output = element.name;
//     result.push(output)
// }
// console.log(result)
const name = student.map(s => s.name);
const ids = student.map(s => s.id)
const bigger = student.filter(s => s.id > 31)
console.log(name)
console.log(ids)
console.log(bigger)
