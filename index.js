const express = require('express');
const mongoose = require('mongoose');
mongoose.pluralize(null);
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');

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

//data parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//API
app.use(morgan('tiny'));
app.use('/api', routes);

// production code 
if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));