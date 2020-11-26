const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');
const app = express();

//CONTINUE FROM 1:54

//READING A FILE WITH EXPRESS
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	//READING A FILE WITH EXPRESS
	res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

app.post('/', (req, res) => {
	console.log(req.body);
	const schema = joi.object().keys({
		username: joi.string().trim().required(),
		password: joi.string().min(5).max(10).required()
	});

	const result = schema.validate(req.body);
	if (result.error){
		console.log(result.error.message)
		res.send(result.error.message)
	}
	//console.log(result);
	res.send('Successfully got data');
	
	
	/*
	joi.validate(req.body, schema, (err, result) => {
		if (err) {
			res.send('an error has occured');
		}
		console.log(result);
		res.send('Successfully got data');
	});
	*/

	//DATABASE WORK HERE
	//res.send('Successfully got data');
	//res.json({ success: true, 'message': 'Thanks for try nodejs' });
});


app.get('/example', (req, res) => {
	res.send('hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
	console.log(req.params);
	console.log(req.query);
	res.send("My Name is: " + req.params.name + " and am " + req.params.age + " years old");
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');















/*
const http =require('http');
http.createServer((req, res) => {
	if (req.url === '/') {
		const readStream = fs.createReadStream('./static/example.html');
		res.writeHead(200, { 'Content-type': 'text/html' });
		readStream.pipe(res);
	}
	if (req.url === '/json') {
		const readStream = fs.createReadStream('./static/example.json');
		res.writeHead(200, { 'Content-type': 'application/json' });
		readStream.pipe(res);
	}
	if (req.url === '/image') {
		const readStream = fs.createReadStream('./static/bird.jpg');
		res.writeHead(200, { 'Content-type': 'image/jpg' });
		readStream.pipe(res);
	}


}).listen(3000);

console.log("Server is listening ")


--------------------------------------------------------------------------------
const readStream=fs.createReadStream('./example.txt','utf8');
const writeStream=fs.createWriteStream('example2.txt');
const writeStream2=fs.createWriteStream('example3.txt');
readStream.on('data',(chunk)=>{
	console.log(chunk);
	writeStream.write(chunk);
});

//USING PIPE CHAINING
readStream.pipe(writeStream2)
console.log("welcome to Noje JS");


----------------------------------------------------------------------------------------------
const server = http.createServer((req, res) => {
	res.write('Hello world from NodeJS i am dan dev');
	res.end();
});



const server = http.createServer((req, res) => {
	if(req.url==='/'){
		res.write('Hello world from NodeJS i am dan dev');
	res.end();
	}else{
		res.write('Accsesing other domiains');
		res.end();
	}

});

-----------------------------------------------------------------------------------------

const _=require('lodash');
let example =_.fill([1,2,3,4,5,],"banana",1,4);
console.log(example);

-------------------------------------------------------------------------------------------------------
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Dan de dev');
});

app.get('/example', (req, res) => {
	res.send('hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
	console.log(req.params);
	console.log(req.query);
	res.send("My Name is: " + req.params.name + " and am " + req.params.age + " years old");
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');


-----------------------------------------------------------------------------------------------------


*/