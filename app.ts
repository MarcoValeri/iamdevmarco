import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
    res.send(`I am dev Marco`);
})

app.listen(port, () => {
    console.log(`App is runnin on port: ${port}`);
})