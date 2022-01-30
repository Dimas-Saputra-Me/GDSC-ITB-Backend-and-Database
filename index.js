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

const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('./models/user');
const Movie = require('./models/movie');

router.get('/movie', (req, res) => {
    Movie.find({})
        .then((movies) => {
            res.json(movies);
        })
        .catch((err) => {
            console.error(err);
        })
})

router.post('/user/get', (req, res) => {
    User.findById(req.body.userId)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({ msg: "Failed" });
        })
})

router.post('/user/update', (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body)
        .then((user) => {
            res.json({ msg: "Success updated user" })
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({ msg: "Failed to update" });
        })
})

router.post('/user/register', (req, res) => {
    const salt = bcrypt.genSaltSync(10);

    User.create({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, salt),
        wishlist: []
    }, function (err, user) {
        if (err) {
            res.status(500).json(err);
            return;
        };

        return res.json({ msg: "Added user" })
    })

})

router.post('/user/login', (req, res) => {

    User.findOne({ email: req.body.email })
        .then((user) => {
            //email not found
            if (user === null) {
                res.status(400).json({ msg: "Bad request" });
                return;
            }

            //verify password
            let verify = bcrypt.compareSync(req.body.password, user.password);
            if (verify === false) {
                res.status(400).json({ msg: "Bad request" });
                return;
            }

            res.json(user);
        }).catch((err) => {
            console.error(err);
        })
})