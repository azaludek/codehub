const express = require('express');
const app = express();
// const cors = require('cors');
// const multer = require('multer');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'codehub_db'
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
