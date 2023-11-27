// referance type değerlerin referanslarının koparılması için bir operator, Virtual DOM üzerinden state değişimin algılayı re-render sürecini devreye sokmamız için spread operatöründen faydalanacağız.

const emp = { id: 1, name: 'ali' };
const emp2 = emp; // emp ile emp2 aynı referansa bakıyor
emp2.name = 'can';

console.log('emp', emp);
console.log('emp2', emp2);

const emp3 = { ...emp }; // referansı kopararak aktar
emp3.name = 'Hakan';

console.log('emp3', emp3);
console.log('emp', emp);

// dinamik olarak property ekleme işlemi
const emp4 = { age: 10, ...emp3 };
console.log('emp4', emp4);

// aynı zamanda spread operatörü diziler ilede kullanılır
const arr = [1, 2, 3, 4];
const arr2 = arr; // arr referansını kopar arr2 aktar
arr.push(5);

console.log('arr', arr);
console.log('arr2', arr2);

const arr3 = [...arr2];
arr3.unshift(8);
console.log('arr3', arr3, 'arr', arr);

// object array ile çalışma
const persons = [
	{ id: 1, name: 'ali' },
	{ id: 2, name: 'mustafa' },
];
const persons2 = persons;
persons2.push({ id: 3, name: 'tansu' });

// bu kod aynı referansa bakar

// referans type değerlerde bu tarz kodlamalar yerine map ifadesi kullanalım
// valuetype için aşağıdaki dizi referans güncellemesi kullanılmasında herhangi bir sorun yoktur.
const persons3 = [...persons];
persons3.push({ id: 3, name: 'hakan' });
persons3[0].name = 'jale';

// person2 referansına hakan değer eklenir mi ?
console.log('persons3', persons3);
console.log('persons', persons);

// object array ile çalışırken array içerisinde her bir item referans değerleri koparmak için map ile işlem yaparız.

const employees = [
	{ id: 1, name: 'yunus' },
	{ id: 2, name: 'gözde' },
];
// güncel dom nesneleri yada güncel referansı koparılmış obje nesneleri ile çalışma fırsatı sağlar.
const employees2 = employees.map((item) => {
	return {
		id: item.id,
		name: item.name,
	};
});

employees2.push({ id: 3, name: 'hande' });

console.log('employees-1', employees);
console.log('employees2-1', employees2);

employees[0].name = 'fatih';

console.log('employees-2', employees);
console.log('employees2-2', employees2);
