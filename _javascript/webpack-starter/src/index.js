import {v4 as uuidv4 } from 'uuid';
import generateJoke from "./generateJoke";

import './styles/main.scss';
import logo from './assets/logo.png';

const logoImg = document.getElementById('logo');
logoImg.src = logo;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)

console.log(generateJoke());
console.log(uuidv4());