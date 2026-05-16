'use strict';
 
const express = require('express');
const app = express();

// Exercise 1: GET /math/circle/:r
// Takes a radius as a URL parameter and responds with the area and circumference in JSON.
// Area = PI * r^2, Circumference = 2 * PI * r
app.get('/math/circle/:r', function(req, res) {
  // URL parameters come from req.params, and they're strings so we parse to float
  const r = parseFloat(req.params.r);
 
  const area = Math.PI * r * r;
  const circumference = Math.PI * 2 * r;
 
  // Respond with both values as a JSON object
  res.json({
    area: area,
    circumference: circumference
  });
});
 



// Exercise 2: GET /hello/name
// Takes 'first' and 'last' as query parameters and responds with a greeting.
// If either parameter is missing, responds with a 400 error listing what's missing.
app.get('/hello/name', function(req, res) {
  const first = req.query.first;
  const last = req.query.last;
 
  // Check which parameters are missing and build the error message accordingly
  if (!first && !last) {
    // Both are missing
    res.status(400).type('text').send('Missing Required GET parameters: first, last');
  } else if (!first) {
    // Only first name is missing
    res.status(400).type('text').send('Missing Required GET parameters: first');
  } else if (!last) {
    // Only last name is missing
    res.status(400).type('text').send('Missing Required GET parameters: last');
  } else {
    // Both parameters are present — send the greeting
    res.type('text').send(`Hello ${first} ${last}`);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);