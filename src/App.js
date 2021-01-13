import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const friendsArray = ['Shohorab', 'Obydul', 'Moshsin', 'Sanuar', 'Niloy'];
	const products = [
		{
			name: 'Photoshop',
			price: 99.09,
		},
		{
			name: 'Adobe XD',
			price: 50.03,
		},
		{
			name: 'Premier Pro',
			price: 104.03,
		},
	];
	return (
		<div className="App">
			<header className="App-header">
				<Counter />

				<DynamicUser />

				<h1>This is friends List</h1>
				<ul>
					{friendsArray.map((friends) => (
						<li>{friends}</li>
					))}
				</ul>
				<h1>This is products list: </h1>

				{products.map((pd) => (
					<li>{pd.name}</li>
				))}

				<h1>This is products cart</h1>
				{products.map((pd) => (
					<Product products={pd} />
				))}
			</header>
		</div>
	);
}

function DynamicUser() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			<h1>Dyanamic User: {users.length}</h1>
			<ul>
				{users.map((users) => (
					<li>{users.name}</li>
				))}
				{users.map((users) => (
					<li>{users.phone}</li>
				))}
			</ul>
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(10);
	const handleIncrease = () => setCount(count + 1);
	const handleDecrease = () => setCount(count - 1);
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrease}>+</button>
			<button onClick={handleDecrease}>-</button>
		</div>
	);
}

function Product(props) {
	const productStyle = {
		width: '200px',
		height: '200px',
		borderRadius: '5px',
		backgroundColor: 'lightgray',
		margin: '10px',
	};
	return (
		<div style={productStyle}>
			<div>
				<h1>{props.products.name}</h1>
				<h5>{props.products.price}</h5>
				<button>Buy Now </button>
			</div>
		</div>
	);
}

export default App;
