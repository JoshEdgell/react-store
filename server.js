const express           = require('express');
const mongoose          = require('mongoose');
const bodyParser        = require('body-parser');
const routes            = require('./routes');
const app               = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}

app.use(routes);

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/reactstoredb'
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection.once('open', ()=>{
    console.log("Products database open")
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Products server running on port " + port);
})