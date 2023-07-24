const mongoose = require('mongoose');

// Database connection status mongoose.connect('mongodb://database ip address : port number ( default port **27017** can be omitted )/database name')
mongoose
  .connect('mongodb://127.0.0.1:27017/teacher-system', { useNewUrlParser: true })
  .then(() => {
    console.log('Mongodb Connectd...');
  })
  .catch((err) => {
    console.log(err);
  });
