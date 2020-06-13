
//mongoose and db connection block
const mongoose = require("mongoose");
const uri = require("./config/keys").mongoURI;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//models, before routes
const User = require('./models/User')
const Post = require('./models/Post')


//express
const express = require("express");
const app = express();
const cors = require('cors');
const passport = require("passport");


app.use(express.json());
app.use(cors());
// Passport middleware
app.use(passport.initialize());
  // Passport config
require("./config/passport")(passport);

  


  // Routes
  const auths = require("./routes/api/v1/auths")
  const users = require("./routes/api/v1/users");
  const posts = require("./routes/api/v1/posts");
  app.use("/api/v1/auths", auths)
  app.use("/api/v1/users", users);
  app.use("/api/v1/posts", posts);
 



const port = process.env.PORT || 5000; //process.env.PORT is something to do w heroku launch
app.listen(port, () => console.log(`Server running on ${port} !`));