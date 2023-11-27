// js ortamında 2 tane data type var
// value type = primative type , string,number,boolean
// referance type = complex type, object, function, array, regex, class
// null, undefined
// null string ve referance type için kullanılır. Nesne referansını belirlemek için kullanılır
// undefined bir tip var. değişken tanımlaması var ama değer ataması yok.
// tüm veri tipleri var ile tanımlanır.
var a = 5; // number
var b = 'c'; // string
console.log('b', typeof b);
var c = 'ali'; // string
var k = 5.5; // number
var d = false; // boolean
var e = [1, 3, 4]; // object type
console.log('array type', typeof e);
var r = function Person(name, surname) {
	// object
	this.name = name;
	this.surname = surname;
};
console.log('function type', typeof r);
// functionların instance'ları alındığında object olarak referance veriyorlar.
var g = new r('can', 'canan'); // instance
console.log('function object type', typeof g);

var f = new RegExp(); // object
console.log('regex type', typeof f);
var employee = { id: 1, name: 'ali' }; // object
console.log('employee type', typeof employee);

var u; // bir tipe değer ataması yapılmadığında undefined olarak tanımlanıyor.
console.log('type of u', typeof u);

// artık var yerine daha kontrollü değişken tanımlama yapısı olan let,const keywordlerini kullanıyoruz.
const t = 'can'; // atama yapıldıysa alt satırlarda değişkene değer atanamaz
// t = 'hakan'; // not valid

let v = 'mustafa'; // alt satırlarda değer atama durumu varsa let yoksa const ifadesini tercih edeceğiz.
v = 'melis'; // value typlerda değer ataması yaparken tercih edilen bir tanımlama
// genel kullanım value type değişkenlerde let
// referance type değişkenlerde const ifadesi yaygın olarak kullanılır.

console.log('v', v);

// referance type ile çalışırken ise
const user = { id: 1, name: 'mustafa' };
user.name = 'kaan'; // valid
console.log('user', user);
// user = { id: 2, name: 'kaan' }; // invalid

// var kod blogu içerisinde aynı isimde değişken oluşturmamıza izin verir. let ve const aynı isimde değişken oluşturduğumuzda hata verir.

/*
var zz = 1;
const zz = 2;

if (true) {
	var zz = 2; // local variable
	console.log('zz', zz);
}

console.log('zz', zz);
*/
