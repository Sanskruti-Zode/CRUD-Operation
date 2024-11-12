const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://co2021srzode:WwgFD5IFTk7TGt30@cluster0.kfjip.mongodb.net/CRUD-Operation?retryWrites=true&w=majority&appName=Cluster0';
//const mongoURI = 'mongodb://localhost:27017/crud-Zode';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
