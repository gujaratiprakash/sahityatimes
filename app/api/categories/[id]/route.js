import { NextResponse } from "next/server";
import CategoryModel from "@/models/category";
import databaseConnection from "@/lib/mongodb";

await databaseConnection();

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const category = await CategoryModel.findById(id);
    return NextResponse.json(category, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  try {
    const { title, image } = await request.json();
    await databaseConnection();
    const updatedCategory = {
      title: title,
      image: image,
    };
    const updateStatus = await CategoryModel.findByIdAndUpdate(id, updatedCategory);
    if (!updateStatus) {
      return NextResponse.json(
        { message: "Category with provided categoryId doesn't exist!" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Category updated successfully!", category: updatedCategory },
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
    const deleteStatus = await CategoryModel.findByIdAndDelete(id);
    if (!deleteStatus) {
      return NextResponse.json(
        { message: "Category with provided categoryId doesn't exist!" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Category deleted successfully!", categoryId: id },
      { status: 200 }
    );
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
