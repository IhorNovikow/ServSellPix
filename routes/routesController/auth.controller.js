const User = require("../../models/user.models");
const Game = require("../../models/game.models");
const News = require("../../models/news.models");

const createError = require("../../service/error.service");
const bcrypt = require( "bcryptjs" );

class Auth {
  async login(req, res) {
    try {
      const { nickname, password } = req.body;
      const userBD = await User.findOne({ nickname });
      if (!userBD) {
        return res
          .status(400)
          .send({ message: `Пользователь с именем ${nickname} не найден` });
      } else {
        const areSame = await bcrypt.compare(password, userBD.password);
        if (areSame) {
          req.session.user = userBD;
          req.session.isAuthenticated = true;
          await req.session.save((err) => {
            if (err) {
              throw err;
            }
            res.send({
              message: "сессия открыта, вы вошли в магазин",
              isAuthenticated: req.session.isAuthenticated,
            });
          });
        } else {
          res.send({ message: 'неверный пароль'});
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  async auth(req, res) {
    const nickname = req.body.nickname;
    const candidate = await User.findOne({ nickname });
    if (candidate) {
      const a = bcrypt.hash(req.body.password, 12);
      return res.status(409).send(
        createError(409, `Извините, пользователь с именем ${nickname} уже существует`)
        //message: `Извините, пользователь с именем ${nickname} уже существует`,
      );
    }
    const hashPassword = await bcrypt.hash(req.body.password, 12);

    const user = new User({
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashPassword,
      avatar: req.body.img,
    });
    try {
      await user.save();
      res.redirect("/");
    } catch (e) {
      console.log(e);
    }
  }

  async logout(req, res) {
    req.session.destroy(() => {
      res.json({ message: "сессия закрыта, вы вышли из магазина" });
    });
  }
}

module.exports = new Auth();
