const { Schema, model } = require("mongoose");

const GameID = new Schema({
  name: [String]
});

module.exports = model("GameID", GameID);