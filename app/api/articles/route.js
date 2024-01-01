import databaseConnection from "@/lib/mongodb";
import { NextResponse } from "next/server";
import ArticleModel from "@/models/article";

export async function GET(request, { params }) {
  try {
    await databaseConnection();
    const articles = await ArticleModel.find({});
    return NextResponse.json(articles, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, image, subtitle, category, description, language } = await request.json();
    await databaseConnection();
    const newArticle = {
      title: title,
      image: image,
      subtitle: subtitle,
      category: category,
      description: description,
      language: language,
    };
    await ArticleModel.create(newArticle);

    return NextResponse.json(
      { message: "Article added successfully!", article: newArticle },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while adding the article", errorMessage: error.message },
      { status: 500 }
    );
  }
}
