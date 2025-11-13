const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const errorHandler = require('./middlewares/error_hander');
const expressListRoutes = require('express-list-routes');
const authRouter = require('./routes/auth_router');
const userRouter = require('./routes/user_router');

app.use('/', express.static('./public/dist'));
app.use(express.json());
app.use(errorHandler);
app.use(authRouter);
app.use(userRouter);
expressListRoutes(app);

// Catch-all route to handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/dist', 'index.html'));
});

app.listen(port, () => {
  console.log('server listening on port', port);
});