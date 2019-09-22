import express from 'express';

import serverRenderer from './middleware/renderer';

const PORT = process.env.PORT || 3000;;
const path = require('path');

const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);

router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    console.log('something bad happened', error);
  }
  else {
    console.log(`listening on ${PORT}...`);
  }
});
