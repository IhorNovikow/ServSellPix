const { Schema, model } = require("mongoose");

const news = new Schema({
  img: {
    big: {
      type: String,
      required: true,
    },
    small: {
      type: String,
      required: true,
    },
  },
  statistics: {
    date: {
      type: Date,
      required: true,
    },
    view: {
      type: Number,
      required: true,
    },
    coments: {
      type: Number,
      required: true,
    },
  },
  title: String,
  discription: {
    mainText: {
      type: String,
      required: true,
      default: '',
    },
    photo: {
      type: String,
      default: '',
    },
    subText: {
      type: String,
      default: '',
    },
  }
});

module.exports = model("News", news);
