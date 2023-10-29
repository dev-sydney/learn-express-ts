import express from 'express';
import authRouter from './routes/authRoutes';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['jjkdfj'] }));
app.use('/api/v1/users', authRouter);

app.listen(3000, () => {
  console.log('listening to requests on port 3001');
});
