const express = require('express');
const mongoose = require('mongoose');
mongoose.pluralize(null);
const morgan = require('morgan');
require('dotenv').config();

const routes = require('./backend/api');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1


//mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/gdsc-itb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//ata parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//production code
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

//API
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(PORT, console.log(`Server is starting at ${PORT}`));