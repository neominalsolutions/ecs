// js deki array yapısı hetorojen bir yapıya sahiptir.
// int[] numbers = new int[5];  c# java typesafe diller arraylar çalışırken aynı tipte değerleri dizi içerisinde tanımlamaya izin verir.
// js de arraylare bir kapasite sınır belirtmenize gerek yok, 5 elemanlı bir dizi olsun demek zorunda kalmıyoruz.
// js dizi yapısı c# dizi yapının dışında collection yapılarına ait özelliklerde gösterir.
const arr = [{ id: 1, name: 'ali' }, true, 1, 3.4, 'yunus'];
console.log('arr', arr);
// arr[3] = 6;

arr.push(8); // sonuna ekle
arr.unshift(10); // en başa ekle
arr.splice(1, 1); // id:1, name:'ali' değeri silinecek. 1 indeksten 1 tane sil
arr.shift(); // ilk değeri çıkar
arr.pop(); // son değeri çıkar

// Ecmascripte diziler ile çalışırken artık spread operatörü ile diziye eleman ekleme işlemlerini push,unshift işlemlerini yapabiliyoruz.

// react aktif bir şekilde kullanacağız.
// spread operatörü dizi ve object tipleri için kullanılır. bir object yada dizinin değerlerini referansını kopararak almanızı sağlar.
const arr2 = [5, 6, ...arr, 7, 10]; // arr concat işlemini tek satırda yapmış olduk
const arr3 = [];
arr3.unshift(5);
arr3.concat(arr2);
arr3.push(10);

// diziden eleman çıkarmak içinde filter lamda function yapısını kullanıyoruz.

console.log('arr2', arr2);

// dizi içerisinde filtreleme yapma mekanizması ecmascript ile geldi.
const filteredArray = arr2.filter((x) => x > 6);
console.log('filteredArray', filteredArray);

// === değer ve tip olarak eşitlik anlamına gelir.
// == sadece değer eşitliğine bakar.
const findValue = arr2.find((x) => x === 7);
console.log('findValue', findValue);

const kl = 5;
const jj = '5';

if (kl == jj) {
	console.log('kk jj değer olarak eşit');
}

if (kl === jj) {
	console.log('kl jj değer ve tip olarak eşit');
} else {
	console.log('tip eşitliği yok');
}

// map ile dizi referansını değiştirip dizi içerisinde veride manupulation yapıp yep yeni bir dizi değeri oluşturabilir.
// dizinin referans değerleri koparıp farklı bir referans ile devam etmek için map yaygın bir kullanıma sahiptir. diğer kullanım dto gibi çalışır. mapping işlemi için kullanılır.
const persons = ['ali', 'hakan', 'can'];
const persons2 = persons.map((item) => {
	return item.toUpperCase();
});

if (persons === persons2) {
	console.log('referance olarak eşit mi');
} else {
	console.log('referanse equal yok');
}

persons2[0] = 'Jale';
console.log('persons2', persons2);
console.log('persons', persons);
