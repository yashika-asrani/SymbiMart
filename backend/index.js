const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const connect = require("./db");
const User = require("./models/UserSchema");

connect();

const app = express()
const port = 8000

app.use(cors());
app.use(express.json());

const JWT_SECRET = "This_is_Yugant's_biggest_secret"

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        let encryptedPassword = await bcrypt.hash(password, salt);
        if (!name) {
            return res.status(404).send("Name not found");
        }
        if (!email) {
            return res.status(404).send("Email not found");
        }
        if (!password) {
            return res.status(404).send("Password not found");
        }

        let useremail = req.body.email.toLowerCase();
        const user = User.create({
            name: name,
            email: useremail,
            password: encryptedPassword
        });
        const data = {
            id: user.id,
        };

        // Signing authtoken
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken: authtoken });
    } catch (error) {
        res.send(error);
    }

});

app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if(!email) {
          return res.status(404).send("Email not found");
      }
      if(!password) {
          return res.status(404).send("Password not found");
      }
      let useremail = req.body.email.toLowerCase();
      let user = await User.findOne({ email: useremail });
        if (!user) {
          return res
            .status(400)
            .json({ error: "Please try to login with correct credentials." });
        }
  
        // Comparing password using bcryptjs.
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          return res
            .status(400)
            .json({ error: "Please try to login with correct credentials." });
        }
  
        const data = {
          user: {
            id: user.id,
          },
        };
        // Compare authentication token using "jsonwebtoken".
        const authtoken = jwt.sign(data, JWT_SECRET);
        let usersend = await User.findById(data.user.id).select("-password");
        // Sending authentication token to user.
        res.json({ authtoken: authtoken, user: usersend, userid: data.user.id });
    } catch (error) {
      res.send(error);
    }
  });
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})