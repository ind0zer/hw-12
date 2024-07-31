let user = {
  hobby: "football",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

const aboutMe = {
  name: "Artem",
  age: 26,
  sex: "Male",
  job: "FrontEnd Developer",
};

console.log(countProps(aboutMe));

const workers = {
  Ivan: 20,
  Artem: 15,
  Afanasiy: 34,
  Alex: 86,
};

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (let key in employees) {
    if (employees[key] > maxTasks) {
      maxTasks = employees[key];
      bestEmployee = key;
    }
  }

  return bestEmployee;
}

console.log(findBestEmployee(workers));

const salary = {
  Ivan: 20000,
  Artem: 15000,
  Afanasiy: 34000,
  Alex: 86000,
};

function countTotalSalary(employees) {
  let sumSalary = 0;
  for (let key in employees) {
    sumSalary += employees[key];
  }
  return sumSalary;
}

console.log(countTotalSalary(salary));

function getAllPropValues(arr, prop) {
  const propValues = [];
  for (const obj of arr) {
    if (prop in obj) {
      propValues.push(obj[prop]);
    }
  }
  return propValues;
}

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));

function calculateTotalPrice(allProducts, productName) {
    let sumPrice = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            sumPrice = product.price * product.quantity;
            break; 
        }
    }
    return sumPrice;
}

const productsTwo = [
    { name: 'Tomato', price: 200, quantity: 10 },
    { name: 'Cucumber', price: 60, quantity: 4 },
    { name: 'Banana', price: 300, quantity: 2 }
];

console.log(calculateTotalPrice(productsTwo, 'Tomato'));
console.log(calculateTotalPrice(productsTwo, 'Cucumber'));
console.log(calculateTotalPrice(productsTwo, 'Banana'));