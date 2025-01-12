import express from 'express';

const app: express.Application = express();

const port: number = 3000;

// Server setup
app.listen(port, () => {
  console.log(`Server running at
		http://localhost:${port}/`);
});
