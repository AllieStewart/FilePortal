// Start of JS file
// Server handler for routes.
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
// End of JS file