console.log('Inside server.js');

const express = require('express');
const db = require('./config/connection');  
const userRoutes = require('./routes/API/userroutes');
const thoughtRoutes = require('./routes/API/thoughtroutes');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});