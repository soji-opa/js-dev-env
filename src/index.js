import './index.css';

import numeral from 'numeral';

const output = document.querySelector("#output")
const courseValue = numeral(1000).format('$0,0.00');
// debugger;
output.innerHTML += (`I would pay ${courseValue} for this awesome course!`)
// console.log (`I would pay ${courseValue} for this awesome course!`)