"use strict";



let money = +prompt('Ваш доход?', 700),
		income = 'Курьер',      //строка с дополнительными доходом(например: фриланс),
		addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
		deposit = confirm('Есть ли у вас депозит в банке?'),
		changeExpenses = addExpenses,
		mission = 50000, //любое число(Какую сумму хотите накопить),
		expenses1 = prompt('Введите обязательную статью расходов?'),
		expenses2 = prompt('Введите обязательную статью расходов?'),
		amount1 = +prompt('Во сколько это обойдется?'),
		amount2 = +prompt('Во сколько это обойдется?'),
		period = 5,//число от 1 до 12(месяцев)
		budgetMonth = amount1 + amount2,
		budgetDay = budgetMonth / 30;



console.log(typeof money);
console.log(typeof income);
console.log(addExpenses.length);
console.log(typeof deposit);
console.log(period + " месяцев");
console.log("Бюджет " + budgetMonth + " за месяц");
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + "  месяцев(ца)");
console.log('Цель за день ' + Math.floor(budgetDay) + ' $');



if (budgetDay >= 1200) {
	console.log("У вас высокий уровень дохода");
} else if (budgetDay > 600 && budgetDay < 1200) {
	console.log('У вас средний уровень дохода');
} else if (budgetDay) {
	console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay === 0 || budgetDay < 0) {
	console.log('Что то пошло не так');
}