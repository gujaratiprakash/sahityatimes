import databaseConnection from "@/lib/mongodb";
import { NextResponse } from "next/server";
import CategoryModel from "@/models/category";

export async function GET(request, { params }) {
  try {
    await databaseConnection();
    const categories = await CategoryModel.find({});
    return NextResponse.json(categories, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, image } = await request.json();
    await databaseConnection();
    const newCategory = {
      title: title,
      image: image,
    };
    await CategoryModel.create(newCategory);

    return NextResponse.json(
      { message: "Category added successfully!", category: newCategory },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while adding the category", errorMessage: error.message },
      { status: 500 }
    );
  }
}
