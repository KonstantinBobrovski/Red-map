var http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendfile('public/index.html')
    
});
app.listen(port, () =>
    console.log('Express web app available at localhost: ${port}')
);