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
 
const PORT = process.env.PORT || 8000;
app.listen(PORT);