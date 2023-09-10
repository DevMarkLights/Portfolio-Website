const express = require("express");
const app = express();
const path = require('path')



// require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname + '/public')))
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))
app.get('/resume', (req,res) => res.sendFile(path.join(__dirname, 'public','index.html')))
app.get('/about', (req,res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))
app.get('/portfolio',(req,res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))
app.get('/', (req,res) => res.sendfile(path.join(__dirname, 'public', 'index.html')))


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });