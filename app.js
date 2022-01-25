const express = require('express');
const app = express();
const routes = require('./routes');
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/v1', routes);

app.listen(port, () => {
    console.log('App is running on port ', port);
})