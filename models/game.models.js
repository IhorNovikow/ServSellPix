const { Schema, model } = require("mongoose");

const Game = new Schema({
  img: {
    big: {
      type: String,
      required: true,
    },
    average: {
      type: String,
      required: true,
    },
  },
  digiSellerID: String,
  title: {
    type: String,
    default: ''
  },
  category:{
    new: Boolean,
    hit: Boolean,
    popular: Boolean,
    preview: Boolean,
    secondBaner: Boolean
  },

  price: {
    priceNow: {
      type: Number,
      default: 0
    },
    discount: {
      required: true,
      type: Number,
    },

  },
  mainPoints: {
    genre: String,
    activation: String,
    releaseDate: String,
    publisher: String,
    developer: String,
    region: String,
  },
  discription: {
    discription: {
      type: String,
      default: ''
    },
    systemRequirements: String,
    activation: String
  },

  photo: [String],
  linkSell: String,
});

module.exports = model("Game", Game);

