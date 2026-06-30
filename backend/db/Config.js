// const mongoose=require("mongoose")
// mongoose.connect("mongodb+srv://mdsarfraaznasir_db_user:c1fICMVB8HUmLMSH@cluster0.6zjy2ss.mongodb.net/?appName=Cluster0")

// const dns = require('dns');

// dns.setServers(['1.1.1.1', '8.8.8.8']);
// const mongoose = require('mongoose');

// mongoose
//   .connect(
//     'mongodb+srv://mdsarfraaznasir_db_user:c1fICMVB8HUmLMSH@cluster0.6zjy2ss.mongodb.net/?appName=Cluster0',
//   )
//   .then(() => {
//     console.log('MongoDB Connected');
//   })
//   .catch((err) => {
//     console.error('MongoDB Error:', err);
//   });

const dns = require('dns');
const mongoose = require('mongoose');

// Set custom DNS servers to help resolve MongoDB Atlas SRV records
dns.setServers(['1.1.1.1', '8.8.8.8']);

// Retrieve the connection string from environment variables
const mongoURI =
  process.env.MONGO_URL ||
  'mongodb+srv://mdsarfraaznasir_db_user:c1*******@cluster0.6zjy2ss.mongodb.net/?appName=Cluster0';

if (!process.env.MONGO_URL) {
  console.warn(
    'Warning: MONGO_URL environment variable not found. Falling back to the default hardcoded URI.',
  );
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('MongoDB Connected Successfully');
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err);
  });
