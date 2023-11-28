// ES7 ile gelen async await

const promise1 = new Promise((resolve, reject) => {
	resolve(5);
});

//1.yöntem
async function getData() {
	try {
		const data = await promise1;
		console.log('data', data);
	} catch (error) {
		console.log('error', error);
	}
}

getData();

const getUsers = async () => {
	try {
		// 1.işlem 100 ms
		console.time('userStart');
		let response = await fetch('https://jsonplaceholder.typicode.com/users');
		let data = await response.json();
		// console.log('users', data);
		// 2.işlem 500 ms
		const response2 = await fetch(
			'https://jsonplaceholder.typicode.com/comments'
		);
		let cData = await response2.json();
		console.log('comments', data);
		console.timeEnd('userStart');
	} catch (error) {}
	// 600 ms
};

getUsers();
