import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.send('GET ok!');
});

app.post('/test-post', (req, res) => {
  return res.send('POST ok!');
});

app.listen(3000, () => console.log('Listening on port 3000'));
