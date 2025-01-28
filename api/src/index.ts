import express, { NextFunction, Response, Request } from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import connectPgSimple from 'connect-pg-simple';
import cors from 'cors';
import passport from 'passport';
import { startPassport } from './config/passport';

import { authRoute } from './route/index';

const app: express.Application = express();

startPassport();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
dotenv.config();

const port: number = 3000;
const dbUrl: string = process.env.DATABASE_URL ?? '';
const secret: string = process.env.SESSION_SECRET ?? '';
const pgSession = connectPgSimple(session);

app.use(
  session({
    store: new pgSession({
      conString: dbUrl,
      createTableIfMissing: true,
      tableName: 'session',
    }),
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  }),
);

app.use('/api/auth', authRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!err) return next();
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

process.on('uncaughtException', (err) => {
  console.log(err);
  return process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  return process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
