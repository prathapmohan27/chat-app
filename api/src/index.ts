import express from 'express';

const app: express.Application = express();

const port: number = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Server setup
app.listen(port, () => {
  console.log(`Server running at
		http://localhost:${port}/`);
});
