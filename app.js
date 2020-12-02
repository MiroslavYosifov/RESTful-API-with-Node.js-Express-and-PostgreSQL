const express = require("express");
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) =>{
    res.send('HELLO WORLDS');
});

app.listen(port, () => {
    console.log(`APP IS LISTENING AT PORT ${port}`);
})