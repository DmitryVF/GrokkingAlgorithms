



let array = [5, 6, 7];

recursSum = (arr) => {

	return arr.length == 1 ? arr[0] : arr.pop() + recursSum(arr);
}

console.log(recursSum(array));


//Additional recursion example:
//Calculate the average salay
let comp = {
	sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
	development: {
		sites: [{ name: 'Pieter', salary: 2000 }],
		internals: [{ name: 'Jack', salary: 500 }, { name: 'Jane', salary: 300 }]
	}
}

let res = 0, n = 0;
const aver = (dump) => {

	for (let item of Object.values(dump)) {
		if (Array.isArray(item)) {
			//base case of recursion

			let resArr = item.reduce((prev, itemi) => { console.log(`n,itmi=${n},${itemi.salary}`); return ([prev[0] + itemi.salary, prev[1] + 1]) }, [0, 0]);
			res += resArr[0];
			n += resArr[1];

		} else {
			aver(item);

		}

	}
	return res / n;
	console.log(n);
}

console.log(aver(comp));

//Array.isArray()
//Object.values()



array = [1, 2, 4, 5, 7, 9, 12, 15, 16, 22];


const arrLength = (arr) => {
	if (arr.pop() == undefined) {
		return 0
	}
	else {
		//we've already done arr.pop() in the if case so arr has already been popped...
		//console.log(arr);
		return 1 + arrLength(arr);
	}
}
console.log("arrLength = ", arrLength(array));



//binary search
array = [1, 2, 4, 5, 7, 9, 12, 15, 16, 22];

const binSearch = (val, arr) => {
	let low = 0;
	let high = arr.length - 1;

	//console.log("arr=", arr);
	while (low <= high) {
		console.log('low=', low, ' high=', high)
		let mid = low + Math.floor((high - low) / 2);

		if (val == arr[mid]) { return mid }
		else if (low == high) { return null }
		else {
			if (val < arr[mid]) { high = mid - 1 } else {
				low = mid + 1;
			};
		}
	}
}

console.log("binSearched: " + binSearch(12, array));




const simpleSort = (arr) => {

	if (arr.length == 0) { //base case

		return [];
	} else {
		let m = arr.reduce((min, item, i) =>
			(min = min[0] <= item ? min : [item, i])
			, [arr[0], 0]); //find min and it's index

		arr.splice(m[1], 1);
		//console.log('arr=' ,arr);
		return [].concat(m[0], simpleSort(arr));
	}
}

console.log(simpleSort([1, 3, 2, 536, -1]));



const quiqSort = (arr) => {

	if (arr.length <= 1) { //base case
		return arr;
	} else
		if (arr.length == 2) { //base case
			if (arr[0] <= arr[1]) return arr;
			if (arr[0] > arr[1]) return [arr[1], arr[0]];
		}
		else {
			let left = [], right = [], pivot;

			pivot = arr.pop();

			arr.forEach((item) => {
				if (item <= pivot) { left.push(item) };
				if (item > pivot) { right.push(item) };
			})
			return [].concat(quiqSort(left), pivot, quiqSort(right));

		};
}

console.log(quiqSort([1, 3, 2, 536, -1]));



const someHash = (arr) => {
	const hashLength = 10;
	const alphabetStr = 'acbdefjhijklmnopqrstuvwxyz';
	const alphabet = alphabetStr.split('');
	//console.log(alphabet[2]);

	return arr.map(str =>
		str.split('').reduce((res, cha) => (res += alphabet.indexOf(cha)), 0) % hashLength
	)
}
console.log(someHash(['Esther', 'Ben', 'Bob', 'Dan']));
console.log(someHash(['A', 'AA', 'AAA', 'AAAA']));
console.log(someHash(['Maus', 'Fun', 'Home', 'Watchmen']));


class LinkedList {

	constructor() {
		this.head = null;
		this.tail = null;

	}

	append(value) {
		//                 val:   next:
		let listItem = [value, null];
		//  prev's next: 

		if (this.tail) {
			this.tail[1] = listItem;
			this.tail = listItem;
		} else {
			this.tail = listItem;
		};

		this.head = this.head ? this.head : this.tail;

	}

	prepend(value) {
		//                   val:   next:
		let listItem = [value, this.head];

		this.head = listItem;

		this.tail = this.tail ? this.tail : this.head;
	}

	shift() {
		if (this.head) {
			let result = this.head[0];
			this.head = this.head[1];
			return result;
		} else {
			return null;
		}

	}

	print() {
		let next = this.head;
		console.log(next);
		while (next) {
			console.log(next[0]);
			next = next[1];
		}

	}
	isEmpty() {
		if (this.head) {
			return false;
		}
		else {
			return true;
		}
	}

	load(arr) {
		arr.forEach((item) => {
			this.append(item);
		})
	}

}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(4);
list.prepend(5);
list.prepend(6);
list.print();
console.log("shifted=", list.shift());
list.print();


let orig = [1, 2];
let link = orig;
console.log('orig = ', orig);
console.log('link = ', link);
link[1] = 5;
console.log('orig = ', orig);
console.log('link = ', link);
link.push(7);
console.log('orig = ', orig);
console.log('link = ', link);
link = [7, 7, 7];
console.log('orig = ', orig);
console.log('link = ', link);
link = 5;
console.log('orig = ', orig);
console.log('link = ', link);



// BFS:
const graph = {
	'you': ['alice', 'bob', 'claire'],
	'bob': ['anuj', 'peggy'],
	'alice': ['peggy'],
	'claire': ['tom', 'jonny'],
	'anuj': [],
	'peggy': [],
	'tom': [],
	'jonny': []
};

const mango_seller_db = ['tom'];
const searched = [];

console.log(graph.you);
console.log(mango_seller_db.includes('tom'));

const que = new LinkedList();

que.load(graph.you);

while (que.isEmpty() == false) {
	let item = que.shift();
	if (searched.includes(item)) {
		continue;
	}
	else {
		searched.push(item);
	}
	if (mango_seller_db.includes(item)) {
		console.log('result:', item);
		break;
	}
	else {
		que.load(graph[item]);
	};
}


// Dijkstra routine

const graph1 = {
	start: { A: 6, B: 2 },
	A: { fin: 1 },
	B: { A: 3, fin: 5 },
	fin: {}

}

//total known lowest cost from the start to the node
const costs = {
	A: 6,
	B: 2,
	fin: Infinity
}

//parent for the node, represents the lowest price route
const parent = {
	A: 'start',
	B: 'start',
	fin: Infinity

}


//const Dijkstra = (graph1, costs, parent) => {
const Dijkstra = (graph1) => {
	const processed = [];
	const costs = {};
	const parent = {};

	//init costs 
	for (item in graph1.start) {
		costs[item] = graph1.start[item];
	}

	//init parent 
	for (item in graph1.start) {
		parent[item] = 'start';
	}

	const find_lowest_cost_node = (costs) => {
		let lowest = Infinity;
		let lowest_cost_node = null;
		for (let item in costs) {
			if ((costs[item] < lowest) && (processed.includes(item) == false)) {
				lowest = costs[item];
				lowest_cost_node = item;
			}
		}
		return lowest_cost_node;
	}
	//console.log('lowest_cost_node: ', find_lowest_cost_node(costs));

	// find the lowest that hasn't been processed yet
	let node = find_lowest_cost_node(costs);

	while (node) {
		let neighbors = graph1[node];
		for (let neighbor in neighbors) {
			//if we find a chiper route for neighbors trough the current node:
			if (costs[neighbor]) {

				if (costs[node] + neighbors[neighbor] < costs[neighbor]) {
					costs[neighbor] = costs[node] + neighbors[neighbor];
					parent[neighbor] = node;
				}
			}
			else {
				costs[neighbor] = costs[node] + neighbors[neighbor];
				parent[neighbor] = node;
			}


		}
		processed.push(node);
		node = find_lowest_cost_node(costs);

	}
	console.log("costs.fin=", costs.fin);
	let route = ['fin'];
	let point = parent.fin;

	while (point in parent) {
		route.push(point);
		point = parent[point];
	}
	route.push('start');
	route.reverse();
	console.log(route);
}
Dijkstra(graph1);//, costs, parent);

const graphA = {
	start: { A: 5, B: 2 },
	A: { C: 4, D: 2 },
	B: { A: 8, D: 7 },
	C: { fin: 3, D: 6 },
	D: { fin: 1 }
}

const costsA = {
	//		A: 5,
	//		B: 2,
	//		fin: Infinity 
}

const parentA = {
	//		A: 'start',
	//		B: 'start',
	//		fin: Infinity
}

Dijkstra(graphA)//, costsA, parentA);

const graphB = {
	start: { A: 10 },
	A: { C: 20 },
	B: { A: 1 },
	C: { B: 1, fin: 30 }
}

Dijkstra(graphB)

const graphC = {
	start: { A: 2, B: 2 },
	A: { B: 2 },
	B: { fin: 2, C: 2 },
	C: { A: -1, fin: 2 }
}

Dijkstra(graphC)



//Greedy

// to be covered:
const states_needed = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);


const stations = {
	"kone": new Set(["id", "nv", "ut"]),
	"ktwo": new Set(["wa", "id", "mt"]),
	"kthree": new Set(["or", "nv", "ca"]),
	"kfour": new Set(["nv", "ut"]),
	"kfive": new Set(["ca", "az"])
}

const AND = (A, B) => {
	const res = new Set();
	for (let item of A) {
		if (B.has(item)) { res.add(item) }
	}
	return res;
}

const OR = (A, B) => {
	const res = new Set(B);
	for (let item of A) {
		res.add(item)
	}
	return res;
}



const DIFF = (A, B) => {
	const res = new Set();
	for (let item of A) {
		if (B.has(item) == false) { res.add(item) }
	}
	return res;
}




let final_stations = new Set(); //have the best coverage



let states_covered = new Set(); // set of still uncovered states that can be covered by the particulaly station

let states_uncovered = DIFF(states_needed, states_covered);

while (states_uncovered.size > 0) {

	let best_station = new Set(); // current best station for the particulaly iteration	

	for (let station in stations) {
		let intersection = AND(stations[station], states_uncovered);
		if (intersection.size > best_station.size) {
			best_station = stations[station];
		}
	}

	final_stations = OR(final_stations, best_station);
	states_covered = OR(states_covered, best_station);
	states_uncovered = DIFF(states_needed, states_covered);
	console.log('covered= ', states_covered);
	console.log('uncovered= ', states_uncovered);
}
console.log(final_stations);



//closure:

function logPerson() {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
};

const person1 = { name: 'Mikhail', age: 22, job: 'Programmer' };

const bind = (context, func) => {
	func.apply(context, []);
}

bind(person1, logPerson);


//dynamic prog

const items = [

	['guitar', { 'mass': 1, 'value': 1500 }],
	['stereo', { 'mass': 4, 'value': 3000 }],
	['laptop', { 'mass': 3, 'value': 2000 }],
	['iphone', { 'mass': 1, 'value': 2000 }],
	['jewelry', { 'mass': 0.5, 'value': 1000 }],

]


const targetMass = 4;



const DP = (items, targetMass) => {



	const itemsArr = items;// Object.entries(items);

	console.log('itemsArr=', itemsArr);

	const minMassItemArr = itemsArr.reduce((min, item, i) => (
		max = min[1].mass < item[1].mass ? min : item));

	const minMass = minMassItemArr[1].mass;

	const n = Math.floor(targetMass / minMass);

	console.log('minMass=', minMass);

	const cell = [];

	cell0 = {
		items: [],
		mass: 0,
		value: 0
	}

	for (let i = 0; i < itemsArr.length; i++) { //lines(items)

		//for ( let item of itemsArr ) {
		cell[i] = [];
		for (let j = 0; j < n; j++) {

			let prevMax = i == 0 ? cell0 : cell[i - 1][j];

			let cellWeight = (j + 1) * minMass;
			let remainder = cellWeight - itemsArr[i][1].mass;

			if (remainder < 0) { //doesn't fit 
				cell[i][j] = prevMax;
			}
			else { // current_item + remainder
				cell[i][j] = { //add current item
					items: [itemsArr[i][0]],
					mass: itemsArr[i][1].mass,
					value: itemsArr[i][1].value
				}

				//find r column(in j) with max weight, but less then remainder:
				let r = Math.floor(remainder / minMass);

				if (r > 0 & i > 0) { // something is fit to remainder

					// find max value in r-column

					let remItem = cell[i - 1][0];
					//console.log('remItem=', remItem);


					for (k = 0; k < r; k++) {

						if (cell[i - 1][k].value > remItem.value) {
							remItem = cell[i - 1][k];
						}


					}



					// add remainder to current cell
					cell[i][j].items = cell[i][j].items.concat(remItem.items);
					cell[i][j].mass = cell[i][j].mass + remItem.mass;
					cell[i][j].value = cell[i][j].value + remItem.value;

				}

				if (cell[i][j].value <= prevMax.value) { cell[i][j] = prevMax };
			}
		}

	}
	console.log('cell:', cell);
	return (cell[itemsArr.length - 1][n - 1]);



}
let result = DP(items, targetMass);

console.log('result = ', result);



const sights = [

	['abbat', { 'mass': 0.5, 'value': 7 }],
	['theat', { 'mass': 0.5, 'value': 6 }],
	['galery', { 'mass': 1, 'value': 9 }],
	['museum', { 'mass': 2, 'value': 9 }],
	['cathedral', { 'mass': 0.5, 'value': 8 }],

]


const days = 2;


let route = DP(sights, days);

console.log('route = ', route);



//levenshtein distance


const Levensh = (str1, str2) => {
	colums = str1.split('');
	rows = str2.split('');

	const cell = [];

	const length = Math.min(colums.length, rows.length);

	for (let i = 0; i < length; i++) {
		cell[i] = [];
		for (let j = 0; j < length; j++) {
			if (str1[i] == str2[j]) {
				if (i == 0 || j == 0) { cell[i][j] = 1 }
				else { cell[i][j] = cell[i - 1][j - 1] + 1 };
			}
			else {
				if (i == 0 && j == 0) { cell[i][j] = 0 }
				else if (i == 0) { cell[i][j] = cell[i][j - 1] }
				else if (j == 0) { cell[i][j] = cell[i - 1][j] }
				else { cell[i][j] = Math.max(cell[i - 1][j], cell[i][j - 1]) };
			}
		}
	}
	//console.log('cell:', cell);
	console.log(`Levenshtein length between \'${str1}\' and \'${str2}\' is ${cell[length - 1][length - 1]}`);
	return (cell[length - 1][length - 1])
}

Levensh('fosh', 'fish');
Levensh('blue', 'clues');


//k-mean
//classification: measure the distance between unclassified item and known items. Find the common type that the magority of neghbours have. Assign this type to the unclassified item. 
const vectors = [
	{
		type: 'or',
		feat: [14, 2],
	},
	{
		type: 'or',
		feat: [9, 1],
	},
	{
		type: 'or',
		feat: [10, 1],
	},
	{
		type: 'or',
		feat: [9.5, 1],
	},
	{
		type: 'gr',
		feat: [15, 2],
	},
	{
		type: 'gr',
		feat: [16, 2],
	},
	{
		type: 'gr',
		feat: [16, 2],
	},
	{
		type: 'gr',
		feat: [18, 2],
	}
];

const unkn = {
	type: 'unkn',
	feat: [14, 2],

}

const classify = (unkn, arr) => {

	const lengthes = arr.map((item) => {
		let distance = Math.sqrt(

			item.feat.reduce((result, feati, i) =>
				result + (feati - unkn.feat[i]) ** 2, 0)
		)

		return ({ distance, type: item.type })
	}
	);

	//console.log('lengthes = ', lengthes);

	const k = Math.round(Math.sqrt(lengthes.length)); // k for k-mean
	console.log('k = ', k);
	const neighbours = lengthes.sort((a, b) => a.distance - b.distance).slice(0, k); //returns cutted k lengthes

	// returns array of k nearlest neghbours

	console.log('neighbours = ', neighbours);

	const neighbourTable = {};
	while (neighbours.length) {
		//naive method of classify:  
		let { type, distance } = neighbours.pop();
		//grouping neighbours by type, don't consider the distances between
		if (neighbourTable[type]) {
			neighbourTable[type]++
		} else {
			neighbourTable[type] = 1;
		}
	}

	console.log('neighbourTable=', neighbourTable);

	const classifiedType = Object.entries(neighbourTable).reduce((max, val) => max = max[1] >= val[1] ? max : val, ['', 0]);
	console.log('classifiedType=', classifiedType);
	return (classifiedType);
}
classify(unkn, vectors);



// Recommendation system:
// find the nearlest neghbour and use it's votes to recommend
const vecs = [

	{
		type: 'jast',
		feat: [4, 3, 5, 1, 5], //video preferences
	},
	{
		type: 'morp',
		feat: [2, 5, 1, 3, 1],
	},

];

const unkn2 = {
	type: 'pri',
	feat: [3, 4, 4, 1, 4],
};

classify(unkn2, vecs);
//now we can recommed to 'pri' the same what the nealest neighbour liked  



//regression
// use average k-neigbours' votes to predict vote
// K-neghbours' votes:
const neghboursVotes = [
	{ type: 'jast', vote: 5 },
	{ type: 'jc', vote: 4 },
	{ type: 'jos', vote: 4 },
	{ type: 'lanc', vote: 5 },
	{ type: 'chri', vote: 3 },

]

const regression = (votes) => {
	const sum = votes.reduce((sum, nb) => sum += nb.vote, 0);
	const predictedVote = Math.round(sum / votes.length);
	console.log('predictedVote =', predictedVote);
	return predictedVote;
}
regression(neghboursVotes);











