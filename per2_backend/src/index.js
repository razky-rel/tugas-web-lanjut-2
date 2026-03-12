require('dotenv').config(); 
const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const gamesRoutes = require('./routes/gamesRoutes'); 
const app = express(); 
 
app.use(cors({ 
  origin: 'http://localhost:3001',
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization' 
})); 
app.use('/api', gamesRoutes); 
 
app.use(bodyParser.json()); 
 
app.get('/', (req, res) => { 
  res.send('Server berjalan!'); 
}); 
 
const PORT = 3000; 
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`)); 
