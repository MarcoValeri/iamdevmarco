import express from 'express';

import { router as homeRouter } from './routes/homeRoutes';

const app = express();
const port = process.env.PORT || 8080;

// views
app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(homeRouter);

app.listen(port, () => {
    console.log(`App is runnin on port: ${port}`);
})