const express = require("express");
const router = express.Router();

const { Article, ArticleTemplate } = require("../models");
const { createError } = require("../helpers");

router.get("/get-templates", async (req, res, next) => {
  try {
    const templates = await ArticleTemplate.find();
    if (!templates.length) {
      throw createError(404, "Помилка сайту: статті не знайдена.");
    }
    res.json(templates);
  } catch (err) {
    next(err);
  }
});

router.get("/:category/:articleName", async (req, res, next) => {
  try {
    const { category, articleName } = req.params;

    const template = await ArticleTemplate.findOne({
      path: `/${category}/${articleName}`,
    });
    if (!template) {
      throw createError(
        404,
        "Помилка сайту: статті не знайдено. Перевірте адресний рядок."
      );
    }

    const article = await Article.findById({ _id: template.articleId });
    if (!article) {
      throw createError(
        404,
        "Помилка сайту: статті не знайдено. Перевірте адресний рядок."
      );
    }

    res.json({ text: article.text, path: `/${category}/${articleName}` });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
