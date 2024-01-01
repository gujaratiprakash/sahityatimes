import { NextResponse } from "next/server";
import ArticleModel from "@/models/article";
import databaseConnection from "@/lib/mongodb";

await databaseConnection();

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const article = await ArticleModel.findById(id);
    return NextResponse.json(article, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  try {
    const { title, image, subtitle, category, description ,language} = await request.json();
    await databaseConnection();
    const updatedArticle = {
      title: title,
      image: image,
      subtitle: subtitle,
      category: category,
      description: description,
      language: language,
    };
    const updateStatus = await ArticleModel.findByIdAndUpdate(id, updatedArticle);
    if (!updateStatus) {
      return NextResponse.json(
        { message: "Article with provided articleId doesn't exist!" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Article updated successfully!", article: updatedArticle },
      { status: 200 }
    );
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await databaseConnection();
    const deleteStatus = await ArticleModel.findByIdAndDelete(id);
    if (!deleteStatus) {
      return NextResponse.json(
        { message: "Article with provided articleId doesn't exist!" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Article deleted successfully!", articleId: id },
      { status: 200 }
    );
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
