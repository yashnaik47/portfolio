import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />,document.getElementById('root'));

// class Animal {

// 	constructor(name,age){
// 		this.name = name;
// 		this.age = age;
// 	}

// 	speak(){
// 		console.log(`My name is ${this.name} and my age is ${this.age}`);
// 	}
// }

// const a1 = new Animal("Simba",3);
// a1.speak();

// console.log(a1);

// class Lion extends Animal{
// 	constructor(name, age, color, speed){
// 		super(name,age);
// 		this.color = color;
// 		this.speed = speed;
// 	}

// 	roar(){
// 		console.log(`ROAR. My color is ${this.color} and my speed is ${this.speed}`);
// 	}
// }

// let l1 = new Lion("Mufasa", 20, "golden", 22);
// 	l1.speak();
// 	l1.roar();
