import mongoose, { Schema, models } from "mongoose";

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Article = models.Article || mongoose.model("Article", articleSchema);
export default Article;
