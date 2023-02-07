const express = require('express');

const app = express();

const logDateTime = (req, res, next) => {
req.dateTime4Twin = new Date();
console.log(new Date());
next();
};

const requireJsonContent = () => {
return (req, res, next) => {
if(req.headers['content-type'] !== 'application/json') {
res.status(400).send('Server requires application/json');
} else {
next();
}
}
}

app.use(logDateTime);

app.get('/', requireJsonContent(), (req, res, next) => {
res.send(`Hello at ${req.dateTime4Twin}`);
});

app.listen(8000);