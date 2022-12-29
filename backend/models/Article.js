const { Schema, model } = require("mongoose");

const articleSchema = Schema({
  text: {
    type: String,
    required: [true, "All fields are required"],
  },
});

const articleTemplateSchema = Schema({
  title: {
    type: String,
    required: [true, "All fields are required"],
  },
  path: {
    type: String,
    required: [true, "All fields are required"],
  },
  articleId: {
    type: String,
    required: [true, "All fields are required"],
  },
  imageLink: {
    type: String,
    required: [true, "All fields are required"],
  },
});

const Article = model("articles", articleSchema);
const ArticleTemplate = model("articles-templates", articleTemplateSchema);

module.exports = { Article, ArticleTemplate };
