let user = {
  hobby: "football",
  premium: true,
};

const { hobby, premium } = user;
console.log(hobby, premium);

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

const { name, age, sex, job } = aboutMe;
console.log(name, age, sex, job);
console.log(countProps(aboutMe));

const workers = {
  Dima: 20,
  Levan: 15,
  Oleg: 34,
  Dime: 86,
};

const { Dima, Levan, Oleg, Dime } = workers;
console.log(Dima, Levan, Oleg, Dime);

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

const { Ivan, Artem, Afanasiy, Alex } = salary;
console.log(Ivan, Artem, Afanasiy, Alex);

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

// const {name, price, quantity} = products;
console.log("name, price, quantity", "tut nemozhna((");

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
  { name: "Tomato", price: 200, quantity: 10 },
  { name: "Cucumber", price: 60, quantity: 4 },
  { name: "Banana", price: 300, quantity: 2 },
];

console.log(calculateTotalPrice(productsTwo, "Tomato"));
console.log(calculateTotalPrice(productsTwo, "Cucumber"));
console.log(calculateTotalPrice(productsTwo, "Banana"));

const { price, quantity } = productsTwo[0]; // name already used
console.log(price, quantity);

//  7

const bankAccount = {
  login: "indozer",
  balance: 1000,
  transactionHistoryArray: [],

  withdraw: function () {
    const withdrawInput = prompt("Введіть суму зняття:");

    if (
      withdrawInput === null ||
      withdrawInput === "" ||
      isNaN(withdrawInput)
    ) {
      alert("Введено некоректну суму. Операція скасована.");
      return;
    }

    const promptWithdraw = Number(withdrawInput);

    if (this.balance < promptWithdraw) {
      alert("На балансі недостатньо коштів для зняття");
    } else {
      this.balance -= promptWithdraw;
      this.transactionHistoryArray.push({
        type: "зняття",
        amount: `${promptWithdraw} Гривні`,
      });
      alert(`Успішне зняття! Залишок на рахунку: ${this.balance}`);
      bankMenu();
    }
  },

  deposit: function () {
    const depositInput = prompt("Введіть суму депозиту:");

    if (depositInput === null || depositInput === "" || isNaN(depositInput)) {
      alert("Введено некоректну суму. Операція скасована.");
      return;
    }

    const promptDeposit = Number(depositInput);

    if (promptDeposit <= 0) {
      alert("Сума депозиту має бути більше нуля.");
      return;
    }

    this.balance += promptDeposit;
    this.transactionHistoryArray.push({
      type: "депозит",
      amount: `${promptDeposit} Гривні`,
    });

    alert(`Успішний депозит! Ваш баланс: ${this.balance}`);
    bankMenu();
  },

  transactionHistory: function () {
    if (this.transactionHistoryArray.length === 0) {
      alert("Історія транзакцій порожня.");
      return;
    }

    let history = "Історія транзакцій:\n";
    for (let i = 0; i < this.transactionHistoryArray.length; i++) {
      const transaction = this.transactionHistoryArray[i];
      history += `${i + 1} - ${transaction.type.toUpperCase()}: ${
        transaction.amount
      }\n`;
    }

    alert(history);
    bankMenu();
  },
};

function bankMenu() {
  const bankPrompt = Number(
    prompt(
      `Ваш логін: ${bankAccount.login}\nВаш баланс: ${bankAccount.balance}\nЩоб зняти кошти введіть 1\nЩоб поповнити введіть 2\nЩоб подивитись історію транзакцій введіть 3`
    )
  );

  if (bankPrompt === 1) {
    bankAccount.withdraw();
  } else if (bankPrompt === 2) {
    bankAccount.deposit();
  } else if (bankPrompt === 3) {
    bankAccount.transactionHistory();
  } else {
    alert("Помилка! Спробуйте ще раз.");
    bankMenu();
  }
}

bankMenu();
