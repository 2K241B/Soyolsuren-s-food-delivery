import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  image: {
    type: String,
  },
  ingredient: {
    type: String,
  },
  price: {
    type: String,
    required: [true, "Price is required"]
  },
  discount: {
    type: Number,
    default: 0
  },
  categoryId: {
    type: Schema.ObjectId,
    ref: "category",
    required: [true, "Category id required"]
  }
})

export const FoodModel = model("food", foodSchema);

