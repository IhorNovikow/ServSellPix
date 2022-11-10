const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const varMiddleware = require("./middleware/variable");

const add = require("./routes/add");
const get = require("./routes/get");
const auth = require("./routes/auth");

const MONGODB_URI = `mongodb+srv://admin:DCfibg1W3aogbte9@cluster0.vyvvowh.mongodb.net/?retryWrites=true&w=majority`;

const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URI
})

const API = "https://data.mongodb-api.com/app/data-kyipt/endpoint/data/v1";

const app = express();
const PORT = process.env.PORT || 4200;

async function start() {
  //const password = "DCfibg1W3aogbte9";
  //const password = 'admin123456789'
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'Some secret value',
  resave: false,
  saveUninitialized: false,
  store,
}))
app.use(varMiddleware);

app.use("/add", add);
app.use("/get", get);
app.use("/auth", auth);


app.use((req, res, next) => {
  res.sendFile("/public/index.html");
});

start();


