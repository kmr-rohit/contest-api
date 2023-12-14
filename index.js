// index.js
const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors({
    origin: '*'
}))
let contest = require('./contest');


app.get('/', (req,res) => {
    res.send(`<b>API URL:</b>/<b style="color:crimson;">yourLeetcodeUsername</b>`)
});

app.get('/contest', contest.contest, (req, res) => {
    res.json(req.contestData); // send the data as a JSON response
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
