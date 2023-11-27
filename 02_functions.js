// js ortamında function yapıları class olmadan tanımlanabilir. bu sebeple js functional programlamayı destekler.

// tip tanımlı bir dil olmaması sebebi ile function içindeki parametreler any tipinde tanımlanır
// js type safe bir dil değil
function sum(number1, number2) {
	return number1 + number2;
}

function sum(number1, number2, number3 = 0) {
	return (number1 + number2 + number3) / 3;
}

const oo = sum(3, 5);
console.log('oo', oo);

const b = sum('4', '5'); // 45
const k = sum(); // isNaN not a number
const s = sum(4); // isNaN
const g = sum(4, 5); // valid
const h = sum('4', 5); // 45

console.log('b', b, 'k', k, 's', s, 'g', g, 'h', h);

// default function
function sum1(number1, number2) {
	// değer ataması yapılmadığı case
	if (number1 == undefined) {
		number1 = 0;
	}

	if (number2 == undefined) {
		number2 = 0;
	}

	// string type olduğu case
	if (typeof number1 === 'string') {
		number1 = Number(number1);

		if (isNaN(number1)) {
			console.log('number1', number1);
			number1 = 0;
		}
	}

	if (typeof number2 === 'string') {
		number2 = Number(number2);
		console.log('number2', number2);
		if (isNaN(number2)) {
			console.log('number2', number2);
			number2 = 0;
		}
	}

	// numeric olmadığı case
	if (typeof number1 !== 'number') {
		number1 = 0;
	}

	if (typeof number2 !== 'number') {
		number2 = 0;
	}
	console.log('number1', number1, 'number2', number2);

	return number1 + number2;
}

//const j = sum1('ali', 'hakan');
//console.log('j', j); // 0
//const h1 = sum1(); // 0
//const h2 = sum1(5, '4'); // 9
const h3 = sum1('6', '7'); // 13
//const h4 = sum1(6, 6); // 12
//console.log('j', j, 'h1', h1, 'h2', h2, 'h3', h3, 'h4', h4);

// escmascript ile birlikte artık arrow function ifadeleri ile de çalışabiliyoruz
// arrow function, Function componentlerde eventleri function bağlarken bu yazım formatını tercih edeceğiz.
// default function tanımlaması ise component tanımlama işlemlerinde kullanacağız.
const sum2 = (nm1, nm2) => nm1 + nm2;
const sum3 = (nm1 = 0, nm2 = 0) => {
	// ecmascript ile birlikte default parametre özelliği geldi. bu sayede fonkisyona gönderilen değerleri varsayılan değeri artık tanımlanabilir.
	return nm1 + nm2;
};

const l = sum3(8, 9); // 8,9 => 17
const y = sum3(); // 0,0 => 0
const z = sum3(10); // 10,0 => 10

console.log('l', l, 'y', y, 'z', z);

const showMessage = (message = 'message') => {
	alert(message);
};

showMessage();

// rest operatör desteği
// c# params ile sonsuz parametre geçişi
// js collection yapısı yoktur. array yapısı var.
const average = (...params) => {
	// c# params int[] şeklinde tanımlanır.
	let total = 0;

	params.forEach((param) => (total += param));

	return Number(total / params.length);
};

const p1 = average(3, 4, 6, 8, 9, 1, 12); // sonsuz parametre geçişi
console.log('p1', p1);

// method overload yapısı js de yok
// JS function overload mekanizması yok. TS de de yok
// const average = (n1, n2) => {
// 	return (n1 + n2) / 2;
// };
