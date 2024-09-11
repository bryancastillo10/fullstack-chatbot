import express from 'express';
const app = express()

const PORT = 3000;

app.get("/", (req,res)=> {
    res.send("Node TS is Ready");
});

app.listen(PORT, ()=> {
    console.log(`App Server is listening on port ${PORT}`);
});