const user = {
  hobby: "none",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

console.log("----------------------------------");

const countProps = (obj) => {
  const key = Object.values(obj);
  return `кількість властивостей в об'єкті: ${key.length}`;
};
console.log(countProps(user));

console.log("----------------------------------");

const employ = {
  max: 3,
  john: 22,
  andrew: 12,
  sophie: 1,
};

let sum = 0;
const findBestEmployee = (employees) => {
  const value = Object.values(employees);
  const maxValue = Math.max(...value);
  sum += maxValue;
  for (const key in employees) {
    if (employees[key] === maxValue) {
      return key;
    }
  }
};

console.log(findBestEmployee(employ, sum));

console.log("----------------------------------");

const salaries = {
  max: 12400,
  john: 11390,
  andrew: 34570,
  sophie: 60800,
};
let newSum = 0;
const countTotalSalary = (employees) => {
  const value = Object.values(employees);
  for (const values of value) {
    newSum += values;
  }
  return newSum;
};
console.log(countTotalSalary(salaries));

console.log("----------------------------------");

const friends = [
  { name: "Max", age: 32 },
  { name: "Andrew", age: 21 },
  { name: "John", age: 22 },
  { name: "Mattew", age: 20 },
];
const getAllPropValues = (arr, prop) => {
  const result = [];
  for (const item of arr) {
    if (prop in item) {
      result.push(item[prop]);
    } else {
      return "Ключа не знайдено";
    }
  }
  return result;
};
console.log(getAllPropValues(friends, "name"));

console.log("----------------------------------");

const products = [
  { name: "apple", count: 1, price: 15 },
  { name: "banana", count: 3, price: 77 },
  { name: "tomato", count: 1, price: 11 },
  { name: "corn", count: 1, price: 19 },
];
const calculateTotalPrice = (allProdcuts, productName) => {
  let sum = 0;
  for (const item of allProdcuts) {
    if (item.name === productName) {
      sum = item.price * item.count;
      return `Загальна вартість ${item.name} = ${sum}`;
    }
  }
};
console.log(calculateTotalPrice(products, "banana"));
