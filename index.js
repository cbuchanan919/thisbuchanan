const express = require('express');
  
const app = express();
const PORT = 3000;

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.static('public'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/scan-qr", (req, res) => {
    res.render("pages/scan-qr");
})

app.post('/', (req, res)=>{
    const {name} = req.body;
    res.send(`Welcome ${name}`);
})

app.get("/", (req, res) => {
    // res.status(200);
    // res.send("Welcome to the root URL of the Server");
    res.render("pages/index")
})


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello GFG Learner!</h1>");
});

app.listen(PORT, (error) =>{ 
    if(!error)
        console.log("Server is Successfully Running, " +
                   "and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);