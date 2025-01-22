import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import connectPgSimple from 'connect-pg-simple';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
