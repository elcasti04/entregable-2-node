import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.json())

app.set('port', 3000)



app.use('/', routes)

export default app;