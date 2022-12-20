const User = require("../../models/user.models");
const Game = require("../../models/game.models");
const News = require("../../models/news.models");
const GameID = require("../../models/gameID.models");


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
    const game = new Game({
      img: {
        big: req.body.big,
        average: req.body.average,
      },
      digiSellerID: req.body.nameID,
      category:{
        new: req.body.new,
        hit: req.body.hit,
        popular: req.body.popular,
        preview: req.body.preview,
        secondBaner: req.body.secondBaner,
      },
    
      price: {discount: req.body.discount,},
      mainPoints: {
        genre: req.body.discount,
        activation: req.body.activationM,
        releaseDate: req.body.releaseDate,
        publisher: req.body.publisher,
        developer: req.body.developer,
        region: req.body.region,
      },
      discription: {
        systemRequirements: req.body.systemRequirements,
        activation: req.body.activationD,
      },
      photo: req.body.photo.split(','),
      linkSell: req.body.linkSell,
    })
    const servgameID = await GameID.find();
    const someID = await GameID.updateOne({'_id': '639b4dab4524b767ddce30ac'}, {$push: {'name': req.body.nameID}})

    try {
      await game.save()
      //res.json(req.body);
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
