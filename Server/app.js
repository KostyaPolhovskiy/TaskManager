const express = require("express");
const fs = require("fs");
const data = require('./data/data.json');
const cors = require('cors');
const bodyParser = require("body-parser");


function saveData() {
    fs.writeFile('./data/data.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })
}

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.get('/Task', (request, response) => {
    console.log("get");
    response.send(data);
    response.end();
});

app.post('/Task', (request, response) => {
    console.log("post");
    if (!request.body) return response.sendStatus(400);
    let card = request.body;
    card.CreatedDate = new Date();
    card.TaskId = 'i' + Date.now();
    data.unshift(card);
    saveData();
    response.end();
});

app.put('/Task/:id', (request, response) => {
    let taskId = request.params.id;
    let card = request.body;
    console.log("put" + taskId);
    data.forEach((task) => {
        if (task.TaskId == taskId) data.splice(data.indexOf(task), 1, card);
    });
    saveData();
    response.end();
});

app.delete('/Task/:id', (request, response) => {
    let taskId = request.params.id;
    console.log("delete" + taskId);
    data.forEach((task) => {
        if (task.TaskId == taskId) data.splice(data.indexOf(task), 1);
    });

    saveData();

    response.end();
})

app.listen(3000);

console.log("Server is running on 3000 port");