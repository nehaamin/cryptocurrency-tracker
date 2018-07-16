const bodyParser = require('body-parser');
const app = require('express')()
const firebaseRef = require('./firebase')
const userHandler = require('./userHandler');
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('*', (req, res, next) => {
    req.firebaseRef = firebaseRef;
    next();
});
app.use('/user', userHandler);

app.listen(port, () => console.log(`Listening on port ${port}`))
