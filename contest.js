const axios = require('axios');

module.exports = async (req, res) => {
    try {
      const apiUrl = 'https://clist.by/api/v4/json/contest/?upcoming=true&end_time__during=1728000&duration__gt=5400&duration__lt=10800&username=kmrrohit&api_key=b6bee0d321166ca219f3c2d83da9626a14043d93';
      const response = await axios.get(apiUrl);
      res.json(response.data);
    } catch (error) {
      if (error instanceof AggregateError) {
        for (const individualError of error.errors) {
          console.error(individualError);
        }
      } else {
        console.error(error);
      }
      res.status(500).json({ error: error.toString() });
    }
};