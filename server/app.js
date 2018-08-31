const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const axios = require('axios');
const cors = require('cors')
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.get('/words', function(req, res) {
    axios.get(`http://app.linkedin-reach.io/words?difficulty=${req.query.difficulty}`)
    .then((response) => {
        let dictionary = response.data.split('\n')
        return res.send(dictionary)
    })
    .catch((err) => {
        console.log(err)
        res.end()
    })
})

app.get('/hint', function(req, res) {
    axios({
        method:'get',
        url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${req.query.word}`
    })
    .then((response) => {
        return res.send(response.data.results)
    })
    .catch((err) => {
        console.log(err)
        res.end()
    })
})



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
