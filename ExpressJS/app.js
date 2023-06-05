const express = require('express');
const routes = require('./routes');

const app = express();

// parse application/json
// app.use(bodyParser.json())

app.use('/auth', routes.auth);

app.get('/', (req, res) => {
    res.send('Express App');
});

app.listen(3000, () => {
    console.log(`App running on port 3000.`)
});