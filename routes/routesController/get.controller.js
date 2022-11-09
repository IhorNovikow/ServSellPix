const User = require("../../models/user.models");
const Game = require("../../models/game.models");
const News = require("../../models/news.models");

class GetInfo {
  async getUser(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }

  async getGame(req, res) {
    try {
      const game = await Game.find();
      res.json(game);
    } catch (e) {
      console.log(e);
    }
  }

  async getNews(req, res) {
    try {
      const news = await News.find();
      res.json(news);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new GetInfo();
