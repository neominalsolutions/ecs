// js asenkron kod blokları ile çalışırken kullandığımız yapılar.
// apidan veri çekme işlemlerinde sıklıkla tercih ettiğimiz yapılar.
// js promise öncesi callback dediğimiz yapılar ile asenkron programlama yapıyorduk.

function onSuccess(response) {}

function OnError(error) {}

// bir function başka bir function parametre olarak geçerek o functiondan dönen sonucua göre işlem yapara biz buna callback yöntemi diyoruz.
function GetData(url, onSuccess, OnError) {}

GetData(
	'www.a.com/api/users',
	function (response) {
		// işlem başarılı ise response döner
		onSuccess(response);
	},
	function (error) {
		// başarısız ise error döner
		OnError(error);
	}
);

// promise söz vermek
// söz tutulursa resolve
// söz tutulamaıyorsa reject

// api istek atmak
// bir işlem belirli bir süre bekletme (timing işlemleri)
// dosya okuma yazma işlemleri
// js önceliği senkron kod bloklarına verir
// asnekron kodları ayrıca işleyeceği bir mekanizma vardır.

// sample
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise1');
	}, 1000); // 1000ms
});

const b = 15;
console.log('b', b);

promise1
	.then((response) => {
		// OnSuccess
		console.log(response); // resolved
	})
	.catch((err) => {
		console.log('err', err); // OnError rejected
	});

const a = 10;
console.log('a', a);

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise2');
	}, 500); // 500ms
});

promise2
	.then((response) => {
		// OnSuccess
		console.log(response); // resolved
	})
	.catch((err) => {
		console.log('err', err); // OnError rejected
	});
