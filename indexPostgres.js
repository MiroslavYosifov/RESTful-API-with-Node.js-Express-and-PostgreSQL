// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const db = require('./queries');
// const port = 3000;

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// //Get reques to root URL (/)
// app.get('/', (request, response) => {
//   response.json({ Welcome: 'How to create rest API' })
// })

// app.get('/countries', db.getCountries);
// app.get('/countries/:id', db.getCountryById);
// app.post('/countries', db.createCountry);
// app.put('/countries/:id', db.updateCountry);
// app.delete('/countries/:id', db.deleteCountry);

// app.listen(port, () => {
//   console.log(`app running on port ${port}.`);
// });
