// contest.js
const axios = require('axios');

exports.contest = async (req, res, next) => {
    try {
        const apiUrl = 'https://clist.by/api/v4/json/contest/?upcoming=true&end_time__during=1728000&duration__gt=5400&duration__lt=10800&username=kmrrohit&api_key=b6bee0d321166ca219f3c2d83da9626a14043d93';
        const response = await axios.get(apiUrl);
        req.contestData = response.data; // attach the data to the request object
        next(); // proceed to the next middleware
    } catch (error) {
        next(error); // if there's an error, pass it to the error handling middleware
    }
};