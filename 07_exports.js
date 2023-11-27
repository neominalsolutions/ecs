// 2 farklı export tipimiz var
// 1 default export
// 2 export
// Ecmascript Module standartı ile export import işlemlerini yönetiyoruz

// c# daki public keyword gibi bir kullanım
export function sum(nm1, nm2) {
	console.log('sum');
	return nm1 + nm2;
}

export function division(nm1, nm2) {
	console.log('division');
	return nm1 / nm2;
}

export class A {
	do() {
		console.log('do');
	}
}

// DateHelper ismi ile direkt olarak dışarı çıkmış oluruz.
export default class DateHelper {
	static getPrettyDate() {
		return new Date();
	}
}
