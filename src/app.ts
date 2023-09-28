import express from 'express';
import imagesRouter from './routes/images/imagesRoute';

const app = express();

app.use('/api', imagesRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

export default app;
