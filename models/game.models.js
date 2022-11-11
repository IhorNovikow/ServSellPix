const { Schema, model } = require("mongoose");

const game = new Schema({
  img: {
    big: {
      type: String,
      required: true,
    },
    average: {
      type: String,
      required: true,
    },
    small: {
      type: String,
      required: true,
    },
  },

  title: String,
  category:{
    new: Boolean,
    hit: Boolean,
    popular: Boolean,
    preview: Boolean
  },

  price: {
    priceOld: {
      type: Number,
      required: true,
    },
    priceNow: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0
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
    discription: String,
    systemRequirements: String,
    activation: String
  },

  photo: [String],
  reviews:[{
    date: {
      type: Date,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    userid: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    }
  }]
});

module.exports = model("Game", game);

