const User = require("../../models/user.models");
const Game = require("../../models/game.models");
const News = require("../../models/news.models");


class AddInfo {
  async addUser(req, res) {
    const user = new User({
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.img,
    });
    try {
      await user.save();
      res.redirect("/");
    } catch (e) {
      console.log(e);
    }
  };
  async addGame(req, res) {
    console.log(req.body)
    const game = new Game({
      img: {
        big: req.body.big,
        average: req.body.average,
        small: req.body.small,
      },
    
      title: req.body.title,
      category:{
        new: req.body.new,
        hit: req.body.hit,
        popular: req.body.popular,
        preview: req.body.preview,
      },
    
      price: {
        priceOld: req.body.priceOld,
        priceNow: req.body.priceNow,
        discount: req.body.discount,
    
      },
      mainPoints: {
        genre: req.body.discount,
        activation: req.body.activationM,
        releaseDate: req.body.releaseDate,
        publisher: req.body.publisher,
        developer: req.body.developer,
        region: req.body.region,
      },
      discription: {
        discription: req.body.discription,
        systemRequirements: req.body.systemRequirements,
        activation: req.body.activationD,
      },
    
      photo: req.body.photo.split(','),
      reviews:[{}]
    })
    try {
      await game.save(game)
      console.log(game)
      res.redirect('/')
      } catch (e) {
          console.log(e)
      }
  };
  async addNews(req, res) {
    const news = new News({
      img: {
        big: req.body.big,
        small: req.body.small,
      },
      statistics: {
        date: req.body.date,
        view: req.body.view,
        coments: req.body.coments,
      },
      title: req.body.title,
      discription: {
        mainText: req.body.mainText,
        photo: req.body.photo,
        subText: req.body.subText,
      },
    });
  try {
    await news.save()
    res.redirect('/')  
  } catch (e) {
    console.log(e);
  }
  }
}

module.exports = new AddInfo();
