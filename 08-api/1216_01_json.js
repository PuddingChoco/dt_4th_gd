const car = `{
"model" : "IONIQ 5",
"company" : "HYUNDAI",
"year" : 2023,
"options" : ["side mirror", "smartsensor"] 
}`;

console.log(car);

const obj = JSON.parse(car);
console.log(obj);

console.log(obj.model);
console.log(obj.option);
console.log(obj.hello);

const json = JSON.stringify(obj);
console.log(json, typeof json);
