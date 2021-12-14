const express = require('express');
const timeTracking = require('./data.js');

const app = express();

// set static folder
app.use(express.static('./public'));

// daily
app.get('/api/daily', (req, res) => {
  const daily = timeTracking.map((item) => {
    const {
      title,
      timeframes: {
        daily: { current, previous },
      },
    } = item;
    return { title, current, previous };
  });
  res.status(200).json(daily);
});

// weekly
app.get('/api/weekly', (req, res) => {
  const weekly = timeTracking.map((item) => {
    const {
      title,
      timeframes: {
        weekly: { current, previous },
      },
    } = item;
    return { title, current, previous };
  });
  res.status(200).json(weekly);
});

// monthly
app.get('/api/monthly', (req, res) => {
  const monthly = timeTracking.map((item) => {
    const {
      title,
      timeframes: {
        monthly: { current, previous },
      },
    } = item;
    return { title, current, previous };
  });
  res.status(200).json(monthly);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`));
