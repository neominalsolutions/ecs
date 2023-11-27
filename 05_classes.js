// Default js Function Class yönetmi ile geliyor
// ES5 formatında tanımlanır

function Sum() {}

// Function Component kullanımına örnek
// Function Contstructor Yöntemi en yaygın ES6 instance alma yöntemi
function User(name, surname) {
    // this keyword ile property public olur
	this.name = name;
	this.surname = surname; // property
	this.age = 0;
	this.getFullName = function () {
		// es5 method
		return this.name + '' + this.surname;
	};

	this.setAge = function (value) {
		// setter
		this.age = value;
	};

	this.getAge = function () {
		return this.age;
	};
}

const usr = new User('ali', 'can');
Object.defineProperty(usr, 'birthDate', {
	enumerable: true, // objenin içindeki property değerlerini forin ile okumaya açma
	configurable: true, // read edilebilir
	writable: true, // set edilebilir
	value: 'static',
});

// property değerini objeden silme
delete usr.name;

// dışarıdan User sınıfa bir function extend etme
// C# extension methods
User.prototype.getIdentityNumber = function () {
	return '2342143243';
};

usr.setAge(15);
const age = usr.getAge();
console.log('age', age);
usr.birthDate = new Date(); // setter
console.log('usr', usr);
usr.getIdentityNumber();

// ES6 ile birlikte OOP dillerdeki class yapısını getirelim. React ES6 standartları js projeleri yazmayı destekliyor. React ES6 kodunu alıp ES5 formatına dönüştürür. Babel paketi yapar. Transpiler

class MyUser {
	// private,protected,public keywordleri ecmascrip class formtında yok
	// js de #ifadesi ile değişken değerleri private çekilir.
	#name;
	#surname;
	age;

	// A class may only have one constructor
	// classlarda sadece tek bir contructor değer tanımı yapılabilir
	// constructor(){

	// }

	constructor(name, surname) {
		this.#name = name;
		this.#surname = surname;
	}

	// default public olarak tanımlanır
	get Age() {
		return age;
	}

	set Age(age) {
		this.age = age;
	}

    // method
	Do() {
		console.log('MyUser Do');
	}
}

const usr2 = new MyUser('ali', 'tan');
usr2.Age = 15;
console.log('usr2', usr2);
console.log('class-age', usr2.Age);

// ES6 Inheritance
class MyEmployee extends MyUser {
	#socialNumber;
	constructor(name, surname, socialNumber) {
		// super c#daki base kodu ile aynı özellikte
		super(name, surname);
		this.#socialNumber = socialNumber;
		// this keyword ile contructor üzerinden gelen değerler superdan sonra çağırılmalıdır. TS de geçerli.
	}

	// C# Contructor base class
	// public MyEmployee(string name, string surname):base( name,surname)
	// {

	// }

	Do() {
		// super keyword base sınıfa erişim sağlar.
		// base.Do();
		super.Do(); // base Do methodu çalışsın

		console.log('MyEmployee Do');
	}
}

const empl = new MyEmployee('Mustafa', 'Can');
empl.Do();
// js de kalıtım alınan sınıftaki method ile base sınıftaki method aynı isimdeyse o zaman inherit olan sınıfın methodu çalışır.

// ES5 sonrasında Class dışında aşağıdaki yapılar yoktur
// 1.Interface, 2. Generic Class, 3. Collections, 4. Abstract Class yoktur.  5. virtaul keyword abstract keyword yok
