const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// allows request from the frontend
app.use(cors());
// express to recognize the incoming Request Object as a JSON Object. 
app.use(express.json());
// express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: false }))

// create
app.post('/insert', (request, response) => {

});

// read
app.get('/getAll', (request, response) => {
    console.log('test');
});

// delete


const PORT = process.env.PORT || 5000


app.listen(PORT, ()=> console.log('app is running'));