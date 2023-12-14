const express = require('express')
const app = express();
const cors = require('cors')
const contest = require('./contest'); // import the contest module

app.use(cors({
    origin: '*'
}))

app.get('/', contest); // use the contest module as a middleware for your route

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});