const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

require('./server/config/mongoose.js')();
require('./server/config/routes.js')(app);

app.listen(8000, function(){
    console.log('listening in localhost on port 8000!');
})