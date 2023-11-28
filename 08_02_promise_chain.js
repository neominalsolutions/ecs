//promise işelmlerinin sıralı bir şekilde zincirlenip yönetilmesi.

function FetchAll(url1, url2, url3) {
	const myRes = {};
	// 1.sıra 1000 ms
	const fetchUsers = () => {
		return new Promise((resolve, reject) =>
			fetch(url1, { method: 'GET' }) // fetch default olarak get çalışır
				.then((res) => {
					console.log('comments sonrası', myRes['comments']);
					console.log('response', res);
					return res.json(); // json formatına dönüştürme
				})
				.then((data) => {
					console.log('users-data', data); // json formatına dönüşen datayı myRes nesnesine property olarak geçtik.
					myRes['users'] = [...data];
					resolve(myRes);
				})
		);
	};

	// 2.sıra 200ms
	const fetchComments = () => {
		return new Promise((resolve, reject) =>
			fetch(url2)
				.then((response) => {
					// üst bloklarda yapılan işlemlere ait datalar alt kod bloklarında elimizde olur.
					console.log('comments', myRes?.users?.length);
					return response.json();
				})
				.then((data) => {
					console.log('comments-data', data);
					myRes['comments'] = [...data];
					resolve(myRes);
				})
		);
	};

	// 3.sıra 300 ms
	const fetchTodos = () => {
		return new Promise((resolve, reject) =>
			fetch(url3)
				.then((response) => {
					console.log('todos', response);
					return response.json();
				})
				.then((data) => {
					console.log('todos-data', data);
					myRes['todos'] = [...data];
					resolve(myRes);
					// reject('err');
				})
		);
	};

	// 1500ms içerisinde sıralı olarak tüm operayonlar birmiş olucak.
	// promise chain yapısı
	return fetchComments().then(fetchUsers).then(fetchTodos);
}

// tek bir then catch ile kod blogunu sıralı bir şekilde yönettik.

FetchAll(
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/comments',
	'https://jsonplaceholder.typicode.com/todos'
)
	.then((response) => {
		console.log('data', response);
	})
	.catch((err) => {
		console.log('err', err);
	});
