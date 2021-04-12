const express =  ('express');
const router = require('./route/index');

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

router(app);
