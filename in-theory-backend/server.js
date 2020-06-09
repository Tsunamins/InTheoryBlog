const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/api/v1/users");
const posts = require("./routes/api/v1/posts");





const uri = require("./config/keys").mongoURI;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
  app.use(passport.initialize());
  // Passport config
  require("./config/passport")(passport);
  // Routes
  app.use("/api/v1/users", users);
  app.use("/api/v1/posts", posts);
 



const port = process.env.PORT || 5000; //process.env.PORT is something to do w heroku launch
app.listen(port, () => console.log(`Server running on ${port} !`));