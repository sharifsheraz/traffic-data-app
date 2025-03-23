import app from './app';

//TODO: get it from env
const port = 4000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
