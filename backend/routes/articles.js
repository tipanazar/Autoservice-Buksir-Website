const express = require("express");
const router = express.Router();

const { Article, ArticleTemplate } = require("../models");
const { createError } = require("../helpers");

router.get("/get-templates", async (req, res, next) => {
  try {
    //   console.log(req.params);
    const templates = await ArticleTemplate.find();
    res.json(templates);
  } catch (err) {
    next(err);
  }
});

router.get("/:category/:articleName", async (req, res, next) => {
  try {
    const { category, articleName } = req.params;
    const { articleId } = await ArticleTemplate.findOne({
      path: `/${category}/${articleName}`,
    });
    if (!articleId) {
      throw createError(404, "Помилка сайту: стаття не знайдена.");
    }
    const article = await Article.findById({ _id: articleId});
    console.log(article);
    if (!article) {
      throw createError(404, "Помилка сайту: стаття не знайдена.");
    }
    res.json(article);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
