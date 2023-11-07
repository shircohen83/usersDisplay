//import App from './components/App.js'

const gen = require('mocking_g');
gen.schemas.setPath('/home/shirco/Documents/VScode/usersDisplay/myServer/');
const library = 'examples';
const schema = 'users';
const persons = gen.generate([library,schema], 10);//umberOfEntries


console.log(persons);






//App(persons);
//http://localhost:5588/mocking_G/generate?library=examples&category=users&amount=3

