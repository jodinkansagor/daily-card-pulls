const { Router } = require("express");
const User = require("../models/User");
const ensureAuth = require("../middleware/ensure-auth");

const MAX_IN_MS = 24 * 60 * 60 * 1000;

const setSessionCookie = (res, token) => {
  res.cookie("session", token, {
    maxAge: MAX_IN_MS,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
};

module.exports = Router()
  .post("/signup", (req, res, next) => {
    User.create(req.body)
      .then((user) => {
        setSessionCookie(res, user.authToken());
        res.send(user);
      })
      .catch(next);
  })

  .post("/login", (req, res, next) => {
    User.authenticate(req.body)

      .then((user) => {
        setSessionCookie(res, user.authToken());
        res.send(user);
      })
      .catch(next);
  })

  .post("/logout", (req, res) => {
    res.clearCookie("session", {
      maxAge: MAX_IN_MS,
    });
    res.end();
  })

  .get("/verify", ensureAuth, (req, res, next) => {
    res.send(req.user);
  });
