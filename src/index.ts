import express from 'express';
// import sharp from 'sharp';

const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.send('Hello, World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
