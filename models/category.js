import mongoose, { Schema, models } from "mongoose";

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },   
  },
  { timestamps: true }
);

const Category = models.Category || mongoose.model("Category", categorySchema);
export default Category;
