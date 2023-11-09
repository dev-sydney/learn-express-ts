import express from 'express';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';

import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['jjkdfj'] }));
app.use(AppRouter.getInstance())


app.listen(3000, () => {
  console.log('listening to requests on port 3000');
});
