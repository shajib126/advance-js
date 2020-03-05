const a = [10, 20, 30, 40]
// const result = []
// for(let i = 0; i<a.length; i++){
//     const element = a[i]
//     const output = element * element
//     result.push(output)
// }
// console.log(result)
// const result = a.map(x => x * x)
// console.log(result)
// const output = a.map(z => z * z)
// console.log(output);
const filtering = a.filter (x => x > 10)
console.log(filtering)//this is filtering
const finding = a.find(x => x > 10);
console.log(finding)