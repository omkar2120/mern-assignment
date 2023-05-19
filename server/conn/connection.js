const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((error) => {
    console.error('Connection error:', error);
  });
