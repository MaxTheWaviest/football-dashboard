const express = require('express');
const axios = require('axios');
const app = express();
const port = 5001;

app.get('/api/match-data', async (req, res) => {
  try {
    const response = await axios.get('https://api.football-data.org/v4/matches', {
      headers: {
        'X-Auth-Token': 'a60544158a024385bdcbf2f0ef200dba'  // Replace with your API key
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching match data');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
