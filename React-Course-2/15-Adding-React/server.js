const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect to database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
	res.json({ msg: 'Welcome to the ContactKeeper API' })
);

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// install react in client folder
// npx create-react-app client

// concurrently allow us to run both frontend and backend servers with the same command

// "client": "npm start --prefix client" - will run it in a client folder
// "clientinstall": "npm install --prefix client" - install in a client folder

// "dev": "concurrently \"npm run server\" \"npm run client\"" - run both servers at the same time
