"use strict";


//Задание 1

let money = 700;   //“Доход за месяц”
money = prompt("Ваш месячный доход?");
// console.log(money + " $" + " Доход за месяц");
console.log(typeof money);








let income ='Курьер';       //строка с дополнительными доходом(например: фриланс),
console.log(income + ' Подработка');
console.log(typeof income);





let addExpenses = 'Такси, Проживание, Питание, Канцелярские предметы '; //строка с перечислением дополнительных расходов через запятую(например: интернет, такси, коммуналка)
		addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(typeof addExpenses);
let changeExpenses = addExpenses;
console.log( changeExpenses.toLowerCase());
console.log(addExpenses.split(', '));



// Task-4


let deposit = true;//любое булево значение,
		deposit = confirm('Есть ли у вас депозит в банке?');
// console.log(deposit);
console.log(typeof deposit);



let mission = 50000 ; //любое число(Какую сумму хотите накопить),



let period = 5;//число от 1 до 12(месяцев)

console.log( mission + ' евро, за ' + period  + ' месяцев');







// Task-5

let expenses1 = prompt('Введите обязательную статью расходов?');
console.log(expenses1);
let expenses2 = prompt('Введите обязательную статью расходов?');
console.log(expenses2);




let amount1 = +prompt('Во сколько это обойдется?');
let amount2 = +prompt('Во сколько это обойдется?');
console.log(amount1 + " Рублей", amount2 + " Рублей");


// Task-6

let budgetMonth = +prompt('Какая сумма у вас выходит в бюджете?');
console.log(budgetMonth);


// Task-7
console.log('Цель будет достигнута за ' + Math.ceil(mission/budgetMonth) + " $");


// Task-8
let budgetDay = money / 30;
console.log(budgetDay + " $");
console.log('Цель за день' + Math.floor(budgetDay) + ' $');


// Task-9

if (budgetDay >= 1200) {
	console.log("У вас высокий уровень дохода");
} else if (budgetDay > 600 && budgetDay < 1200) {
	console.log('У вас средний уровень дохода');
} else if (budgetDay) {
	console.log('К сожалению у вас уровень дохода ниже среднего');
}	else if (budgetDay ===0 || budgetDay < 0) {
	console.log('Что то пошло не так');
}