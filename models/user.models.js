const {Schema, model} = require('mongoose');

const user = new Schema ({
  nickname: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  steam: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  avatar: String,
  mailingSetup: {
    sale: {
      type: Boolean,
      default: false
    },
    news: {
      type: Boolean,
      default: false
    },
    aboutUs: {
      type: Boolean,
      default: false
    },
  },
  coments: [
    {
    message: String,
    date: {
      type: Date,
      default: new Date(),
    }
  }
],
  game:{
    favorits: [
      {
        gameID: {
          type: Schema.Types.ObjectId,
          ref: 'Game',
        }
      }
    ],
    purchased: [
      {
        gameID: {
          type: Schema.Types.ObjectId,
          ref: 'Game',
        }
      }
    ],
  }
})

module.exports = model('User', user)