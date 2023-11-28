function GetData1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('promise1');
		}, 500);
	});
}

function GetData2(param) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('param', param);
			reject('promise2');
		}, 1000);
	});
}

// promise1 ile promise2 sıralı çalıştırmak istiyorum. Promise1 sonucunu promise 2 kullanacağım
// GetData2 function param değerini GetData1 den alır
// iç içe çalıştırma yöntemi
// 3 asekron ifadeye kadar kullanalabilir. 3 den fazla asekron kod blogunu yönetmek için kod okurnurluğu ve yönetimi düşer.
// sıralı çalıştırma
// dezavantajlarından birisi herbir promise hatasını developer yönetmek durumda kalıyor
console.time('asyncOrdered');
GetData1()
	.then((response) => {
		GetData2(response)
			.then((res) => {
				console.timeEnd('asyncOrdered');
				console.log('Ordered Promise Result', res);
			})
			.catch((err) => {
				console.log('GetData2 Err', err);
			});
	})
	.catch((err) => {
		console.log('GetData1 err', err);
	});

// paralel çalıştırma
GetData1().then((response) => {
	console.log('getData1', response);
});

GetData2('deneme').then((response) => {
	console.log('getData2', response);
});

// 2.yöntem Promise All
// Promise All içerisine tanımlanan promiselerin resolve olana kadar bekler
// birbilerini geçme için birbilerini bekleme durumları yoksa aynı anda tek bir sonuç döndürmek istersek tercih edilebilir.
Promise.all([GetData1(), GetData2('deneme2')])
	.then((response) => {
		console.log('response', response); // sonuc dizi olarak verilir.
	})
	.catch((err) => {}); // promise.all promiselerden birinde hata varsa sonucu döndürmez işlem reject ile sonuçlanır. Transaction yönetimine benzetebiliz.
