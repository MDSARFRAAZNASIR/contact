const express = require('express');
const cors = require('cors');
require('./db/config');
// const Config=require('./db/Config');
const User = require('./db/User');
const Contact = require('./db/Contact');
const app = express();
app.use(express.json());
app.use(cors());

// For ES Modules (import)
// import dns from 'node:dns';
// dns.setServers(['1.1.1.1', '8.8.8.8']);

app.post('/register', async (req, resp) => {
  let Users = new User(req.body);
  let result = await Users.save();
  resp.send(result);
});
app.post('/login', async (req, resp) => {
  // console.log(req.body)
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select('-password');
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: 'no found' });
    }
  } else {
    resp.send({ result: 'no found' });
  }
});
app.post('/addcontact', async (req, resp) => {
  let contact = new Contact(req.body);
  let result = await contact.save();
  resp.send(result);
});
app.get('/contacts', async (req, resp) => {
  let contacts = await Contact.find();
  if (contacts.length > 0) {
    resp.send(contacts);
  } else {
    resp.send({ result: 'not found' });
  }
});
app.delete('/delete/:id', async (req, resp) => {
  const result = await Contact.deleteOne({ id: req.params.body });
  resp.send(result);
});
app.get('/prefillpro/:id', async (req, resp) => {
  let result = await Contact.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: 'result not found' });
  }
});
app.put('/updatecontact/:id', async (req, resp) => {
  let result = await Contact.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    },
  );
  resp.send(result);
});
app.get('/search/:key', async (req, resp) => {
  let result = await Contact.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});
app.listen(5000);
