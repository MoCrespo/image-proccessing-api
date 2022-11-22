import express from 'express';
import cors from 'cors';

// routes
import router from './routes/image.routes';

const app = express();
app.use(cors());
const port = 5000;

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
