const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const firstRouts = require("./routs/firstRouts");

const API = "https://data.mongodb-api.com/app/data-kyipt/endpoint/data/v1";

//Замените <password> паролем для администратора . Убедитесь, что все параметры параметров закодированы в URL .

const app = express();
const PORT = process.env.PORT || 4200;

async function start() {
  const password = "DCfibg1W3aogbte9";
  //const password = 'admin123456789'
  try {
    const url = `mongodb+srv://admin:${password}@cluster0.vyvvowh.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(url, { useNewUrlParser: true });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

app.use(express.static(path.join(__dirname, "public")));
app.use("/api", firstRouts);

app.use((req, res, next) => {
  res.sendFile("/public/index.html");
});

start();
