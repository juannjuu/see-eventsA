const express = require('express');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'see-events-teama is running OK',
        time: new Date().toLocaleString()
    })
})

app.use('/api/v1', routes);

app.listen(port, () => {
    console.log('App is running on port ', port);
})