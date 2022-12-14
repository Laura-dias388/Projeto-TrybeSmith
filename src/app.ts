import express from 'express';

import Router from './routes/index';

const app = express();

app.use(express.json());
app.use(Router);

export default app;
