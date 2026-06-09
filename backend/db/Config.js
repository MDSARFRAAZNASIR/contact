// const mongoose=require("mongoose")
// mongoose.connect("mongodb+srv://mdsarfraaznasir_db_user:c1fICMVB8HUmLMSH@cluster0.6zjy2ss.mongodb.net/?appName=Cluster0")

const dns = require('dns');

dns.setServers(['1.1.1.1', '8.8.8.8']);
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://mdsarfraaznasir_db_user:c1fICMVB8HUmLMSH@cluster0.6zjy2ss.mongodb.net/?appName=Cluster0',
  )
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.error('MongoDB Error:', err);
  });
